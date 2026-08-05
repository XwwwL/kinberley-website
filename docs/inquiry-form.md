# 询盘功能实现文档（Inquiry Form Implementation）

## 一、架构概览

询盘功能由**前端表单** + **后端 API** 两层协同实现：

```
访客填写表单 → 前端验证 → fetch POST → /api/contact → nodemailer → 163 SMTP → 收件邮箱
```

## 二、涉及文件

| 文件 | 作用 |
|---|---|
| `src/components/ContactForm.tsx` | 前端表单组件（React Client Component） |
| `src/app/api/contact/route.ts` | 后端 API 路由（Next.js API Route） |
| `src/data/translations.ts` | 表单字段的 6 语言翻译 |
| `.env.local` | SMTP 环境变量配置 |

## 三、前端表单（ContactForm.tsx）

### 3.1 组件结构

```
ContactForm
├── pending 状态 → 显示表单（6 个字段）
├── loading 状态 → 按钮显示加载动画 + 禁用
├── success 状态 → 绿色成功提示
└── error 状态   → 红色错误提示
```

### 3.2 表单字段

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `name` | `<input type="text">` | ✅ | 访客姓名 |
| `email` | `<input type="email">` | ✅ | 访客邮箱（回复地址） |
| `phone` | `<input type="text">` | — | WhatsApp / 电话 |
| `company` | `<input type="text">` | — | 公司名称 |
| `productCategory` | `<select>` | — | 产品分类下拉（11 个选项） |
| `message` | `<textarea>` | ✅ | 留言内容 |

### 3.3 提交流程

```ts
const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

1. 前端 `preventDefault()` 阻止默认表单提交
2. `setLoading(true)` 显示加载状态
3. `fetch("/api/contact", { method: "POST" })` 发送 JSON 数据
4. 成功 → `setSubmitted(true)` 显示成功提示
5. 失败 → `setError(...)` 显示错误提示

### 3.4 多语言支持

表单字段标签、placeholder、按钮文字和成功/错误提示均支持 6 种语言（en / zh / ru / pt / es / ar），通过 `contactFormTranslations[locale]` 获取。

### 3.5 使用位置

- **联系页** `/contact`：完整宽度表单
- **产品详情页** `/products/[slug]`：紧凑模式（`compact={true}`）

## 四、后端 API（route.ts）

### 4.1 路由

```
POST /api/contact
```

### 4.2 请求格式

```json
{
  "name": "John",
  "email": "john@example.com",
  "phone": "+1 555-1234",
  "company": "ABC Fashion",
  "productCategory": "Cufflinks",
  "message": "I need 1000 pcs of gold cufflinks..."
}
```

### 4.3 验证逻辑

```ts
if (!name || !email || !message) {
  return NextResponse.json(
    { success: false, error: "Name, email and message are required." },
    { status: 400 }
  );
}
```

必填字段：`name`、`email`、`message`

### 4.4 SMTP 发送流程

```ts
const transporter = nodemailer.createTransport({
  host: smtpHost,      // smtp.163.com
  port: smtpPort,      // 465
  secure: true,        // SSL
  auth: {
    user: smtpUser,    // 13968975857@163.com
    pass: smtpPass,    // 163 授权码
  },
});
```

使用 nodemailer 库通过 163.com SMTP 服务器发送邮件。

### 4.5 邮件格式

**收件人：** 13968975857@163.com  
**发件人：** "Jinbolli Website" <13968975857@163.com>  
**回复地址：** 访客填写的 email 字段  
**标题：** `New Inquiry: [产品分类] — from [访客姓名]`  

**正文：** HTML 格式的表格，包含所有表单字段：

```
New Inquiry from Jinbolli Hardware Website
┌──────────────────┬──────────────────────┐
│ Name             │ John                 │
│ Email            │ john@example.com     │
│ Phone            │ +1 555-1234          │
│ Company          │ ABC Fashion          │
│ Product Category │ Cufflinks            │
│ Message          │ I need 1000 pcs...   │
└──────────────────┴──────────────────────┘
Sent from Jinbolli Hardware website inquiry form.
```

### 4.6 返回格式

**成功：**
```json
{ "success": true }
```
HTTP 200

**失败：**
```json
{ "success": false, "error": "Failed to send email. Please try again later." }
```
HTTP 500

**验证失败：**
```json
{ "success": false, "error": "Name, email and message are required." }
```
HTTP 400

### 4.7 错误处理

```ts
catch (error) {
  console.error("Email send error:", error);
  return NextResponse.json(
    { success: false, error: "Failed to send email. Please try again later." },
    { status: 500 }
  );
}
```

SMTP 连接失败、授权认证失败、网络超时等异常均会返回 500 错误。

## 五、环境变量（.env.local）

| 变量名 | 值 | 说明 |
|---|---|---|
| `SMTP_HOST` | smtp.163.com | 163 邮箱 SMTP 服务器 |
| `SMTP_PORT` | 465 | SSL 加密端口 |
| `SMTP_USER` | 13968975857@163.com | 发件/认证账号 |
| `SMTP_PASS` | `***` | 163 邮箱 SMTP 授权码（非登录密码） |
| `RECIPIENT_EMAIL` | 13968975857@163.com | 接收询盘的邮箱 |

> **注意：** `.env.local` 已写入 `.gitignore`，不会提交到 GitHub，授权码不会泄露。

## 六、状态流转

```
┌─────────┐  提交  ┌─────────┐  成功  ┌──────────┐
│  PENDING │ ────→ │ LOADING │ ────→ │ SUCCESS  │
│ (表单)   │       │ (禁用按钮)│       │ (绿色提示)│
└─────────┘       └────┬────┘       └──────────┘
                       │
                       │ 失败
                       ↓
                 ┌──────────┐  重试  ┌─────────┐
                 │  ERROR   │ ────→ │ PENDING │
                 │ (红色提示)│       │ (表单)   │
                 └──────────┘       └─────────┘
```

## 七、如何更换 SMTP 服务商

如果要改用其他邮箱（如 Gmail、QQ邮箱、企业邮箱），只需修改 `.env.local` 中的 SMTP 配置：

**QQ 邮箱示例：**
```
SMTP_HOST=smtp.qq.com
SMTP_PORT=465
SMTP_USER=yourname@qq.com
SMTP_PASS=your-qq-auth-code
RECIPIENT_EMAIL=yourname@qq.com
```

**Gmail 示例：**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yourname@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=yourname@gmail.com
```

修改后重启 `npm run dev` 即可生效。

## 八、测试方法

1. 启动开发服务器：`npm run dev`
2. 访问 `http://localhost:3000/en/contact`
3. 填写表单（Name、Email、Message 必填）
4. 点击 "Send Inquiry"
5. 看到绿色提示 "Thank You for Your Inquiry"
6. 检查收件邮箱 13968975857@163.com 是否收到邮件

## 九、注意事项

1. **无数据库存储**：询盘数据仅通过邮件发送，不存储在服务器或数据库中
2. **163 授权码**：163 邮箱需要单独开启 SMTP 服务并获取授权码，不能用登录密码
3. **build 影响**：API Route 在 `npm run build` 时不参与静态生成，标记为 `ƒ (Dynamic)`
4. **Vercel 部署**：部署到 Vercel 后将 `.env.local` 中的变量填入 Vercel 项目设置 → Environment Variables

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-2 h-1 w-16 rounded ${
          centered ? "mx-auto" : ""
        } bg-[#1a3a5c]`}
      />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SectionLabelProps {
  text: string;
  accent?: boolean;
  light?: boolean;
}

export default function SectionLabel({
  text,
  accent = true,
  light = false,
}: SectionLabelProps) {
  const colorClass = light
    ? 'text-blue-300'
    : accent
      ? 'text-accent'
      : 'text-muted';

  return (
    <p className={`caption-3 uppercase tracking-widest mb-3 ${colorClass}`}>
      {text}
    </p>
  );
}

export default function SectionTitle({ children }: { children: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-text-main">{children}</h2>
      <span className="mt-3 block h-1 w-12 rounded bg-skin" />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-off-white" aria-label="Loading" role="status">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-border border-t-blue rounded-full animate-spin" aria-hidden="true" />
        <p className="text-muted text-sm font-inter">Loading&hellip;</p>
      </div>
    </div>
  );
}

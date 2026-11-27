export default function Loading() {
  return (
    <div
      className="bg-base pt-24 pb-20 lg:pb-24"
      aria-label="Loading page content"
      role="status"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="h-4 w-48 rounded-md bg-surface animate-pulse" />
            <div className="space-y-3 max-w-[680px]">
              <div className="h-12 w-full rounded-xl bg-surface animate-pulse" />
              <div className="h-12 w-3/4 rounded-xl bg-surface animate-pulse" />
            </div>
            <div className="space-y-2 max-w-[680px]">
              <div className="h-4 w-full rounded-md bg-surface animate-pulse" />
              <div className="h-4 w-5/6 rounded-md bg-surface animate-pulse" />
            </div>
            <div className="h-10 w-48 rounded-lg bg-surface animate-pulse" />
          </div>

          <div className="lg:col-span-6">
            <div className="bg-surface border border-elevated rounded-2xl p-8 space-y-4">
              <div className="h-56 w-full rounded-xl bg-white animate-pulse" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-24 w-full rounded-lg bg-white animate-pulse" />
                <div className="h-24 w-full rounded-lg bg-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

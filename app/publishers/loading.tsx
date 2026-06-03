export default function PublishersLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      <div className="h-10 w-40 bg-zinc-200 dark:bg-zinc-800 rounded mb-8" />
      <div className="h-10 w-80 bg-zinc-200 dark:bg-zinc-800 rounded mb-6" />
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <div className="h-12 bg-zinc-100 dark:bg-zinc-800" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex gap-4 px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded flex-1" />
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-32" />
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-16" />
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-10" />
          </div>
        ))}
      </div>
    </div>
  );
}

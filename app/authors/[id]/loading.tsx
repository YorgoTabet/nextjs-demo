export default function AuthorDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 rounded mb-6" />
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 mt-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-48 h-48 rounded-full bg-zinc-200 dark:bg-zinc-800 flex-shrink-0" />
          <div className="flex-1 space-y-4">
            <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2" />
            <div className="flex gap-4">
              <div className="h-10 w-28 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
              <div className="h-10 w-28 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
              <div className="h-10 w-28 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded" />
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6" />
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-4/6" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800 rounded mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden">
              <div className="h-80 bg-zinc-200 dark:bg-zinc-800" />
              <div className="p-6 space-y-2">
                <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4" />
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

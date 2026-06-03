export default function BookDetailLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      <div className="h-4 w-28 bg-zinc-200 dark:bg-zinc-800 rounded mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <div className="md:col-span-1">
          <div className="h-96 md:h-[500px] bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
        </div>
        <div className="md:col-span-2 space-y-4">
          <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4" />
          <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3" />
          <div className="flex gap-4">
            <div className="h-10 w-28 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
            <div className="h-10 w-28 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
            <div className="h-10 w-28 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
          </div>
          <div className="space-y-2 pt-2">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded" />
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-11/12" />
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-10/12" />
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-9/12" />
          </div>
        </div>
      </div>
    </div>
  );
}

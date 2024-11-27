export function CardFooter() {
  return (
    <footer className="flex gap-6 mt-9">
      <div className="flex flex-col flex-1">
        <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500" />
        <div className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl" />
      </div>

      <button
        className="flex shrink-0 h-10 rounded-xl bg-neutral-700 w-[116px]"
        aria-label="Card action"
        tabIndex={0}
      />
    </footer>
  );
}

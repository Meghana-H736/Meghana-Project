export function CardHeader() {
  return (
    <header className="flex gap-5 justify-between">
      <div className="flex flex-col">
        <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500" />
        <div className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl" />
      </div>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/572a9c2f4f3e4f65a3f342e8a940ffa238bd1d4937319c357c731d0ec3abbd5f?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&"
        alt=""
        className="object-contain shrink-0 self-start w-6 aspect-square"
      />
    </header>
  );
}

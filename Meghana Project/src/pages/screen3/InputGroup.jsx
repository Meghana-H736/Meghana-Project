

export function InputGroup({ label }) {
  return (
    <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
      <label className="flex max-w-full rounded-3xl bg-zinc-500 min-h-[16px] w-[116px]">
        {label}
      </label>
      <div className="flex flex-col mt-3 max-w-full rounded-xl w-[386px]">
        <input className="flex shrink-0 h-14 bg-indigo-50 rounded-xl" aria-label={label} />
      </div>
    </div>
  );
}
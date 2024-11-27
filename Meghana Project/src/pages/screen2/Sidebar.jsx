

function Sidebar() {
  const typeItems = Array(6).fill(null);
  const capacityItems = Array(4).fill(null);

  return (
    <aside className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow items-start px-8 pt-8 w-full bg-white border-r border-solid border-r-gray-100 pb-[834px] max-md:px-5 max-md:pb-24 max-md:mt-8">
        <section className="flex flex-col w-36 max-w-full">
          <h2 className="text-xs font-semibold tracking-wide text-slate-400">
            T Y P E
          </h2>
          <div className="flex flex-col mt-7">
            {typeItems.map((_, index) => (
              <div key={`type-${index}`} className="flex gap-3.5 items-center mt-8 first:mt-0">
                <div className="flex shrink-0 self-stretch my-auto rounded-3xl bg-zinc-500 h-[15px] w-[15px]" />
                <div className="flex shrink-0 self-stretch my-auto rounded-3xl bg-zinc-500 h-[15px] w-[115px]" />
              </div>
            ))}
          </div>
        </section>
        
        <section className="flex flex-col mt-16 w-36 max-w-full max-md:mt-10">
          <h2 className="text-xs font-semibold tracking-wide text-slate-400">
            C A P A C I T Y
          </h2>
          <div className="flex flex-col mt-7 w-full max-w-[144px]">
            {capacityItems.map((_, index) => (
              <div key={`capacity-${index}`} className="flex gap-3.5 items-center mt-8 first:mt-0">
                <div className="flex shrink-0 self-stretch my-auto rounded-3xl bg-zinc-500 h-[15px] w-[15px]" />
                <div className="flex shrink-0 self-stretch my-auto rounded-3xl bg-zinc-500 h-[15px] w-[115px]" />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col self-stretch mt-16 max-md:mt-10">
          <h2 className="text-xs font-semibold tracking-wide text-slate-400">
            P R I C E
          </h2>
          <div className="flex flex-col mt-7 w-full max-w-[296px]">
            <div className="flex items-center pr-14 w-full rounded-none max-md:pr-5">
              <div className="flex flex-col grow shrink-0 items-start self-stretch my-auto mr-0 bg-indigo-50 rounded-xl basis-0 w-fit">
                <div className="flex shrink-0 w-full h-3 rounded-xl bg-zinc-500" />
              </div>
              <div className="flex shrink-0 self-stretch my-auto w-6 h-6 rounded-full border-4 border-white border-solid bg-zinc-500 stroke-[4px] stroke-white" />
            </div>
            <div className="mt-3 text-xl font-semibold tracking-tight text-slate-600">
              Max. $100.00
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}

export default Sidebar;
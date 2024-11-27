  

export function FormStepCard({ stepNumber, totalSteps, children }) {
  return (
    <section className="flex overflow-hidden flex-col px-6 py-7 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex justify-end">
        <span className="text-sm font-medium text-right text-zinc-500">
          Step {stepNumber} of {totalSteps}
        </span>
      </div>
      {children}
    </section>
  );
}
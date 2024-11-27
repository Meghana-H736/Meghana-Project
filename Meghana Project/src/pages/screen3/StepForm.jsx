
import { FormStepCard } from "./FormStepCard";
import { InputGroup } from "./InputGroup";

export  function StepForm() {
  return (
    <main className="overflow-hidden p-8 bg-neutral-100 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <FormStepCard stepNumber={1} totalSteps={4}>
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start max-md:mt-8">
                      <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500 w-[116px]" />
                      <div className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl w-[116px]" />
                      <div className="flex flex-col self-stretch mt-9">
                        <InputGroup label="Personal Info" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow mt-8 max-md:mt-10">
                      <InputGroup label="Contact Details" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 mt-9">
                <InputGroup label="Address Line 1" />
                <InputGroup label="Address Line 2" />
              </div>
            </FormStepCard>

            {/* Additional form steps with similar structure */}
            <FormStepCard stepNumber={2} totalSteps={4}>
              {/* Step 2 content structure mirrors step 1 */}
              <div className="flex flex-wrap gap-5 justify-between items-start self-stretch max-md:max-w-full">
                <div className="flex flex-col self-start">
                  <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500" />
                  <div className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl" />
                </div>
              </div>
              <div className="flex flex-wrap gap-8 self-stretch mt-6">
                <InputGroup label="Employment Info" />
                <InputGroup label="Income Details" />
              </div>
              {/* Additional input groups following the same pattern */}
            </FormStepCard>

            <FormStepCard stepNumber={3} totalSteps={4}>
              {/* Step 3 content */}
              <div className="flex overflow-hidden flex-col px-6 pt-5 pb-9 mt-8 w-full rounded-xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
                {/* Content structure follows previous patterns */}
                <div className="flex gap-5 max-md:flex-col">
                  <InputGroup label="Document Upload" />
                  <InputGroup label="Additional Info" />
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/cbad72b22e94a5d87aade17f4dd3f18e2dc0f8f2d4656f2307f839844bf71b40?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&"
                alt="Form verification document"
                className="object-contain mt-6 w-full rounded-none aspect-[14.29] max-md:max-w-full"
              />
            </FormStepCard>

            <FormStepCard stepNumber={4} totalSteps={4}>
              {/* Step 4 content */}
              <div className="flex flex-col self-stretch mt-8 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/cf4a4600e4d4f312c6748cad3be6ce8bd90fd6a7f3a551913380f08ed7fb95eb?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&"
                  alt="Final submission preview"
                  className="object-contain w-full rounded-none aspect-[14.29]"
                />
              </div>
              <button className="flex shrink-0 gap-2 mt-8 h-14 rounded-xl bg-neutral-700 w-[140px]" aria-label="Submit form">
                Submit
              </button>
            </FormStepCard>
          </div>
        </div>

        <aside className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col px-6 py-8 mx-auto w-full bg-white rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
            {/* Summary section content */}
            <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500 w-[116px]" />
            <div className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl w-[116px]" />
            <div className="flex gap-4 mt-10 max-w-full w-[280px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5fb41f1fa72d48b7b9e2119c7838ad2c/e2729943ffe7bdb228c914d0fdb5f809fc60396f51cbc96a0971990dc5e178a8?apiKey=5fb41f1fa72d48b7b9e2119c7838ad2c&"
                alt="Profile summary"
                className="object-contain shrink-0 max-w-full rounded-none aspect-[1.19] w-[148px]"
              />
              <div className="flex flex-col my-auto">
                <div className="flex shrink-0 h-4 rounded-3xl bg-zinc-500" />
                <div className="flex shrink-0 mt-2 h-4 bg-indigo-50 rounded-3xl" />
              </div>
            </div>
            {/* Additional summary content */}
          </div>
        </aside>
      </div>
    </main>
  );
}
import React from "react";

function SubmitPage() {
  return (
    <section className="relative">
      <div className="container flex lg:flex-row items-center gap-12 min-h-screen">
        <div className="flex flex-1 flex-col items-center lg:items-center ">
          <h2 className="text-face-blue text-5xl font-bold md:text-4 lg:text-7xl text-center lg:w-1/2 mb-9">
            Thank You <span className=" text-green-600 ">For Submission</span>
          </h2>
          <h3 className="text-face-grey text-lg text-center mb-6 text-[24px] lg:w-3/5">
            Results would be announced soon
          </h3>
        </div>
      </div>
    </section>
  );
}

export default SubmitPage;

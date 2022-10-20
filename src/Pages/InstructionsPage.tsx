import React from "react";

function InstructionsPage() {
  return (
    <div className="container flex flex-col">
      <section className="relative pt-11">
        <h2 className="text-face-blue text-4xl font-bold md:text-4 mb-6">
          <span className=" text-green-600 ">Instructions</span>
        </h2>
        <ol className="mt-5 text-face-blue text-lg">
          <li className="py-2">
            <h5 className="font-bold">1. Keep Silence</h5>
          </li>
          <li className="py-2">
            <h5 className="font-bold">2. Keep Silence</h5>
          </li>
        </ol>
      </section>
    </div>
  );
}

export default InstructionsPage;

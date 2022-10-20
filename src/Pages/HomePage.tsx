import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
      <div className="flex items-center justify-center">
        <main className="max-w-screen-xl px-4 lg:px-16">
          <div className="text-left">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              CSE Department
              <br />
              <span className="text-face-purple">Blind Coding</span>
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex justify-start">
              <div className="rounded-md shadow">
                <div
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-face-purple hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <div
                  onClick={() => {
                    navigate("/instructions");
                  }}
                  className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Instructions
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div
        className="w-full object-cover h-72 lg:w-full md:h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/blindcoding.jpg")',
        }}
      ></div>
    </div>
  );
}

export default HomePage;

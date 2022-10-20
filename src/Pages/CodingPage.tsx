import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import { API_URL } from "../config/variables";

function CodingPage({
  question,
  questionNum,
  onQuestionSubmit,
  minutes,
  code,
  seconds,
}: any) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div className="h-screen w-full flex">
      <div className="w-2/5 h-full flex flex-col pt-20 px-10 text-gray-700 overflow-y-auto">
        <h1 className="text-face-purple text-5xl font-extrabold pb-10">
          Problem {questionNum}
        </h1>
        {question}
      </div>
      <div className="w-3/5 bg-black h-full flex flex-col">
        <div className="w-full h-[10%] bg-face-purple flex flex-col text-white justify-center items-center text-2xl font-black">
          <div>
            {minutes}:{seconds}
          </div>
        </div>
        <div className="w-full h-4/5 relative">
          <textarea
            className=" w-full h-full p-10 focus:outline-none text-white text-opacity-0"
            onSelect={(e) => e.preventDefault()}
            onChange={(e) => (code.current = e.target.value)}
            autoFocus
            onBlur={(e) => e.target.focus()}
            onPaste={(e) => e.preventDefault()}
            onCopy={(e) => e.preventDefault()}
            ref={textAreaRef}
          ></textarea>
          <div
            className={` pointer-events-none bg-opacity-70 backdrop-blur-lg rounded drop-shadow-lg absolute w-full h-full top-0 z-10 flex justify-center items-center ${
              textAreaRef.current! !== document.activeElement
                ? " bg-red-600"
                : "bg-white"
            }`}
          >
            <span>
              {textAreaRef.current! !== document.activeElement
                ? "Kindly tap on red Area once"
                : "Keep On Coding"}
            </span>
          </div>
        </div>
        <div className="w-full h-[10%] bg-white flex justify-center items-center">
          <div
            className=" w-1/4 cursor-pointer bg-face-purple text-white px-5 py-2 rounded-md text-center"
            onClick={() => {
              onQuestionSubmit(textAreaRef.current!.value);
            }}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodingPage;

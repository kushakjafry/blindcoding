import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import { API_URL } from "../config/variables";
import CodingPage from "./CodingPage";
import devtools from "devtools-detect";

function QuestionPage() {
  const currentTime = useRef<Date>(new Date());
  const navigate = useNavigate();
  const code1 = useRef<string>("");
  const code2 = useRef<string>("");

  const fetchTime = async (user: any) => {
    const { data } = await axios.post(`${API_URL}register`, user);
    console.log(data);
    if ("disqualified" in data.user && data.user["disqualified"]) {
      navigate("/disqualified");
      return;
    }
    let currentQuest = 1;
    if ("code1" in data.user && data.user["code1"].length > 0) {
      currentQuest = 2;
      code1.current = data.user["code1"];
    }
    if ("code2" in data.user && data.user["code2"].length > 0) {
      navigate("/finish");
      return;
    }
    setCurrentQuestion(currentQuest);
    currentTime.current = new Date();
    currentTime.current.setSeconds(
      currentTime.current.getSeconds() + data.difference
    );
    restart(currentTime.current, true);
  };
  useEffect(() => {
    const userString = localStorage.getItem("candidate");
    if (!userString) {
      navigate("/register");
      return;
    }
    const user = JSON.parse(userString);
    fetchTime(user);
    window.addEventListener(
      "keydown",
      (e) => e.keyCode === 123 && e.preventDefault()
    );
    const interval = setInterval(() => {
      if (devtools.isOpen) {
        axios.post(`${API_URL}disqualify`, { email: user.email });
        clearInterval(interval);
        navigate("/disqualified");
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const timeExpired = async () => {
    const user = JSON.parse(localStorage.getItem("candidate")!);

    if (currentQuestion === 1)
      await Promise.all([
        axios.post(`${API_URL}submit`, {
          email: user.email,
          num: 1,
          code: code1.current,
        }),
        await axios.post(`${API_URL}submit`, {
          email: user.email,
          num: 2,
          code: code2.current,
        }),
      ]);
    else
      await axios.post(`${API_URL}submit`, {
        email: user.email,
        num: 2,
        code: code2.current,
      });

    navigate("/finish");
  };

  const { seconds, minutes, restart } = useTimer({
    autoStart: true,
    expiryTimestamp: currentTime.current,
    onExpire: () => timeExpired(),
  });
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const onQuestionSubmit = async (code: string) => {
    const user = JSON.parse(localStorage.getItem("candidate")!);
    try {
      if (currentQuestion === 1) {
        const { data } = await axios.post(`${API_URL}submit`, {
          email: user.email,
          num: 1,
          code,
        });
        setCurrentQuestion(2);
      } else {
        const { data } = await axios.post(`${API_URL}submit`, {
          email: user.email,
          num: 2,
          code,
        });
        navigate("/finish");
      }
    } catch (err) {
      navigate("/register");
    }
  };
  return (
    <>
      {currentQuestion === 1 && (
        <CodingPage
          seconds={seconds}
          minutes={minutes}
          onQuestionSubmit={onQuestionSubmit}
          questionNum={currentQuestion}
          code={code1}
          question={
            <>
              <p>
                The Berland Armed Forces System consists of n ranks that are
                numbered using natural numbers from 1 to n, where 1 is the
                lowest rank and n is the highest rank. One needs exactly di
                years to rise from rank i to rank i + 1. Reaching a certain rank
                i having not reached all the previous i - 1 ranks is impossible.
              </p>
              <p>
                Vasya has just reached a new rank of a, but he dreams of holding
                the rank of b. Find for how many more years Vasya should serve
                in the army until he can finally realize his dream. Input The
                first input line contains an integer n (2 ≤ n ≤ 100). The second
                line contains n - 1 integers di (1 ≤ di ≤ 100). The third input
                line contains two integers a and b .The numbers on the lines are
                space-separated. Output Print the single number which is the
                number of years that Vasya needs to rise from rank a to rank b
              </p>
            </>
          }
        />
      )}
      {currentQuestion === 2 && (
        <CodingPage
          seconds={seconds}
          minutes={minutes}
          onQuestionSubmit={onQuestionSubmit}
          questionNum={currentQuestion}
          code={code2}
          question={
            <>
              <p>
                The Berland Armed Forces System consists of n ranks that are
                numbered using natural numbers from 1 to n, where 1 is the
                lowest rank and n is the highest rank. One needs exactly di
                years to rise from rank i to rank i + 1. Reaching a certain rank
                i having not reached all the previous i - 1 ranks is impossible.
              </p>
              <p>
                Vasya has just reached a new rank of a, but he dreams of holding
                the rank of b. Find for how many more years Vasya should serve
                in the army until he can finally realize his dream. Input The
                first input line contains an integer n (2 ≤ n ≤ 100). The second
                line contains n - 1 integers di (1 ≤ di ≤ 100). The third input
                line contains two integers a and b .The numbers on the lines are
                space-separated. Output Print the single number which is the
                number of years that Vasya needs to rise from rank a to rank b
              </p>
            </>
          }
        />
      )}
    </>
  );
}

export default QuestionPage;

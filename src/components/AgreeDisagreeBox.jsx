import React, { useState } from "react";

import { useForm } from "react-hook-form";
import homeImage from "./assets/home.png";

const AgreeDisagreeBox = () => {
  const { register, handleSubmit } = useForm();
  const [canNotSubmit, setCanNotSubmit] = useState(true);
  const questionFormResponseData = async (data) => {
    console.log(data);
  };

  const qes = [
    {
      question: "1 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques1",
      disabled: false,
    },
    {
      question: "2 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques2",
      disabled: true,
    },
    {
      question: "3 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques3",
      disabled: true,
    },
    {
      question: "4 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques4",
      disabled: true,
    },
    {
      question: "5 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques5",
      disabled: true,
    },
    {
      question: "6 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques6",
      disabled: true,
    },
    {
      question: "7 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques7",
      disabled: true,
    },
    {
      question: "8 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques8",
      disabled: true,
    },
    {
      question: "9 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques9",
      disabled: true,
    },
    {
      question: "10 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques10",
      disabled: true,
    },
    {
      question: "11 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques11",
      disabled: true,
    },
    {
      question: "12 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques12",
      disabled: true,
    },
    {
      question: "13 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques13",
      disabled: true,
    },
    {
      question: "14 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques14",
      disabled: true,
    },
    {
      question: "15 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques15",
      disabled: true,
    },
    {
      question: "16 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques16",
      disabled: true,
    },
    {
      question: "17 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques17",
      disabled: true,
    },
    {
      question: "18 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques18",
      disabled: true,
    },
    {
      question: "19 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques19",
      disabled: true,
    },
    {
      question: "20 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      name: "ques20",
      disabled: true,
    },
  ];

  const [data, setData] = useState([...qes]);

  const radioClickedHandler = (index) => {
    const newData = [...data];
    if (index === 0) {
      newData[index + 1].disabled = false;
    } else if (0 < index && index < data.length - 1) {
      newData[index + 1].disabled = false;
    } else {
      setCanNotSubmit(false);
    }
    setData(newData);
  };

  return (
    <div className="px-20 pt-20 max-[480px]:px-1 max-[480px]:pt-2 bg-gray-300 mx-auto">
      <div className="mx-auto bg-white">
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <img src={homeImage} alt="" srcset="" className="w-full h-full" />
          <div
            style={{
              position: "absolute",
              top: "50%",
              // left: "50%",
              // transform: "translate(-50%, -50%)",
              left: 0,
              right: 0,
              margin: "auto",
              textAlign: "center",
            }}>
            <p className="text-8xl max-[700px]:text-2xl  text-white mx-auto mb-8">
              Your Mental Health Today Test
            </p>
            <span className="mx-auto mt-20">
              <button className="bg-[#009a80] px-4 py-2 rounded-md text-white">
                20 Questions
              </button>
              <button className="bg-[#1b6099] px-4 py-2 rounded-md text-white ml-4">
                3 Minutes
              </button>
            </span>
          </div>
        </div>
        <div className="bg-[#009A80] rounded-b-[90%] max-[700px]:rounded-b-[50%] rounded-tl-lg rounded-tr-lg mb-8 ">
          <p className=" text-white text-center text-xl max-[700px]:text-base pt-8 px-4">
            How Well Do You Cope ?
          </p>
          <p className=" text-white text-center text-xl max-[700px]:text-base mt-8 px-16 pb-40 max-[700px]:px-2 max-[700px]:pb-32 ">
            Most people struggle with mental health challenges at some point in
            life, whether due to circumstances or underlying vulnerabilities and
            psychiatric conditions. This test will give you a sense of how
            you're coping day to day and whether you might be experiencing
            symptoms that could be addressed or alleviated via therapy or other
            professional help.
          </p>
        </div>
        <span className="mx-auto">
          <p className="text-center font-bold text-xl px-16 max-[700px]:px-2">
            Using the key below, answer the questions based on how strongly you
            agree or disagree with the statement.
          </p>
          <ul className="">
            <div className="bg-[#8adf56] flex flex-row place-content-center justify-center text-white items-center space-x-20 w-fit p-3 mx-auto rounded-sm mb-3  border border-blue-600">
              <li>Strongly Agree </li>
              <li>Neutral </li>
              <li>Strongly Agree</li>
            </div>
          </ul>
        </span>
        <div>
          <form onSubmit={handleSubmit(questionFormResponseData)}>
            {data.map((q, index) => (
              <div key={q.name} className="">
                <h1 className="text-center">{q.question}</h1>
                <div className="flex flex-col justify-center items-center py-4 max-[700px]:p-2 w-fit mx-auto">
                  <div className="flex flex-row space-x-4 max-[700px]:space-x-2 justify-center items-center">
                    <div className="flex flex-col text-center">
                      <input
                        disabled={q.disabled}
                        onClick={() => radioClickedHandler(index)}
                        type="radio"
                        value="1"
                        className="!bg-green-500 !border-2 !border-red-700 w-28 h-28 max-[700px]:w-24 max-[700px]:h-24 max-[480px]:w-16 max-[480px]:h-16 cursor-pointer"
                        {...register(`${q.name}`, {
                          required: true,
                        })}
                      />
                      <span className="">Agree</span>
                    </div>
                    <div>
                      <input
                        disabled={q.disabled}
                        onClick={() => radioClickedHandler(index)}
                        type="radio"
                        value="2"
                        className="w-24 h-24 max-[700px]:w-20 max-[700px]:h-20 max-[480px]:w-14 max-[480px]:h-14 cursor-pointer"
                        {...register(`${q.name}`, {
                          required: true,
                        })}
                      />
                    </div>
                    <div>
                      <input
                        disabled={q.disabled}
                        onClick={() => radioClickedHandler(index)}
                        type="radio"
                        value="3"
                        className="w-20 h-20 max-[700px]:w-16 max-[700px]:h-16 max-[480px]:w-12 max-[480px]:h-12 cursor-pointer"
                        {...register(`${q.name}`, {
                          required: true,
                        })}
                      />
                    </div>
                    <div>
                      <input
                        disabled={q.disabled}
                        onClick={() => radioClickedHandler(index)}
                        type="radio"
                        value="4"
                        className="w-24 h-24 max-[700px]:w-20 max-[700px]:h-20 max-[480px]:w-14 max-[480px]:h-14 cursor-pointer"
                        {...register(`${q.name}`, {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="flex flex-col text-center">
                      <input
                        disabled={q.disabled}
                        onClick={() => radioClickedHandler(index)}
                        type="radio"
                        value="5"
                        className="w-28 h-28 max-[700px]:w-24 max-[700px]:h-24 max-[480px]:w-16 max-[480px]:h-16 cursor-pointer"
                        {...register(`${q.name}`, {
                          required: true,
                        })}
                      />
                      <span className="">Disagree</span>
                    </div>
                  </div>
                  <hr class="h-px my-8 border-0 bg-[#0b7361]  mx-auto w-[90%]" />
                </div>
              </div>
            ))}
            <div className="flex flex-col place-content-center justify-center items-center mb-4">
              <p className="mb-4">Enter your Email Address </p>
              <input
                type="text"
                id="simple-search"
                className="p-2 mb-3 border border-gray-300 rounded-md"
                // required
              />
              <button
                disabled={canNotSubmit}
                type="submit"
                class="text-white bg-[#0b7361] px-6 py-2 font-medium rounded-md">
                Get Your Score
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgreeDisagreeBox;

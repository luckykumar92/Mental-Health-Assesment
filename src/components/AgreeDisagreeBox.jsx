import React, { useState } from "react";

import { useForm } from "react-hook-form";

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
    <div>
      <span className=" mx-auto">
        <p className="text-center font-bold text-2xl mb-8">
          Using the key below, answer the questions based on how strongly
          <br />
          you agree or disagree with the statement.
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
  );
};

export default AgreeDisagreeBox;

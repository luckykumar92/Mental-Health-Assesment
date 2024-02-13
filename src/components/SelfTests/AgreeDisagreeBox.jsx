import React, { useState } from "react";

import { useForm } from "react-hook-form";

const AgreeDisagreeBox = ({ qestionData }) => {
  const { register, handleSubmit } = useForm();
  const [canNotSubmit, setCanNotSubmit] = useState(true);
  const questionFormResponseData = async (data) => {
    console.log(data);
  };
  // console.log(qestionData, "jhgu");
  const [data, setData] = useState([...qestionData]);

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
      <span className="mx-auto">
        <p className="text-center font-bold text-xl px-16 max-[700px]:px-2 mb-4">
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
                  <div className="flex flex-col text-center mt-4">
                    <input
                      disabled={q.disabled}
                      onClick={() => radioClickedHandler(index)}
                      type="radio"
                      value="1"
                      className="w-28 h-28 max-[900px]:w-24 max-[900px]:h-24 max-[650px]:w-16 max-[650px]:h-16 cursor-pointer"
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
                      className="w-24 h-24 max-[900px]:w-20 max-[900px]:h-20 max-[650px]:w-14 max-[650px]:h-14 cursor-pointer"
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
                      className="w-20 h-20 max-[900px]:w-16 max-[900px]:h-16 max-[650px]:w-12 max-[650px]:h-12 cursor-pointer"
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
                      className="w-24 h-24 max-[900px]:w-20 max-[900px]:h-20 max-[650px]:w-14 max-[650px]:h-14 cursor-pointer"
                      {...register(`${q.name}`, {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="flex flex-col text-center mt-4">
                    <input
                      disabled={q.disabled}
                      onClick={() => radioClickedHandler(index)}
                      type="radio"
                      value="5"
                      className="w-28 h-28 max-[900px]:w-24 max-[900px]:h-24 max-[650px]:w-16 max-[650px]:h-16 cursor-pointer"
                      {...register(`${q.name}`, {
                        required: true,
                      })}
                    />
                    <span className="">Disagree</span>
                  </div>
                </div>
                <hr className="h-px my-8 border-0 bg-[#0b7361]  mx-auto w-[90%]" />
              </div>
            </div>
          ))}
          <div className="flex flex-col place-content-center justify-center items-center pb-4">
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
              className="text-white bg-[#0b7361] px-6 py-2 font-medium rounded-md"
            >
              Get Your Score
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgreeDisagreeBox;

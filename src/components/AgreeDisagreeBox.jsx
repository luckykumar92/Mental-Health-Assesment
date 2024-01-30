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
      <form onSubmit={handleSubmit(questionFormResponseData)}>
        {data.map((q, index) => (
          <div key={q.name}>
            {/* {console.log(q)} */}
            <h1 className="text-center">{q.question}</h1>
            <div className="flex flex-row space-x-4 justify-center items-center">
              <div className="">
                <input
                  disabled={q.disabled}
                  onClick={() => radioClickedHandler(index)}
                  type="radio"
                  value="1"
                  className="w-28 h-28 cursor-pointer border-2 border-red-500"
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
                  value="2"
                  className="w-24 h-24 cursor-pointer"
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
                  className="w-20 h-20 cursor-pointer"
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
                  className="w-24 h-24 cursor-pointer"
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
                  value="5"
                  className="w-28 h-28 cursor-pointer"
                  {...register(`${q.name}`, {
                    required: true,
                  })}
                />
              </div>
            </div>
            <hr />
          </div>
        ))}

        <button disabled={canNotSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AgreeDisagreeBox;

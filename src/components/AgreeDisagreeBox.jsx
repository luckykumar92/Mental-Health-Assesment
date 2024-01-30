import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const AgreeDisagreeBox = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const [registerEmail, setRegisterEmail] = useState("");
  const [loading, setLoading] = useState(false);

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
  // console.log(data, "jghgkhj");
  // useEffect(() => {
  //   setData(data);
  // }, [data]);
  const [rendata, setRenData] = useState({});
  useEffect(() => {
    setData(data);
  }, [setData]);

  const radioClickedHandler = (index) => {
    // console.log(data[index], "qwerty");
    // console.log(data[0], "1");
    alert("radioclicked");
    console.log(data);
    if (index === 0) {
      // setData((data[index].disabled = false));
      console.log(data[index + 1].disabled);

      data[index + 1].disabled = !data[index + 1].disabled;
      // data[index + 2].disabled = !data[index + 2].disabled;
      setData(data);

      // console.log(data);
    }
    // else if (0 < index < 20) {
    //   setData((data[index - 1].disabled = true));
    //   setData((data[index].disabled = false));
    //   setData((data[index + 1].disabled = false));
    // } else {
    //   setData((data[index - 1].disabled = true));
    //   setData((data[index].disabled = false));
    // }

    // console.log(data, "2");

    setData(data);
  };

  return (
    <div>
      {/* <div class="w-full p-4 text-center border-gray-200 shadow sm:p-8">
      <p class="mb-5 text-base ">1. I feel overwhelmed by my emotions.</p>
      <div class="py-24 flex items-center justify-center bg-gray-400 space-x-8">
        <div class="w-28 h-28 border-4 border-black rounded-full flex items-center justify-center ">
          
          <button class="w-16 h-16 border border-black bg-blue-600 rounded-full"></button>
        </div>
        <div class="w-24 h-24 border-4 border-black rounded-full  flex items-center justify-center">
          <button class="w-14 h-14 bg-blue-600 rounded-full" onClick={((e)=>console.log(e))}></button>
        </div>
        <div class="w-20 h-20 border-4 border-black rounded-full  flex items-center justify-center ">
          <button class="w-12 h-12 bg-blue-600 rounded-full"></button>
        </div>
        <div class="w-24 h-24 border-4 border-black rounded-full  flex items-center justify-center">
          <button class="w-14 h-14 bg-blue-600 rounded-full"></button>
        </div>
        <div class="w-28 h-28 border-4 border-black rounded-full  flex items-center justify-center ">
          <button class="w-16 h-16 bg-blue-600 rounded-full"></button>
        </div>
      </div>
    </div> */}
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
                  // onClick={radioClickedHandler(index)}
                  className="w-28 h-28 cursor-pointer border-2 border-red-500"
                  {...register(`${q.name}`, {
                    required: true,
                  })}
                  // onChange={(index) => {
                  //   radioClickedHandler(index);
                  // }}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AgreeDisagreeBox;

import React from "react";
import AgreeDisagreeBox from "../AgreeDisagreeBox";
import bgImage from "../assets/home.png";

const MentalHealthTodayTest = () => {
  const mentalHealthTodayTestQuestionData = [
    {
      question: "1. I feel overwhelmed by my emotions.",
      name: "ques1",
      disabled: false,
    },
    {
      question: "2. I am able to handle the level of stress I experience.",
      name: "ques2",
      disabled: true,
    },
    {
      question: "3. I have physical symptoms of anxiety, such as sweaty palms.",
      name: "ques3",
      disabled: true,
    },
    {
      question: "4. I have strong relationships with people I care about.",
      name: "ques4",
      disabled: true,
    },
    {
      question: "5. I feel good about the choices I've made in my life.",
      name: "ques5",
      disabled: true,
    },
    {
      question: "6. I am self-critical and engage in negative self-talk.",
      name: "ques6",
      disabled: true,
    },
    {
      question:
        "7. I cannot get beyond long-past traumatic events or significant losses.",
      name: "ques7",
      disabled: true,
    },
    {
      question: "8. I am able to identify and express my emotions.",
      name: "ques8",
      disabled: true,
    },
    {
      question:
        "9. I trust that if I confide in others, they will be supportive.",
      name: "ques9",
      disabled: true,
    },
    {
      question:
        "10. I engage in self-destructive behaviors such as drinking or drug use.",
      name: "ques10",
      disabled: true,
    },
    {
      question:
        "11. When I experience a strong emotion, I usually know why it's hitting me.",
      name: "ques11",
      disabled: true,
    },
    {
      question: "12. My mood is stable.",
      name: "ques12",
      disabled: true,
    },
    {
      question:
        "13. I procrastinate and/or avoid dealing with important things in my life.",
      name: "ques13",
      disabled: true,
    },
    {
      question:
        "14. I feel like I am not living up to my own expectations, or those of others.",
      name: "ques14",
      disabled: true,
    },
    {
      question: "15. I have a sense of purpose in life.",
      name: "ques15",
      disabled: true,
    },
    {
      question: "16. I am lonely.",
      name: "ques16",
      disabled: true,
    },
    {
      question: "17. I get upset or angry easily.",
      name: "ques17",
      disabled: true,
    },
    {
      question:
        "18. I've noticed changes in my appetite or sleep patterns relative to when I was at my best.",
      name: "ques18",
      disabled: true,
    },
    {
      question: "19. I'm able to bounce back from setbacks.",
      name: "ques19",
      disabled: true,
    },
    {
      question:
        "20. I manage my time and my obligations; most days life feels under control.",
      name: "ques20",
      disabled: true,
    },
  ];
  console.log(mentalHealthTodayTestQuestionData, "123");
  return (
    <div className="px-20 pt-20 max-[650px]:px-1 max-[650px]:pt-2 bg-gray-300 dark:bg-black mx-auto">
      <div className="mx-auto bg-white dark:bg-black dark:text-white">
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <img src={bgImage} alt="" srcSet="" className="w-full h-full" />
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
            }}
          >
            <p className="max-[639px]:text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-white dark:text-white mx-auto mb-8">
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
            How well do you cope?
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
        <AgreeDisagreeBox qestionData={mentalHealthTodayTestQuestionData} />
      </div>
    </div>
  );
};

export default MentalHealthTodayTest;

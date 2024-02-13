import React from "react";
import AgreeDisagreeBox from "../AgreeDisagreeBox";
import bgImage from "../assets/anger.jpg";

const AngerManagementTest = () => {
  const angerManagementTestQuestionData = [
    {
      question: "1. I can’t help getting into arguments with others.",
      name: "ques1",
      disabled: false,
    },
    {
      question:
        "2. If someone teases me or makes a joke about me, I lose my temper.",
      name: "ques2",
      disabled: true,
    },
    {
      question:
        "3. Even when my anger is aroused, I don’t use strong language.",
      name: "ques3",
      disabled: true,
    },
    {
      question: "4. I have become so mad that I have broken things.",
      name: "ques4",
      disabled: true,
    },
    {
      question: "5. I am an even-tempered person.",
      name: "ques5",
      disabled: true,
    },
    {
      question: "6. I have many arguments with members of my family.",
      name: "ques6",
      disabled: true,
    },
    {
      question: "7. When I feel angry I take time to think before I react.",
      name: "ques7",
      disabled: true,
    },
    {
      question:
        "8. If I bought a new product and realized it didn’t work, I would be furious.",
      name: "ques8",
      disabled: true,
    },
    {
      question:
        "9. I can communicate how I’m feeling without becoming aggressive.",
      name: "ques9",
      disabled: true,
    },
    {
      question:
        "10. When people annoy me, I may tell them what I think of them.",
      name: "ques10",
      disabled: true,
    },
    {
      question:
        "11. If a friend canceled our plans at the last minute, I would be really mad.",
      name: "ques11",
      disabled: true,
    },
    {
      question:
        "12. I'm able to prevent my anger from turning into aggression.",
      name: "ques12",
      disabled: true,
    },
    {
      question:
        "13. I could never exploit someone out of anger; my conscience would punish me.",
      name: "ques13",
      disabled: true,
    },
    {
      question:
        "14. I tend to harbor grudges, and thinking about them makes me mad.",
      name: "ques14",
      disabled: true,
    },
    {
      question: "15. I calm down faster than most people.",
      name: "ques15",
      disabled: true,
    },
    {
      question:
        "16. I can identify triggers that make me angry and take steps to avoid them.",
      name: "ques16",
      disabled: true,
    },
    {
      question: "17. I am angrier than I am willing to admit.",
      name: "ques17",
      disabled: true,
    },
    {
      question: "18. Given enough provocation, I may hit another person.",
      name: "ques18",
      disabled: true,
    },
    {
      question:
        "19. My friends have commented that I don’t seem to be able to control my anger.",
      name: "ques19",
      disabled: true,
    },
    {
      question:
        "20. If someone continues arguing about a topic they know little about, I would be a little irritated but let it go.",
      name: "ques20",
      disabled: true,
    },
  ];
  console.log(angerManagementTestQuestionData, "123");
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
              Anger Management Test
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
            Does my temper get the best of me?
          </p>
          <p className=" text-white text-center text-xl max-[700px]:text-base mt-8 px-16 pb-40 max-[700px]:px-2 max-[700px]:pb-32 ">
            Everyone experiences occasional bouts of frustration, anger, and
            even rage. The ability to recognize and control anger when it
            emerges is a key skill for healthy functioning in relationships,
            work, and life. Take this test to learn if you manage anger
            effectively.
          </p>
        </div>
        <AgreeDisagreeBox qestionData={angerManagementTestQuestionData} />
      </div>
    </div>
  );
};

export default AngerManagementTest;

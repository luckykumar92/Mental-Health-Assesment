import React from "react";
import AgreeDisagreeBox from "../AgreeDisagreeBox";
import bgImage from "../assets/anger.jpg";

const AnxietyTest = () => {
  const anxietyTestQuestionData = [
    {
      question: "1. I am able to relax.",
      name: "ques1",
      disabled: false,
    },
    {
      question:
        "2. I tend to focus on upsetting situations or events happening in my life.",
      name: "ques2",
      disabled: true,
    },
    {
      question: "3. I feel fearful for no reason.",
      name: "ques3",
      disabled: true,
    },
    {
      question: "4. I am as happy as the people around me.",
      name: "ques4",
      disabled: true,
    },
    {
      question:
        "5. I have diarrhea, constipation, or other digestive problems.",
      name: "ques5",
      disabled: true,
    },
    {
      question: "6. I have a dry mouth.",
      name: "ques6",
      disabled: true,
    },
    {
      question:
        "7. When someone snaps at me, I spend the rest of the day thinking about it.",
      name: "ques7",
      disabled: true,
    },
    {
      question: "8. No matter what I do, I can't get my mind off my problems.",
      name: "ques8",
      disabled: true,
    },
    {
      question: "9. I am easily alarmed, frightened, or surprised.",
      name: "ques9",
      disabled: true,
    },
    {
      question: "10. I experience shortness of breath or choking feelings.",
      name: "ques10",
      disabled: true,
    },
    {
      question: "11. My muscles are tense, aching, or sore.",
      name: "ques11",
      disabled: true,
    },
    {
      question: "12. I have sweaty or cold, clammy hands.",
      name: "ques12",
      disabled: true,
    },
    {
      question: "13. I spend time wondering why I feel the way I do.",
      name: "ques13",
      disabled: true,
    },
    {
      question:
        "14. I am afraid of crowds, being left alone, the dark, of strangers, or of traffic.",
      name: "ques14",
      disabled: true,
    },
    {
      question: "15. I faint or feel like fainting.",
      name: "ques15",
      disabled: true,
    },
    {
      question:
        "16. I have difficulty swallowing or have a 'lump in throat' feeling.",
      name: "ques16",
      disabled: true,
    },
    {
      question: "17. I experience twitching, trembling or shaky feelings.",
      name: "ques17",
      disabled: true,
    },
    {
      question: "18. I think a lot about why I do the things I do.",
      name: "ques18",
      disabled: true,
    },
    {
      question: "19. I am easily irritated.",
      name: "ques19",
      disabled: true,
    },
    {
      question: "20. I feel futile.",
      name: "ques20",
      disabled: true,
    },
  ];
  console.log(anxietyTestQuestionData, "123");
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
              Anxiety Test
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
        {/* <div className="bg-[#009A80] rounded-b-[90%] max-[700px]:rounded-b-[50%] rounded-tl-lg rounded-tr-lg mb-8 ">
          <p className=" text-white text-center text-xl max-[700px]:text-base pt-8 px-4">
            Do you have healthy self-esteem?
          </p>
          <p className=" text-white text-center text-xl max-[700px]:text-base mt-8 px-16 pb-40 max-[700px]:px-2 max-[700px]:pb-32 ">
            Low self-worth can be detrimental to a person's well-being. If you
            think you are going to fail, you may well set yourself up for
            failure. Low self-regard can lead to poor health, mood disorders,
            and compromised well-being. On the flip side, if you are sky-high in
            self confidence, you may well tip into arrogant narcissism. Having
            the right amount of self-regard is key. A healthy amount will help
            you shake off negative criticism, as well as take in useful
            evaluation. See where you fall on our self-worth scale.
          </p>
        </div> */}
        <AgreeDisagreeBox qestionData={anxietyTestQuestionData} />
      </div>
    </div>
  );
};

export default AnxietyTest;

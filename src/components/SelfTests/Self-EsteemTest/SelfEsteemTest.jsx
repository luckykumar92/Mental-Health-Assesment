import React from "react";
import AgreeDisagreeBox from "../AgreeDisagreeBox";
import bgImage from "../assets/anger.jpg";

const SelfEsteemTest = () => {
  const selfEsteemTestQuestionData = [
    {
      question: "1. I have nothing to show for myself, I am a loser.",
      name: "ques1",
      disabled: false,
    },
    {
      question: "2. I am ashamed of myself when I receive critical feedback.",
      name: "ques2",
      disabled: true,
    },
    {
      question: "3. I feel worthy, just like other people.",
      name: "ques3",
      disabled: true,
    },
    {
      question: "4. Failure is just part of life.",
      name: "ques4",
      disabled: true,
    },
    {
      question:
        "5. Feeling blue is part of being human and nothing to worry about.",
      name: "ques5",
      disabled: true,
    },
    {
      question: "6. I ruminate about all the things that are wrong in my life.",
      name: "ques6",
      disabled: true,
    },
    {
      question: "7. I isolate myself and brood over my flaws.",
      name: "ques7",
      disabled: true,
    },
    {
      question: "8. I should have self-respect, but I don't.",
      name: "ques8",
      disabled: true,
    },
    {
      question: "9. I never beat myself up. I have self-compassion.",
      name: "ques9",
      disabled: true,
    },
    {
      question:
        "10. I know how to say 'no.' Giving too much of myself does no one any good.",
      name: "ques10",
      disabled: true,
    },
    {
      question: "11. I never judge and compare myself with others.",
      name: "ques11",
      disabled: true,
    },
    {
      question: "12. I am self-determined and a good decision-maker.",
      name: "ques12",
      disabled: true,
    },
    {
      question: "13. I like myself and who I am.",
      name: "ques13",
      disabled: true,
    },
    {
      question:
        "14. I wish I could be more confident and satisfied, just like other people.",
      name: "ques14",
      disabled: true,
    },
    {
      question:
        "15. I wonder what people are thinking about me, I know it is negative.",
      name: "ques15",
      disabled: true,
    },
    {
      question: "16. I always feel unattractive.",
      name: "ques16",
      disabled: true,
    },
    {
      question: "17. I shut down and know I am not worthy when I feel bad.",
      name: "ques17",
      disabled: true,
    },
    {
      question:
        "18. My co-workers said I did a good job on my project, but they're just being nice to me.",
      name: "ques18",
      disabled: true,
    },
    {
      question:
        "19. I welcome a challenge, I become more single-minded about succeeding.",
      name: "ques19",
      disabled: true,
    },
    {
      question: "20. I am effective and not inferior.",
      name: "ques20",
      disabled: true,
    },
  ];
  console.log(selfEsteemTestQuestionData, "123");
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
              Self Esteem Test
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
        </div>
        <AgreeDisagreeBox qestionData={selfEsteemTestQuestionData} />
      </div>
    </div>
  );
};

export default SelfEsteemTest;

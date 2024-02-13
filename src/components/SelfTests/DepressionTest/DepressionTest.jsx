import React from "react";
import AgreeDisagreeBox from "../AgreeDisagreeBox";
import bgImage from "../assets/depression.jpg";

const DepressionTest = () => {
  const depressionTestQestionData = [
    {
      question: "1. I generally feel down and unhappy.",
      name: "ques1",
      disabled: false,
    },
    {
      question: "2. I have less interest in other people than I used to.",
      name: "ques2",
      disabled: true,
    },
    {
      question:
        "3. It takes a lot of effort to get myself to start working on something new.",
      name: "ques3",
      disabled: true,
    },
    {
      question:
        "4. I don't get as much satisfaction out of things as I used to.",
      name: "ques4",
      disabled: true,
    },
    {
      question:
        "5. I have headaches, back pain, or other pains for no apparent reason.",
      name: "ques5",
      disabled: true,
    },
    {
      question: "6. I easily get impatient, frustrated, or angry with people.",
      name: "ques6",
      disabled: true,
    },
    {
      question:
        "7. I feel lonely, and that people aren't that interested in me.",
      name: "ques7",
      disabled: true,
    },
    {
      question: "8. I feel like I have nothing to look forward to.",
      name: "ques8",
      disabled: true,
    },
    {
      question: "9. I have episodes of crying that are hard to stop.",
      name: "ques9",
      disabled: true,
    },
    {
      question: "10. I have trouble getting to sleep; or, I sleep in too late.",
      name: "ques10",
      disabled: true,
    },
    {
      question:
        "11. I feel like my life has generally been a failure or a disappointment.",
      name: "ques11",
      disabled: true,
    },
    {
      question:
        "12. I have trouble staying focused on what I'm supposed to be doing.",
      name: "ques12",
      disabled: true,
    },
    {
      question: "13. I blame myself for my faults and mistakes.",
      name: "ques13",
      disabled: true,
    },
    {
      question: "14. People tell me that I'm moving more slowly.",
      name: "ques14",
      disabled: true,
    },
    {
      question: "15. I have trouble finishing books, movies, or TV shows.",
      name: "ques15",
      disabled: true,
    },
    {
      question: "16. I put off making decisions more often than I used to.",
      name: "ques16",
      disabled: true,
    },
    {
      question: "17. When I feel down, friends and family can't cheer me up.",
      name: "ques17",
      disabled: true,
    },
    {
      question:
        "18. I think about death, or about people being better off without me.",
      name: "ques18",
      disabled: true,
    },
    {
      question:
        "19. I feel like I have less appetite than I used to and I'm losing weight.",
      name: "ques19",
      disabled: true,
    },
    {
      question:
        "20. I don't think about sex as often, or enjoy it as much, as I used to.",
      name: "ques20",
      disabled: true,
    },
  ];
  console.log(depressionTestQestionData, "123");
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
              Depression Test
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
            Are you experiencing depression?
          </p>
          <p className=" text-white text-center text-xl max-[700px]:text-base mt-8 px-16 pb-40 max-[700px]:px-2 max-[700px]:pb-32 ">
            Many people feel low at some point, but for those with clinical
            depression, such feelings don't pass; they lead to symptoms such as
            hopelessness, exhaustion, and thoughts of death. Depression can be
            treated but the first step is determining whether symptoms are
            present. This test could help.
          </p>
        </div>
        <AgreeDisagreeBox qestionData={depressionTestQestionData} />
      </div>
    </div>
  );
};

export default DepressionTest;

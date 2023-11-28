import { useCallback } from "react";
import { useRouter } from "next/router";
import 'animate.css';
const Desktop6 = () => {
  const router = useRouter();

  const onEllipseClick = useCallback(() => {
    router.push("/desktop9");
  }, [router]);

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/desktop5");
  }, [router]);

  const onSupportTextClick = useCallback(() => {
    router.push("/desktop7");
  }, [router]);

  const onMoreTextClick = useCallback(() => {
    router.push("/desktop8");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[3769px] overflow-hidden text-left text-5xl text-white font-inter">
      <div className="absolute top-[2097px] left-[-19px] bg-black w-[2579px] h-[613px]" />
      <div className="absolute top-[2672px] left-[0px] bg-black w-[2560px] h-[1097px]" />
      <div className="absolute top-[2758px] left-[-19px] bg-gray-100 w-[2579px] h-[443px]" />
      <div className="absolute top-[1388px] left-[-19px] bg-black w-[2579px] h-[709px]" />
      <div className="absolute top-[778px] left-[-19px] bg-gray-200 w-[2579px] h-[617px]" />
      <div className="absolute top-[-18px] left-[-19px] bg-black w-[2579px] h-[796px]" />
      <div className="absolute top-[0px] left-[0px] bg-gainsboro box-border w-[1280px] h-[138px] hidden border-[1px] border-solid border-black" />
      <div className="absolute top-[48px] left-[413px] rounded-26xl bg-black box-border w-[791px] h-10 border-[1px] border-solid border-orange" />
      <div className="absolute top-[48px] left-[749px] rounded-48xl bg-orange box-border w-[101px] h-10 border-[1px] border-solid border-orange" />
      <div
        className="absolute top-[38px] left-[1550px] rounded-[50%] bg-gainsboro box-border w-[61px] h-[61px] cursor-pointer border-[1px] border-solid border-black"
        onClick={onEllipseClick}
      />
      <div className="absolute top-[66px] left-[0px] text-xl text-center inline-block w-[145px] h-5">
        SafarArabic
      </div>
      <div
        className="absolute top-[58px] left-[405px] text-xl text-center inline-block w-[101px] h-5 cursor-pointer"
        onClick={onHomeTextClick}
      >
        Home
      </div>
      <div
        className="absolute top-[57px] left-[586px] text-xl text-center inline-block w-[101px] h-5 cursor-pointer"
        onClick={onAboutUsTextClick}
      >
        About Us
      </div>
      <div className="absolute top-[57px] left-[749px] text-xl text-black text-center inline-block w-[101px] h-5">
        Offers
      </div>
      <div
        className="absolute top-[57px] left-[924px] text-xl text-center inline-block w-[101px] h-5 cursor-pointer"
        onClick={onSupportTextClick}
      >
        Support
      </div>
      <div
        className="absolute top-[57px] left-[1086px] text-xl text-center inline-block w-[101px] h-5 cursor-pointer"
        onClick={onMoreTextClick}
      >
        More
      </div>
      <b className="absolute top-[296px] left-[679px] text-45xl hidden text-black w-[719px] h-[316px]">
        <p className="m-0">
          Unlock the Beauty of Arabic: Your Journey to Fluent Expression Begins
          Here!
        </p>
      </b>
      <div className="absolute top-[3605.5px] left-[-5.5px] box-border w-[1291px] h-[11px] border-t-[11px] border-solid border-black" />
      <img
        className="absolute top-[0px] left-[0px] w-[621.9px] h-[940.6px] object-cover"
        alt=""
        src="/download--22-removebgpreview-1@2x.png"
      />
      <div className="absolute top-[682px] left-[171px] rounded-2xl bg-black box-border w-[260px] h-[206px] border-[1px] border-solid border-white" />
      <div className="absolute top-[682px] left-[688px] rounded-2xl bg-black box-border w-[260px] h-[206px] border-[1px] border-solid border-white" />
      <div className="absolute top-[682px] left-[1204px] rounded-2xl bg-black box-border w-[260px] h-[206px] border-[1px] border-solid border-white" />
      <div className="absolute top-[769px] left-[172px] font-semibold text-center inline-block w-[259px] h-[66px]">
        Free Courses
      </div>
      <div className="absolute top-[769px] left-[709px] font-semibold text-center inline-block w-[219px] h-[57px]">
        Visually Attractive UI
      </div>
      <div className="absolute top-[769px] left-[1204px] font-semibold text-center inline-block w-[260px] h-[84px]">
        Social Activity / Status
      </div>
      <div className="absolute top-[633px] left-[395px] rounded-10xl bg-black box-border w-[113px] h-[113px] border-[1px] border-solid border-white" />
      <div className="absolute top-[635px] left-[911px] rounded-10xl bg-black box-border w-[113px] h-[113px] border-[1px] border-solid border-white" />
      <div className="absolute top-[633px] left-[1447px] rounded-10xl bg-black box-border w-[113px] h-[113px] border-[1px] border-solid border-white" />
      <div className="absolute top-[3453px] left-[172px] inline-block w-[130px] h-[29px]">
        Company
      </div>
      <div className="absolute top-[3529px] left-[172px] text-mini inline-block w-[130px] h-[29px]">
        About us
      </div>
      <div className="absolute top-[3524px] left-[741px] text-mini inline-block w-[130px] h-[29px]">
        Offers
      </div>
      <div className="absolute top-[3525px] left-[1376px] text-mini inline-block w-[130px] h-[29px]">
        Instagram
      </div>
      <div className="absolute top-[3574px] left-[1376px] text-mini inline-block w-[130px] h-[29px]">
        Facebook
      </div>
      <div className="absolute top-[3574px] left-[741px] text-mini inline-block w-[130px] h-[29px]">
        Personality Test
      </div>
      <div className="absolute top-[3578px] left-[172px] text-mini inline-block w-[130px] h-[29px]">
        Support
      </div>
      <div className="absolute top-[3453px] left-[746px] inline-block w-[130px] h-[29px]">
        Services
      </div>
      <div className="absolute top-[3453px] left-[1376px] inline-block w-[130px] h-[29px]">
        Socials
      </div>
      <img
        className="absolute top-[124px] left-[0px] w-[480px] h-[520px] object-cover"
        alt=""
        src="/download--23-removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[651px] left-[928px] w-[78px] h-[78px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
      <img
        className="absolute top-[650px] left-[1464px] w-[79px] h-[79px] overflow-hidden"
        alt=""
        src="/frame1.svg"
      />
      <img
        className="absolute top-[651px] left-[412px] w-[78px] h-[78px] overflow-hidden"
        alt=""
        src="/frame2.svg"
      />
      <div className="absolute top-[282px] left-[668px] text-45xl leading-[80px] font-roboto inline-block w-[724px]">{`Unlock the beauty of Arabic: Your journey to fluent expression begins here! `}</div>
      <b className="absolute top-[982px] left-[352px] inline-block text-center w-[1006px] h-[113px]">
        SafarArabic is an official Arabic learning Site that aims to help the
        youth improve their Arabic skills and challenges those who already have
        experience. Our main goal is to make the site appealing for the modern
        youth as much as possible while at the same time providing good teaching
        skills.
      </b>
      <b className="absolute top-[1492px] left-[160px] inline-block w-[390px] h-[93px]">
        Sponsored by the most Iconic Arabic only brands.
      </b>
      <b className="absolute top-[1866px] left-[180px] inline-block w-[390px] h-[45px]">
        Got a code to redeem?
      </b>
      <div className="absolute top-[1175px] left-[451px] text-xl font-semibold text-lightsteelblue text-center inline-block w-[760px] h-[85px]">
        Whether you’re a beginner or a professional in speaking or writing
        arabic, SafarArabic offers and ensures that all users will gain the
        experience they need in order to improvise their arabic skills.
      </div>
      <div className="absolute top-[1479px] left-[868px] text-sm font-semibold text-gainsboro inline-block w-[520px] h-[93px]">
        How we monetize our website? Very simple actually! This website is
        actually sponsored by several well known Arab brands. Not to mention if
        you completed our challenges, you could win a gift code for any of the
        brands provided.
      </div>
      <div className="absolute top-[2195px] left-[45px] font-semibold inline-block w-[520px] h-[114px]">
        Hear what our customers say :)
      </div>
      <div className="absolute top-[1580px] left-[225px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1580px] left-[431px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1579px] left-[650px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1576px] left-[870px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1580px] left-[1126px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1577px] left-[1383px] rounded-10xl bg-black box-border w-[150px] h-[150px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1966px] left-[180px] rounded-82xl bg-black box-border w-[668px] h-[71px] border-[1px] border-solid border-white" />
      <div className="absolute top-[1966px] left-[876px] rounded-82xl bg-orange box-border w-[130px] h-[71px] border-[1px] border-solid border-orange" />
      <div className="absolute top-[1987px] left-[204px] inline-block w-[130px] h-[29px]">
        Code
      </div>
      <div className="absolute top-[1987px] left-[894px] text-black text-center inline-block w-[94px] h-[29px]">
        Apply
      </div>
      <div className="absolute top-[2827px] left-[160px] bg-orange box-border w-[1376px] h-[316px] border-[1px] border-solid border-black" />
      <div className="absolute top-[2906px] left-[557px] text-xs font-semibold text-black text-center inline-block w-[520px] h-[37px]">
        Join now our program and gain an unforgettable journey in improvising
        and adapting to arabic.
      </div>
      <div className="absolute top-[2861px] left-[557px] font-semibold text-black text-center inline-block w-[520px] h-10">
        What are you waiting for?
      </div>
      <div className="absolute top-[2970px] left-[524px] rounded-82xl bg-white box-border w-[668px] h-[71px] border-[1px] border-solid border-black" />
      <div className="absolute top-[2970px] left-[1213px] rounded-82xl bg-black box-border w-[130px] h-[71px] border-[1px] border-solid border-black" />
      <div className="absolute top-[2991px] left-[557px] text-black inline-block w-[130px] h-[29px]">
        Email
      </div>
      <div className="absolute top-[2991px] left-[1231px] text-center inline-block w-[94px] h-[29px]">
        Apply
      </div>
      <img
        className="absolute top-[1605px] left-[250px] w-[100px] h-[100px] object-cover"
        alt=""
        src="/2removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[1584px] left-[439px] w-[134px] h-[134px] object-cover"
        alt=""
        src="/download--3-removebgpreview-1@2x.png"
      />
      <img
        className="absolute h-[1.75%] w-[5.59%] top-[43.04%] right-[54.53%] bottom-[55.21%] left-[39.88%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/download--1-removebgpreview-3@2x.png"
      />
      <img
        className="absolute top-[1598px] left-[820px] w-[250px] h-28 object-cover"
        alt=""
        src="/screenshot--211-removebgpreview-1-1@2x.png"
      />
      <img
        className="absolute top-[1579px] left-[1125px] w-[153px] h-[153px] object-cover"
        alt=""
        src="/download--19-removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[1556px] left-[1364px] w-[188px] h-[188px] object-cover"
        alt=""
        src="/61457e92f8cc77657dfa2b46-artboard-16-copy-1@2x.png"
      />
      <div className="absolute top-[2367.5px] left-[204px] w-[329px] flex flex-col items-start justify-start gap-[16px] text-base font-roboto">
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
          <div className="relative rounded-61xl box-border w-16 h-16 border-[8px] border-solid border-gray-300">
            <div className="absolute h-3/4 w-9/12 top-[0%] right-[25%] bottom-[25%] left-[0%] rounded-381xl bg-[url('/frame3@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 relative leading-[20px]">{`Patrick `}</div>
            </div>
            <div className="self-stretch relative leading-[20px] text-gray-400">
              Student
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-sm leading-[20px]">
          Learning arabic here is fun which is something I never expected for
          someone like me to admit. Learning Courses has been entertaining and
          making friends here helped me find my own community of people I could
          relate to!
        </div>
      </div>
      <div className="absolute top-[2352px] left-[696px] rounded bg-gray-300 box-border w-[377px] h-[173px] flex flex-col items-start justify-center p-6 text-base font-roboto border-[1px] border-solid border-lightsteelblue">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
            <div className="relative rounded-61xl box-border w-16 h-16 border-[8px] border-solid border-gray-300">
              <div className="absolute h-3/4 w-9/12 top-[0%] right-[25%] bottom-[25%] left-[0%] rounded-381xl bg-[url('/frame4@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[20px]">{`Yahia `}</div>
              </div>
              <div className="self-stretch relative leading-[20px] text-gray-400">
                Student
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-xs leading-[20px]">
            Thanks to tests and lectures I took, I became able to speak arabic
            fluently, that doesn’t mean I’m done considering I’m aiming to
            perfect my arabic speaking skills, but I did find myself spendin
            more time here than the usual social media apps or platforms.
          </div>
        </div>
      </div>
      <div className="absolute top-[2377.5px] left-[1237px] w-[329px] flex flex-col items-start justify-start gap-[16px] text-base font-roboto">
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
          <div className="relative rounded-61xl box-border w-16 h-16 border-[8px] border-solid border-gray-300">
            <div className="absolute h-3/4 w-9/12 top-[0%] right-[25%] bottom-[25%] left-[0%] rounded-381xl bg-[url('/frame5@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 relative leading-[20px]">{`Ali `}</div>
            </div>
            <div className="self-stretch relative leading-[20px] text-gray-400">
              Student
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-mini leading-[20px]">
          Always wanted to test how much do I know and how fluent I am in
          arabic, I got humbled pretty quickly but I do aim to perfectly achieve
          my skills!
        </div>
      </div>
    </div>
  );
};

export default Desktop6;

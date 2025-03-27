import { IoSchool } from "react-icons/io5";
import { FaAnglesDown } from "react-icons/fa6";

import myImage from "../assets/images/my-image2.jpg";
import CardInfo from "./UI/CardInfo.jsx";

export default function AboutMe() {
  return (
    <>
      <section className="mb-10">
        <div className="text-center mb-24">
          <div>Get To Know More</div>
          <h2 className="font-bold text-4xl mt-3">About Me</h2>
        </div>

        <div className="flex gap-12">
          <div className="w-[23rem] h-[23rem] rounded-4xl overflow-hidden">
            <img
              src={myImage}
              alt="My image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[40rem]">
            <div className="flex gap-7">
              <CardInfo
                icon={
                  <>
                    <IoSchool size="1.5rem" />
                    <span className="ml-2">Master</span>
                  </>
                }
                title="國立清華大學"
                description="計算與建模科學研究所"
                date="2022/9 - 2024/6"
              />
              <CardInfo
                icon={
                  <>
                    <IoSchool size="1.5rem" />
                    <span className="ml-2">Bachelor</span>
                  </>
                }
                title="國立臺東大學"
                description="應用數學系"
                date="2018/9 - 2022/6"
              />
            </div>

            <div className="w-full mt-10">
              <p className="text-neutral-600">
                我的名字叫韓惟晞，我是剛畢業幾個月的社會新鮮人，在學期間發現自己對網頁開發有濃厚的興趣。
                於是，我在課餘時間自學前端開發技術，並且在畢業後繼續加強、學習更多相關技能。目前，我的目標是成為一名前端工程師，並將不斷努力提升自己，朝著這個目標邁進。
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute right-28">
        <FaAnglesDown size="1.8rem" />
      </div>
    </>
  );
}

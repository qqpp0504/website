import { AiTwotoneMail } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";

import SectionTitle from "./UI/SectionTitle.jsx";

export default function Contact() {
  return (
    <section id="contact" className="my-48">
      <SectionTitle exploreText="Get In Touch" title="Contact Me" />

      <div className="rounded-3xl border-[1.5px] border-neutral-400 px-7 py-5 w-fit mx-auto flex flex-col sm:flex-row gap-8 bg-neutral-100 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-black">
            <AiTwotoneMail color="white" size="1.2rem" />
          </div>
          <div>qqpp0504@gmail.com</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-black">
            <MdPhoneIphone color="white" size="1.2rem" />
          </div>
          <div>0961-542-566</div>
        </div>
      </div>
    </section>
  );
}

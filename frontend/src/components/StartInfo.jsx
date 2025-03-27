import myImage from "../assets/images/my-image.jpg";
import Button from "./UI/Button.jsx";

export default function StartInfo() {
  return (
    <section className="flex justify-center items-center gap-20 my-60">
      <div className="w-[25rem] h-[25rem] rounded-full overflow-hidden">
        <img
          src={myImage}
          alt="My image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center flex flex-col gap-3">
        <p className="text-lg">Hello, I'm</p>
        <p className="text-4xl font-bold">韓惟晞</p>
        <p className="font-bold text-neutral-600 text-3xl">
          Frontend Developer
        </p>
        <div className="flex gap-4 mt-2">
          <Button className="font-bold border-[1.5px]">Download CV</Button>
          <Button className="font-bold bg-neutral-700 text-white">
            Contact Info
          </Button>
        </div>
      </div>
    </section>
  );
}

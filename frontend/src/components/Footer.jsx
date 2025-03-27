export default function Footer() {
  return (
    <>
      <ul className="flex flex-col sm:flex-row gap-5 text-2xl items-center sm:justify-center pb-5">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="text-center my-8 text-neutral-600">
        &copy; 2025 hanwei. All rights reserved.
      </div>
    </>
  );
}

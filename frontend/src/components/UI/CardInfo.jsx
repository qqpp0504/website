export default function CardInfo({ icon, title, description, date }) {
  return (
    <div className="border-[1.5px] border-neutral-400 rounded-4xl h-fit p-8 text-center flex flex-col gap-2 w-full shadow-lg">
      <div className="flex items-center justify-center mx-auto mb-1">
        {icon}
      </div>
      <span className="font-bold text-lg">{title}</span>
      <p className="text-neutral-600">{description}</p>
      <span className="text-neutral-600">{date}</span>
    </div>
  );
}

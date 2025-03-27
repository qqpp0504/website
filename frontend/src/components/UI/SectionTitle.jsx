export default function SectionTitle({ exploreText, title }) {
  return (
    <div className="text-center mt-36 mb-14">
      <div>{exploreText}</div>
      <h2 className="font-bold text-4xl mt-3">{title}</h2>
    </div>
  );
}

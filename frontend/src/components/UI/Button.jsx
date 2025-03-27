export default function Button({ className, children }) {
  return (
    <button className={`rounded-4xl px-5 py-3 w-fit ${className}`}>
      {children}
    </button>
  );
}

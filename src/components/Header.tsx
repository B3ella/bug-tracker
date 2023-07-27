export default function ({ title }: { title: string }) {
  return (
    <header>
      <h1 className="m-4 font-sans text-4xl">{title}</h1>
      <nav></nav>
    </header>
  );
}

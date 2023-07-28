export default function ({ title }: { title: string }) {
  return (
    <header className="flex justify-between bg-black p-4 text-white">
      <h1 className="w-fit font-sans text-4xl">{title}</h1>
      <nav className="flex w-1/3 justify-between text-3xl">
        <a href="/bugs">bugs</a>
        <a href="/">home</a>
        <a href="/report-bug">report bug</a>
      </nav>
    </header>
  );
}

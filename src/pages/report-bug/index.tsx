import { FormEvent } from "react";
import Header from "~/components/Header";

interface ILabelInputProps {
  inputType: string;
  label: string;
}

function LabelInput({ inputType, label }: ILabelInputProps) {
  return (
    <label className="m-1 flex w-1/5 justify-between capitalize">
      {label}
      <input type={inputType} className="bg-slate-600 text-white" />
    </label>
  );
}

export default function () {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("prevented");
  }

  return (
    <main className="h-screen">
      <Header title="report bugs" />
      <form
        onSubmit={handleSubmit}
        className="flex h-full w-screen max-w-full flex-col items-center justify-center"
      >
        <LabelInput inputType="text" label="title" />
        <LabelInput inputType="text" label="description" />
        <LabelInput inputType="text" label="Assigned Developer" />
        <button>Report</button>
      </form>
    </main>
  );
}

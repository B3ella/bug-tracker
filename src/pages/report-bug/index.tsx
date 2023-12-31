import { FormEvent, ReactNode } from "react";
import Header from "~/components/Header";

interface ICustomLabelProps {
  children: ReactNode;
  label: string;
}
function CustomLabel({ children, label }: ICustomLabelProps) {
  return (
    <label className="m-1 flex w-1/5 justify-between capitalize">
      {label}
      {children}
    </label>
  );
}

interface ILabelInputProps {
  inputType: string;
  label: string;
}
function LabelInput({ inputType, label }: ILabelInputProps) {
  return (
    <CustomLabel label={label}>
      <input type={inputType} className="w-48 bg-slate-600 text-white" />
    </CustomLabel>
  );
}

interface ISelectDevProps {
  devNames: string[];
}
function option(name: string) {
  return (
    <option key={name} value={name}>
      {name}
    </option>
  );
}
function SelectDev({ devNames }: ISelectDevProps) {
  const options = devNames.map(option);

  return (
    <CustomLabel label="Developer">
      <select className="w-48 bg-slate-600 text-white">{options}</select>
    </CustomLabel>
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
        <SelectDev devNames={["dev1", "dev2", "dev3"]} />
        <button>Report</button>
      </form>
    </main>
  );
}

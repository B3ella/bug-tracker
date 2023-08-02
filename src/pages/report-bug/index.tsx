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

function SelectDev() {
  return (
    <CustomLabel label="Developer">
      <select className="w-48 bg-slate-600 text-white">
        <option value="developer">dev1</option>
        <option value="developer1">dev2</option>
        <option value="developer2">dev3</option>
      </select>
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
        <SelectDev />
        <button>Report</button>
      </form>
    </main>
  );
}

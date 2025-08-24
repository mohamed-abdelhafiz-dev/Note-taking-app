import type { UseFormRegisterReturn } from "react-hook-form";

interface LabeledInputProps {
  label: string;
  placeholder: string;
  defaultValue?: string;
  register: UseFormRegisterReturn;
  error: string | undefined;
}
const LabeledTextArea = ({
  label,
  placeholder,
  defaultValue,
  register,
  error,
}: LabeledInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="label font-medium ml-1">{label}</label>
      <textarea
        className={`textarea resize-none w-full rounded-xl h-32 ${
          error ? "textarea-error" : ""
        }`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register}
      />
      {error && <p className="text-error text-xs m-1">{error}</p>}
    </div>
  );
};

export default LabeledTextArea;

import type { UseFormRegisterReturn } from "react-hook-form";

interface LabeledInputProps {
  label: string;
  type: string;
  placeholder: string;
  defaultValue?: string;
  register: UseFormRegisterReturn;
  error?: string | undefined;
}

const LabeledInput = ({
  label,
  type,
  placeholder,
  defaultValue,
  register,
  error,
}: LabeledInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="label font-medium ml-1">{label}</label>
      <input
        className={`input rounded-xl w-full ${error ? "input-error" : ""}`}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register}
      />
      {error && <p className="text-error text-xs m-1">{error}</p>}
    </div>
  );
};

export default LabeledInput;

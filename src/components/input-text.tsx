import { useId } from "react";
import { Input } from "./ui/input";

type InputTextProps = {
  isPending: boolean;

  label: string;
  OptionName: string;
  defaultValue: string;
} & React.ComponentProps<"input">;

export const InputText = ({
  isPending,
  label,
  defaultValue,
  OptionName: name,
  ...props
}: InputTextProps) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-foreground text-sm font-medium">
        {label}
      </label>

      <Input
        type="text"
        name={name}
        id={id}
        defaultValue={defaultValue}
        disabled={isPending}
        className="border-border bg-background w-full rounded-xl border px-3 py-2 text-sm shadow-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
    </div>
  );
};

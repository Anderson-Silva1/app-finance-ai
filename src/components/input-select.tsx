import {
  CATEGORY_LABELS,
  PAYMENT_METHOD_LABELS,
  STATUS_LABELS,
  TRANSACTION_TYPE_LABELS,
} from "@/constants";
import { useId } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type InputSelectProps = {
  placeholder: string;
  isPending: boolean;
  name: string;
  defaultValue: string;
  label: string;
  mode: "type" | "category" | "paymentMethod" | "status";
} & React.ComponentProps<"input">;

export const InputSelect = ({
  isPending,
  placeholder,
  defaultValue,
  name,
  label,
  mode,
}: InputSelectProps) => {
  const id = useId();

  function recordToOptions<T extends Record<string, string>>(record: T) {
    return Object.entries(record).map(([value, label]) => ({
      label,
      value,
    }));
  }

  let valueOptions;

  switch (mode) {
    case "type":
      valueOptions = recordToOptions(TRANSACTION_TYPE_LABELS);
      break;
    case "category":
      valueOptions = recordToOptions(CATEGORY_LABELS);
      break;
    case "paymentMethod":
      valueOptions = recordToOptions(PAYMENT_METHOD_LABELS);
      break;
    case "status":
      valueOptions = recordToOptions(STATUS_LABELS);
      break;
  }

  return (
    <div className="flex flex-col justify-center gap-2">
      <label htmlFor={id} className="text-foreground text-sm font-medium">
        {label}
      </label>

      <Select
        disabled={isPending}
        value={defaultValue || undefined}
        name={name}
      >
        <SelectTrigger id={id}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {valueOptions.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

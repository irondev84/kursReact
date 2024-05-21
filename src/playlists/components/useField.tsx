import { useRef, useState } from "react";

export function useField<T extends HTMLElement & { value: string }>(
  updater: (value: string) => void,
  validation?: any
) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState("");
  const onChange = (event: React.ChangeEvent<T>) => {
    setValue(event.target.value);
    updater(event.target.value);
    // validation????
    ref.current!.style.border = event.target.value == "" ? "1px solid red" : "";
  };

  return { ref, value, onChange };
}

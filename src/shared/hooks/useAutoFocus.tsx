import { useEffect, useRef } from "react";

/**
 * Use to attach autoFocus
 * @returns React.refObject
 */
export function useAutoFocus() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => ref.current?.focus(), []);

  return ref;
}

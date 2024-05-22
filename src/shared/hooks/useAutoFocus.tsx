import { useEffect, useRef } from "react";



/* 

React Hook "useRef" is called in function "plackiAutoFocus" that is neither a React function component nor a custom React Hook function. 
React component names must start with an uppercase letter. 
React Hook names must start with the word "use".
eslintreact-hooks/rules-of-hooks

export function plackiAutoFocus() {
  const ref = useRef<HTMLInputElement>(null);
  // ...
}
*/

/**
 * Use to attach autoFocus
 * @returns React.refObject
 */
export function useAutoFocus() {
  const ref = useRef<HTMLInputElement>(null);


  if(Math.random() > 0.5){
    // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render.eslintreact-hooks/rules-of-hooks
    // const [first, setfirst] = useState(second)
  }

  useEffect(() => ref.current?.focus(), []);

  return ref;
}

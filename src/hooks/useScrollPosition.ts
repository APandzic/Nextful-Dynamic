import { useState } from "react";
import useEventListener from "./useEventListener";

function useScrollPosition(): number {
  const [value, setValue] = useState<number>(0);

  useEventListener("scroll", () => {
    setValue(window.scrollY);
  });

  return value;
}

export default useScrollPosition;

import { useCallback, useState, RefObject } from "react";
import useIsomorphicLayoutEffect from "src/hooks/useIsomorphicLayoutEffect";

interface Props {
  toggle: boolean;
  children: React.ReactNode;
  elementRef: RefObject<HTMLElement>;
  className?: string;
  duration?: number
}

export default function AnimateHeight({ toggle, elementRef, duration, className, children }: Props) {
  const [height, setHeight] = useState<number>(0);

  const handleHeight = useCallback(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.clientHeight || 0);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  useIsomorphicLayoutEffect(() => {
    handleHeight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  const d = duration ? duration : 1;

  return (
    <div
      className={`overflow-hidden ${className ? className : ''}`}
      style={toggle ? { maxHeight: height, transition: `max-height ${d}s` } : { maxHeight: 0, transition: `max-height ${d}s` }}
    >
      {children}
    </div>
  );
}

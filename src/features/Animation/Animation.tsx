import { useEffect, useRef, useState } from "react";

type AnimationProps = {
  baseClass: string;
  conditionOnShow: boolean;
  duration?: number;
  children: React.ReactNode;
};

type AnimationTypes = "entered" | "entering" | "finished" | "finishing";

function Animation({
  baseClass,
  conditionOnShow,
  duration,
  children,
}: AnimationProps) {
  const [animationProcess, setAnimationProcess] =
    useState<AnimationTypes>("entering");

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
      setAnimationProcess("finished");
    };
  }, []);

  const [visible, setVisible] = useState(conditionOnShow);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!conditionOnShow) {
      setAnimationProcess(() => "finishing");
      timeoutRef.current = setTimeout(() => {
        setAnimationProcess(() => "finished");
        setVisible(false);
      }, duration || 300);
    } else {
      setAnimationProcess(() => "entering");
      setVisible(true);
      timeoutRef.current = setTimeout(() => {
        setAnimationProcess(() => "entered");
      }, duration || 300);
    }
  }, [conditionOnShow]);

  return visible ? (
    <div className={`${baseClass} ${baseClass}--${animationProcess}`}>
      {children}
    </div>
  ) : null;
}

export default Animation;

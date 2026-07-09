"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
}

export default function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 30, 
    stiffness: 60 
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    // FIX: Using Math.round keeps the value as a number for Intl.NumberFormat
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const roundedValue = Math.round(latest);
        ref.current.textContent = new Intl.NumberFormat("en-US").format(roundedValue) + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}
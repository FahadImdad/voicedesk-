"use client";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); o.disconnect(); } }, { threshold: 0.12 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: on ? 1 : 0,
      transform: on ? "none" : "translateY(18px)",
      transition: `opacity .6s ease ${delay}ms, transform .6s cubic-bezier(.22,1,.36,1) ${delay}ms`
    }} className={className}>{children}</div>
  );
}

export function StaggerGrid({ items, className = "", renderItem }: {
  items: unknown[]; className?: string; renderItem: (item: unknown, i: number) => React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); o.disconnect(); } }, { threshold: 0.08 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} className={className}>
      {items.map((item, i) => (
        <div key={i} style={{
          opacity: on ? 1 : 0,
          transform: on ? "none" : "translateY(16px)",
          transition: `opacity .5s ease ${i*90}ms, transform .5s cubic-bezier(.22,1,.36,1) ${i*90}ms`
        }}>{renderItem(item, i)}</div>
      ))}
    </div>
  );
}

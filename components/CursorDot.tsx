"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    
    // Set initial position to center of screen to avoid jump
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    dotPos.current = { ...mousePos.current };
    outlinePos.current = { ...mousePos.current };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isHoverable = 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".skill-tag") || 
        target.closest(".project-card") ||
        target.style.cursor === "pointer";
        
      if (isHoverable) {
        document.body.classList.add("hovering-cursor");
      } else {
        document.body.classList.remove("hovering-cursor");
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    let animationFrameId: number;
    
    const updatePosition = () => {
      // Lerp for inner dot (~100ms lag, factor 0.15)
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.15;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.15;
      
      // Lerp for outer outline ring (slightly slower, factor 0.08)
      outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * 0.08;
      outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * 0.08;
      
      if (dotRef.current) {
        dotRef.current.style.left = `${dotPos.current.x}px`;
        dotRef.current.style.top = `${dotPos.current.y}px`;
      }
      
      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlinePos.current.x}px`;
        outlineRef.current.style.top = `${outlinePos.current.y}px`;
      }
      
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    
    animationFrameId = requestAnimationFrame(updatePosition);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove("hovering-cursor");
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} className="cursor-dot-class" />
      <div id="cursor-dot-outline" ref={outlineRef} className="cursor-outline-class" />
    </>
  );
}

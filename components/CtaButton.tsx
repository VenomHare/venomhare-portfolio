"use client";

import React, { ReactNode } from "react";

interface CtaButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  download?: boolean;
}

export default function CtaButton({ children, href, onClick, download }: CtaButtonProps) {
  const content = (
    <>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect 
          x="0" 
          y="0" 
          width="100" 
          height="100" 
          rx="0" 
          ry="0" 
          vectorEffect="non-scaling-stroke" 
        />
      </svg>
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className="btn-tracing" download={download}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="btn-tracing">
      {content}
    </button>
  );
}

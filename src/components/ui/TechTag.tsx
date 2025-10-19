import React from "react";

interface TechTagProps {
  children: React.ReactNode;
}

export function TechTag({ children }: TechTagProps) {
  return (
    <div className="flex items-center rounded-full bg-[#64ffda]/10 px-3 py-1 text-xs font-medium leading-5 text-[#64ffda]">
      {children}
    </div>
  );
}

import React from 'react';
import {Typography} from "../Typography/Typography";

interface SheetProps {
  children: React.ReactNode;
  subTitle?: string;
  variant?: "sm"; 
}

const SmallVariant = ({children, subTitle}:SheetProps) => (
  <div className="w-[300px] bg-gray-50 flex justify-center items-center flex-col rounded-lg px-6 py-4">
    {children}
    <div className="text-center flex items-center justify-center gap-3 w-full">
      <div className="w-full h-[2px] rounded-lg bg-[#00dd9b88]"></div>
      <p className="text-[14px] whitespace-nowrap font-bold">{subTitle}</p>
      <div className="w-full h-[2px] rounded-lg bg-[#00dd9b88]"></div>
    </div>
  </div>
);

const DefaultVariant = ({children, subTitle}:SheetProps) => (
  <div className="bg-gray-50 w-fit rounded-lg px-6 py-4">
    {children}
    {subTitle && (
      <div className="text-center flex items-center justify-center gap-3">
        <div className="w-full h-[3px] rounded-lg bg-[#00dd9b88]"></div>
        <Typography variant="title">{subTitle}</Typography>
        <div className="w-full h-[3px] rounded-lg bg-[#00dd9b88]"></div>
      </div>
    )}
  </div>
);

export const Sheet: React.FC<SheetProps> = ({ children, subTitle, variant }:SheetProps) => {
  let content;

  switch (variant) {
    case "sm":
      content = <SmallVariant children={children} subTitle={subTitle} />;
      break;
    default:
      content = <DefaultVariant children={children} subTitle={subTitle} />;
  }

  return <>{content}</>;
};


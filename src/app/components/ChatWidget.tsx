import React from 'react';
import svgPaths from "../../imports/svg-29je10irxi";

const IbmWatsonxAssistant = () => {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 w-[28px] h-[28px] top-1/2" data-name="ibm-watsonx--assistant 1">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_34_3070)" id="ibm-watsonx--assistant 1">
          <path d={svgPaths.p1c04d780} fill="white" id="Vector" />
          <path d={svgPaths.p67aa400} fill="white" id="Vector_2" />
          <path d={svgPaths.p27744300} fill="white" id="Vector_3" />
          <path d={svgPaths.p12111200} fill="white" id="Vector_4" />
          <path d={svgPaths.p2a429580} fill="white" id="Vector_5" />
          <path d={svgPaths.p1dbf4180} fill="white" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_34_3070">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const Wrapper = () => {
  return (
    <div className="absolute left-[2px] rounded-[50px] w-[48px] h-[48px] top-[2px]" data-name="wrapper">
      <IbmWatsonxAssistant />
    </div>
  );
};

export const ChatWidget = () => {
  return (
    <div className="bg-[#054ada] relative rounded-[50px] w-full h-full cursor-pointer hover:bg-[#0043ce] transition-colors shadow-lg" data-name="Сhat_widget">
      <Wrapper />
    </div>
  );
};

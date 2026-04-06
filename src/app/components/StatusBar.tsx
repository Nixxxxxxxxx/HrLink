import React from 'react';
import svgPaths from "../../imports/svg-g2d17gx4tq";

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6613 11.3363">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p2a2e4480} id="Rectangle" opacity="0.35" stroke="black" />
            <path d={svgPaths.p28e87170} fill="black" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p323b7c80} fill="black" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p3060aa80} fill="black" id="Wifi" />
          <path d={svgPaths.pa3a6bc0} fill="black" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[12px] w-[54px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p24372f50} fill="black" />
            <path d={svgPaths.p3aa84e00} fill="black" />
            <path d={svgPaths.p2e6b3780} fill="black" />
            <path d={svgPaths.p12b0b900} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[21px] top-[12px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function IPhoneXOrNewer() {
  return (
    null
  );
}

export const StatusBar: React.FC = () => {
  return null;
}

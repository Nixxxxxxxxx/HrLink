export default function Ellipse() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g data-figma-bg-blur-radius="64" filter="url(#filter0_i_88_57)" id="Ellipse 4">
          <circle cx="11" cy="11" fill="var(--fill-0, #616161)" fillOpacity="0.4" r="11" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="150" id="filter0_i_88_57" width="150" x="-64" y="-64">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-4" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
            <feBlend in2="shape" mode="color-dodge" result="effect1_innerShadow_88_57" />
          </filter>
          <clipPath id="bgblur_0_88_57_clip_path" transform="translate(64 64)">
            <circle cx="11" cy="11" r="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
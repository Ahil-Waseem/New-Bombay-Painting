import React from "react";

const AnimatedCards = () => {
  return (
    <div className="relative flex flex-wrap justify-center items-center gap-4 min-h-screen bg-[oklch(0.145_0_0)] text-[oklch(0.985_0_0)] p-8 overflow-hidden">
      {/* SVG filters */}
      <svg className="absolute">
        <defs>
          <filter
            id="filter1"
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="1"
            />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate
                attributeName="dy"
                values="700; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="1"
            />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate
                attributeName="dy"
                values="0; -700"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="2"
            />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate
                attributeName="dx"
                values="490; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="2"
            />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate
                attributeName="dx"
                values="0; -490"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend
              in="part1"
              in2="part2"
              mode="color-dodge"
              result="combinedNoise"
            />

            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>

          <filter
            id="filter2"
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="7"
            />
            <feColorMatrix type="hueRotate" result="pt1">
              <animate
                attributeName="values"
                values="0;360;"
                dur=".6s"
                repeatCount="indefinite"
                calcMode="paced"
              />
            </feColorMatrix>
            <feComposite />
            <feTurbulence
              type="turbulence"
              baseFrequency="0.03"
              numOctaves="7"
              seed="5"
            />
            <feColorMatrix type="hueRotate" result="pt2">
              <animate
                attributeName="values"
                values="0; 333; 199; 286; 64; 168; 256; 157; 360;"
                dur="5s"
                repeatCount="indefinite"
                calcMode="paced"
              />
            </feColorMatrix>
            <feBlend in="pt1" in2="pt2" mode="normal" result="combinedNoise" />

            <feDisplacementMap
              in="SourceGraphic"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      {/* Card 1 */}
      <Card
        title="Original"
        subtitle="Dramatic"
        description="In case you'd like to emphasize something very dramatically."
        borderColor="#dd8448"
        filter="url(#filter1)"
      />

      {/* Card 2 */}
      <Card
        title="Hue"
        subtitle="Dramatic"
        description="In case you'd like to emphasize something very dramatically."
        borderColor="DodgerBlue"
        filter="url(#filter2)"
      />
    </div>
  );
};

const Card = ({ title, subtitle, description, borderColor, filter }) => {
  return (
    <div
      className="relative p-[2px] rounded-3xl"
      style={{
        background: `linear-gradient(-30deg, ${borderColor}, transparent, ${borderColor}), linear-gradient(to bottom, oklch(0.185 0 0), oklch(0.185 0 0))`,
      }}
    >
      <div className="relative">
        <div
          className="border-2 border-opacity-50 rounded-3xl p-[0.15em]"
          style={{ borderColor }}
        >
          <div
            className="w-[22rem] aspect-[7/10] rounded-3xl border-2 mt-[-4px] ml-[-4px]"
            style={{ borderColor, filter }}
          ></div>
        </div>

        {/* Glow layers */}
        <div
          className="absolute inset-0 rounded-3xl border-2 blur-sm"
          style={{ borderColor }}
        ></div>
        <div
          className="absolute inset-0 rounded-3xl border-2 blur-lg"
          style={{ borderColor }}
        ></div>
      </div>

      {/* Overlay layers */}
      <div className="absolute inset-0 rounded-3xl mix-blend-overlay scale-110 blur-xl opacity-100 bg-gradient-to-r from-white via-transparent to-white"></div>
      <div className="absolute inset-0 rounded-3xl mix-blend-overlay scale-110 blur-xl opacity-50 bg-gradient-to-r from-white via-transparent to-white"></div>

      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-3xl scale-110 blur-[32px] opacity-30 -z-10"
        style={{
          background: `linear-gradient(-30deg, ${borderColor}, transparent, ${borderColor})`,
        }}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="flex flex-col p-12 pb-4">
          <div className="relative bg-white/5 hover:bg-white/10 transition-all rounded-xl px-4 py-2 uppercase font-bold text-sm text-white/80 w-fit">
            {subtitle}
          </div>
          <p className="text-3xl font-medium mt-auto">{title}</p>
        </div>

        <hr className="border-none h-[1px] bg-current opacity-10 mx-12" />

        <div className="flex flex-col p-12 pt-4">
          <p className="opacity-50">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCards;

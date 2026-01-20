import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export function Gmail({ width = 24, height = 18, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 18"
      fill="none"
      {...props}
    >
      <path
        d="M1.63636 18.0044H5.45456V8.73169L2.95434 4.36584L0 4.64077V16.368C0 17.2721 0.732281 18.0044 1.63636 18.0044Z"
        fill="#0085F7"
      />
      <path
        d="M18.5449 18.0044H22.3631C23.2672 18.0044 23.9995 17.2721 23.9995 16.368V4.64077L21.0494 4.36584L18.545 8.73169V18.0044H18.5449Z"
        fill="#00A94B"
      />
      <path
        d="M18.5456 1.64076L16.3027 5.92059L18.5456 8.73168L24.0001 4.64076V2.45896C24.0001 0.436681 21.6915 -0.71832 20.0728 0.495321L18.5456 1.64076Z"
        fill="#FFBC00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.45407 8.73168L3.31689 4.21714L5.45407 1.64075L11.9995 6.54983L18.5449 1.64075V8.73168L11.9995 13.6408L5.45407 8.73168Z"
        fill="#FF4131"
      />
      <path
        d="M0 2.45896V4.64076L5.45456 8.73168V1.64076L3.92728 0.495321C2.30864 -0.71832 0 0.436681 0 2.45896H0Z"
        fill="#E51C19"
      />
    </svg>
  );
}

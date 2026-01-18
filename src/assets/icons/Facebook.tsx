import { ComponentProps } from "react";

type Props = ComponentProps<"svg">;
function FacebookIcon(props: Props) {
  return (
    <svg
      width={11}
      height={21}
      viewBox="0 0 11 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.2 11.464l.565-3.688H7.227V5.382a1.844 1.844 0 012.079-1.993h1.609V.249C9.97.097 9.015.013 8.059 0 5.144 0 3.24 1.766 3.24 4.963v2.812H0v3.688h3.239v8.916a12.85 12.85 0 003.988 0v-8.916l2.973.001z"
        fill="currentColor"
      />
    </svg>
  );
}

export default FacebookIcon;

import { cn } from "@/lib/utils";

type BlueConicLogoProps = {
  className?: string;
  withBackground?: boolean;
};

export function BlueConicLogo({ className, withBackground = true }: BlueConicLogoProps) {
  return (
    <svg
      viewBox="0 0 108 108"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {withBackground ? <rect width="108" height="108" fill="#015FFF" /> : null}
      <g transform="translate(6.75 6.75)">
        <path
          d="M43.875 21.9375C43.875 34.0532 34.0532 43.875 21.9375 43.875C9.82178 43.875 0 34.0532 0 21.9375C0 9.82178 9.82178 0 21.9375 0C34.0532 0 43.875 9.82178 43.875 21.9375Z"
          fill="#FFFFFF"
        />
        <path
          d="M94.5 21.9375C94.5 34.0532 84.6782 43.875 72.5625 43.875C60.4468 43.875 50.625 34.0532 50.625 21.9375C50.625 9.82178 60.4468 0 72.5625 0C84.6782 0 94.5 9.82178 94.5 21.9375Z"
          fill="#FFFFFF"
        />
        <path
          d="M72.5625 94.5C84.6782 94.5 94.5 84.6782 94.5 72.5625C94.5 60.4468 84.6782 50.625 72.5625 50.625C60.4468 50.625 50.625 60.4468 50.625 72.5625C50.625 84.6782 60.4468 94.5 72.5625 94.5Z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}

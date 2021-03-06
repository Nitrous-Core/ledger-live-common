//@flow
import React from "react";

type Props = {
  size: number,
  color: string
};

export default function Stratis({ size, color = "currentColor" }: Props) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size}>
      <path
        fill={color}
        d="M12.778 4.482L8 1.804 3.222 4.482 8 7.155l4.778-2.673zM0 4.483L8 0l8 4.483-8 4.475-8-4.475zm8 5.9l6.902-3.86.768 1.375L8 12.187.336 7.897l.768-1.373L8 10.384zm6.902-.668l.768 1.374L8 15.385.335 11.089l.77-1.373L8 13.58l6.902-3.865z"
      />
    </svg>
  );
}

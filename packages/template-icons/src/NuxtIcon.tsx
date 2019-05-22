import React from "react";

export const NuxtIcon = ({
  width = 32,
  height = 32,
  className
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.84071 27.2566L9.76991 27.115C9.62832 26.8319 9.62832 26.5487 9.69911 26.1947H2.0531L13.3805 6.08849L18.1239 14.6549L19.6814 13.5221L14.9381 4.95575C14.8673 4.81416 14.3009 3.9646 13.3805 3.9646C12.9558 3.9646 12.3186 4.10619 11.823 5.02655L0.353981 25.3451C0.283185 25.5575 -0.21239 26.4779 0.212388 27.2566C0.495574 27.6814 0.920353 28.1062 1.9115 28.1062H11.5398C10.5487 28.1062 10.0531 27.6814 9.84071 27.2566Z"
      fill="#00C58E"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M31.646 25.4159L22.4425 8.84956C22.3009 8.70796 21.8053 7.78761 20.885 7.78761C20.4602 7.78761 19.823 8 19.3274 8.84956L18.1239 10.8319V14.6549L20.885 9.9115L30.0177 26.1947H26.5487C26.6067 26.5317 26.5572 26.8785 26.4071 27.1858L26.3363 27.2566C25.9115 28.0354 24.8496 28.1062 24.708 28.1062H30.0885C30.3009 28.1062 31.292 28.0354 31.7876 27.2566C32 26.9027 32.1416 26.2655 31.646 25.4159Z"
      fill="#108775"
    />
    <path
      d="M26.6195 27.2566V27.1858L26.6903 27.0442C26.7611 26.7611 26.8319 26.4779 26.7611 26.1947L26.4779 25.3451L19.2566 12.7434L18.1947 10.8319H18.1239L17.0619 12.7434L9.8407 25.3451L9.55752 26.1947C9.48896 26.5547 9.53863 26.9272 9.69911 27.2566C9.9823 27.6814 10.4071 28.1062 11.3982 28.1062H24.8496C25.0619 28.1062 26.1239 28.0354 26.6195 27.2566ZM18.1239 14.6549L24.708 26.1947H11.5398L18.1239 14.6549Z"
      fill="white"
    />
  </svg>
);
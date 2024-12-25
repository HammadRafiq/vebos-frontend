import React, { ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "body-small"
  | "div"
  | "small";

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  div: "div",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  "body-small": "p",
  small: "span",
};

const sizes: Record<Variant, string> = {
  div: "lg:text-f56 lg:leading-[56px] md:leading-[36px] leading-[28px] md:text-f36 text-f28 font-bold",
  h1: "lg:text-f56 lg:leading-[56px] md:leading-[36px] leading-[28px] md:text-f36 text-f28 font-bold",
  h2: "lg:text-f18 md:text-f16 text-f14 font-semibold",
  h3: "lg:text-f24 md:text-f18 text-f16 font-bold",
  h4: "lg:text-f20 md:text-f16 text-f14 font-bold",
  h5: "lg:text-f16 md:text-f14 text-f12 font-semibold",
  body: "lg:text-f18 md:text-f16 text-f14 font-normal",
  "body-small": "lg:text-f16 md:text-f14 text-f12 font-normal",
  small: "text-sm sm:text-xs",
};

export const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};

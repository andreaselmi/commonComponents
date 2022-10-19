import React, { HtmlHTMLAttributes, LegacyRef, ReactNode } from "react";
import "./Typography.module.scss";

type Variant = Extract<
  keyof JSX.IntrinsicElements,
  "p" | "span" | "h1" | "h2" | "h3" | "h4"
>;

interface ITypographyProps {
  bold?: boolean;
  variant: Variant;
  forwardedRef?: LegacyRef<HTMLParagraphElement> | undefined;
  children: ReactNode;
}

type TypographyProps = ITypographyProps &
  HtmlHTMLAttributes<HTMLParagraphElement>;

const Typography = ({
  children,
  variant = "span",
  forwardedRef,
  ...restProps
}: TypographyProps) => {
  const Component = variant;

  return (
    <Component ref={forwardedRef} {...restProps}>
      {children}
    </Component>
  );
};

export default Typography;

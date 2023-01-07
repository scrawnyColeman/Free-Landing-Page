import React, { HTMLAttributes } from "react";

type Props = {
  isLight?: boolean;
};

const Body: React.FC<HTMLAttributes<HTMLParagraphElement> & Props> = ({
  className,
  isLight = false,
  ...props
}) => (
  <p
    className={`${className ?? ""} font-md ${
      isLight ? "text-white" : "text-slate-500"
    }
  `}
    {...props}
  />
);

const Heading: React.FC<
  HTMLAttributes<HTMLHeadingElement> &
    Props & {
      tag: "h1" | "h2" | "h3" | "h4";
      isLight?: boolean;
    }
> = ({ className, isLight = false, tag: Tag = "h1", ...props }) => (
  <Tag
    className={`${className ?? ""}
    ${isLight ? "text-white" : "text-slate-500"}
     text-4xl font-bold leading-normal`}
    {...props}
  />
);

const Subheading: React.FC<
  HTMLAttributes<HTMLHeadingElement> &
    Props & {
      tag: "h5" | "h6";
      isLight?: boolean;
    }
> = ({ className, isLight = false, tag: Tag = "h6", ...props }) => (
  <Tag
    className={`${className ?? ""}
    ${isLight ? "text-white" : "text-slate-500"}
  text-lg font-bold leading-tight text-gray-800
  `}
    {...props}
  />
);

const Typography = {
  Body,
  Heading,
  Subheading,
};

export default Typography;

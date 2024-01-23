import { Image, ImageProps } from "@chakra-ui/react";

export const Logo = ({ fit = "contain", ...props }: Omit<ImageProps, "src">) => (
  <Image {...props} alt="Logo" fit={fit} src="../../../../../logo.svg" />
);

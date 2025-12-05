import type { SxProps, Theme, TypographyProps } from "@mui/material";

export type TReactProps = {
  children: React.ReactNode;
};

export type TTextProps = TypographyProps;
export type TDiagonalDivProps = {
  children: React.ReactNode;
  mainDivsx: SxProps<Theme>;
  previewColor: string;
};

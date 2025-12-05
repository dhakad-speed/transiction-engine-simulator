import { Typography } from "@mui/material";
import type { TTextProps } from "../../types/type";

function Text(props: TTextProps) {
  return <Typography {...props}>{props.children}</Typography>;
}

export default Text;

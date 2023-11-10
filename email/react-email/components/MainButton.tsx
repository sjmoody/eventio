import { Button } from "@react-email/components";
import { emailStyles } from "../styles";

export const MainButton = (props) => {
  return <Button pX={10} pY={10} style={emailStyles.button} {...props}></Button>;
};

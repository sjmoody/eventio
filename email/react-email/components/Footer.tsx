import { Hr, Text } from "@react-email/components";
import { emailStyles } from "../styles";
const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};

const anchor = {
  color: "#556cd6",
};

export const Footer = () => {
  return (
    <>
      <Text style={emailStyles.paragraph}>— The Eventio team</Text>
      <Hr style={emailStyles.hr} />
      <Text style={footer}>Eventio, Somewhere in the south of France</Text>
    </>
  );
};

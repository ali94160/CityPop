import React from "react";
import { StyledButton } from "./StyledButton";

interface Props {
  mode: "text" | "outlined" | "contained";
  children: React.ReactNode;
  onPress: () => void;
}

export default function Button({ children, mode, onPress }: Props) {
  return (
    <React.Fragment>
      <StyledButton onPress={onPress} mode={mode}>
        {children}
      </StyledButton>
    </React.Fragment>
  );
}

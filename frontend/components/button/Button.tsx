import { StyledButton, StyledText } from "./StyledButton";

interface Props {
  mode: "text" | "outlined" | "contained";
  children: React.ReactNode;
  onPress: () => void;
}

export default function Button({ children, mode, onPress }: Props) {
  return (
    <StyledButton onPress={onPress} mode={mode}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
}

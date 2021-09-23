import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  // Atomic designではどう使われるかを考える必要がある
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  /*変数の中身はそのままに新しくスタイルを追加することができる**/
  background-color: #40514e;
`;

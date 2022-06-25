import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <>
      <SContainer>
        <Input placeholder={"検索条件を入力"}></Input>
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
`;

const SButtonWrapper = styled.div`
  padding: 8px;
`;

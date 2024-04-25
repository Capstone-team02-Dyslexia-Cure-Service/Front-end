import styled from "@emotion/styled";
import TTSText from "@/component/TTSText";
import HeadphonesIcon from "@mui/icons-material/Headphones";

import { speech } from "../function/speech";

import { QuestionContainer, RowContainer } from "../Container";

const WriteWordQuestion = ({ content }: { content: string }) => {
  return (
    <QuestionContainer>
      <TTSText
        text={"단어를 듣고 올바른 철자로 작성해주세요!"}
        style={{ fontSize: "25px", fontWeight: "bold" }}
      />
      <RowContainer>
        <SoundIcon
          onClick={() => {
            speech(content);
          }}
        />
      </RowContainer>
    </QuestionContainer>
  );
};

const SoundIcon = styled(HeadphonesIcon)`
  color: blue;
  font-size: 100px;
`;

export default WriteWordQuestion;

declare namespace Question {
  //Basic
  type QuestionType =
    | "SELECT_WORD"
    | "READ_WORD"
    | "WRITE_WORD"
    | "READ_SENTENSE";

  export interface TestAnswerInfo {
    id: sting;
    questionResponseType: QuestionType;
  }

  //DTO
  export type BasicTestResDto = QuestionResDto[];

  export interface QuestionResDto {
    id: number;
    questionResponseType: QuestionType;
    content: string;
  }

  //Form type
  export interface WriteQuestionFrom {
    answer: string;
  }

  export interface ReadQuestionFrom {}

  //Store
  export interface TestStore {
    testContent: BasicTestResDto | undefined;
    testAnswers: (File | string)[];
    testAnswersInfo: TestAnswerInfo[];
    setTest: (test: BasicTestResDto) => void;
    setTestAnswers: (
      id: number,
      type: QuestionType,
      answer: string | File
    ) => void;
  }
}

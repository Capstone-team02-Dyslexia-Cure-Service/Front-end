import { create } from "zustand";

export const usePlayState = create<Question.PlayStore>((set) => ({
  id: -1,
  questionResponseType: "SELECT_WORD",
  content: "",
  answer: undefined, //file의 경우에만 사용된다.
  feedback: undefined,

  setPlay: (data) => {
    console.log(data);
    set(() => ({
      id: data.id,
      questionResponseType: data.questionResponseType,
      content: data.content,
      answer: undefined,
      feedback: undefined,
    }));
  },

  setAnswer: (data) => {
    set(() => ({
      answer: data,
    }));
  },

  setFeedback: (data) => {
    set(() => ({
      feedback: data,
    }));
  },
}));
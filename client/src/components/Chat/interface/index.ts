export type State = {
  input: string;
  answer: string[] | null;
  isLoading: boolean | null;
  isOpen: boolean;
  question: string;
};

export type Action =
  | { type: "input"; payload: string }
  | { type: "answer"; payload: string[] | null }
  | { type: "isLoading"; payload: boolean | null }
  | { type: "isOpen"; payload: boolean }
  | { type: "question"; payload: string };

export type GetRoomQuestionsAPIResponse = Array<{
  id: string;
  question: string;
  answer?: string;
  createdAt: string;
}>;

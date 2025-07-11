import type { GetRoomQuestionsAPIResponse } from "./types/getRoomsQuestionsResponse";
import { useQuery } from "@tanstack/react-query";

export const useRoomQuestions = (roomId: string) => {
  return useQuery<GetRoomQuestionsAPIResponse>({
    queryKey: ["get-room-questions", roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      );
      const result: GetRoomQuestionsAPIResponse = await response.json();
      return result;
    },
  });
};

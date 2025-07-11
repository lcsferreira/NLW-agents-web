import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateQuestionRequest } from "./types/createQuestionRequest";
import type { CreateQuestionResponse } from "./types/createQuestionResponse";
import type { GetRoomQuestionsAPIResponse } from "./types/getRoomsQuestionsResponse";

export const useCreateQuestion = (roomId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateQuestionResponse = await response.json();
      return result;
    },

    onMutate: ({ question }) => {
      const previousQuestions =
        queryClient.getQueryData<GetRoomQuestionsAPIResponse>([
          "get-room-questions",
          roomId,
        ]);

      const questionsArray = previousQuestions || [];

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      };

      queryClient.setQueryData<GetRoomQuestionsAPIResponse>(
        ["get-room-questions", roomId],
        [newQuestion, ...questionsArray]
      );

      return { newQuestion, previousQuestions };
    },

    onError: (_error, _variables, context) => {
      if (context?.previousQuestions) {
        queryClient.setQueryData<GetRoomQuestionsAPIResponse>(
          ["get-room-questions", roomId],
          context?.previousQuestions
        );
      }
    },

    onSuccess: (data, _variables, context) => {
      queryClient.setQueryData<GetRoomQuestionsAPIResponse>(
        ["get-room-questions", roomId],
        (previousQuestions) => {
          if (!previousQuestions || !context?.newQuestion) {
            return previousQuestions;
          }

          return previousQuestions.map((question) => {
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
                isGeneratingAnswer: false,
              };
            }

            return question;
          });
        }
      );
    },
  });
};

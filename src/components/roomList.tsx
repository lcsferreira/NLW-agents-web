import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRooms } from "@/http/useRooms";
import { formatDateToNow } from "@/utils/formatRelativeDate";
import { ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

export const RoomList = () => {
  const { data, isLoading } = useRooms();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salas criadas recentemente
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="size-4 animate-spin" />
          </div>
        ) : (
          data?.map((room) => (
            <Link
              key={room.id}
              to={`/room/${room.id}`}
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent"
            >
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>

                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="secondary" className="text-xs">
                    {formatDateToNow(room.createdAt)}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {room.questionsCount}{" "}
                    {room.questionsCount === 1 ? "pergunta" : "perguntas"}
                  </Badge>
                </div>
              </div>
              <span className="flex items-center gap-1 text-sm">
                Entrar <ArrowRight className="size-3" />
              </span>
            </Link>
          ))
        )}
      </CardContent>
    </Card>
  );
};

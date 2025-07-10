import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
  id: string;
  name: string;
}>;

export const CreateRoom = () => {
  const { data, isLoading } = useQuery<GetRoomsAPIResponse>({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsAPIResponse = await response.json();
      return result;
    },
  });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div className="flex flex-col gap-2">
          {data.map((room) => (
            <Link key={room.id} to={`/room/${room.id}`}>
              {room.name}
            </Link>
          ))}
        </div>
      )}
      <Button className="mt-4">Create Room</Button>
    </div>
  );
};

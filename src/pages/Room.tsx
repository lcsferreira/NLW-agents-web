import { Navigate, useParams } from "react-router-dom";

export const Room = () => {
  const { roomId } = useParams();

  if (!roomId) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Room Details {roomId}
    </div>
  );
};

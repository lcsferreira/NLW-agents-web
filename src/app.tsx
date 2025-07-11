import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/CreateRoom";
import { Room } from "./pages/Room";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecordRoomAudio } from "./pages/RecordRoomAudio";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<CreateRoom />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/room/:roomId/audio" element={<RecordRoomAudio />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

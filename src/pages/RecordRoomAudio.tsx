import { Button } from "@/components/ui/button";
import { Navigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";

const isRecordingSupported =
  Boolean(navigator.mediaDevices) &&
  Boolean(typeof navigator.mediaDevices.getUserMedia === "function") &&
  Boolean(typeof window.MediaRecorder === "function");

type RoomParams = {
  roomId: string;
};

export const RecordRoomAudio = () => {
  const { roomId } = useParams<RoomParams>();
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stopRecording = () => {
    setIsRecording(false);
    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.stop();
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const uploadAudio = async (audioBlob: Blob) => {
    const formData = new FormData();
    formData.append("audio", audioBlob, "audio.webm");
    const response = await fetch(
      `http://localhost:3333/rooms/${roomId}/audio`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();
    console.log(result);
  };

  const createRecorder = (audio: MediaStream) => {
    mediaRecorder.current = new MediaRecorder(audio, {
      mimeType: "audio/webm",
      audioBitsPerSecond: 64000,
    });

    mediaRecorder.current.ondataavailable = (event: BlobEvent) => {
      if (event.data.size > 0) {
        uploadAudio(event.data);
      }
    };

    mediaRecorder.current.start();
  };

  const handleStartRecording = async () => {
    if (!isRecordingSupported) {
      alert("Seu navegador não suporta gravação de áudio");
      return;
    }

    setIsRecording(true);

    try {
      const audio = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        },
      });

      createRecorder(audio);

      intervalRef.current = setInterval(() => {
        mediaRecorder.current?.stop();

        createRecorder(audio);
      }, 5000);
    } catch (error) {
      console.error(error);
      alert("Erro ao iniciar a gravação de áudio");
    }
  };

  if (!roomId) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <Button onClick={isRecording ? stopRecording : handleStartRecording}>
        {isRecording ? "Parar gravação" : "Gravar áudio"}
      </Button>
      {isRecording && (
        <p className="text-sm text-muted-foreground">Gravando...</p>
      )}
    </div>
  );
};

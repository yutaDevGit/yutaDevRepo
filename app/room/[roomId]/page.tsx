"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function RoomPage() {
  const params = useParams<{ roomId: string }>();
  const roomId = params.roomId;

  const [micStatus, setMicStatus] = useState("マイク取得前");

  useEffect(() => {
    const getMicrophone = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        setMicStatus("マイク取得成功！");
      } catch (error) {
        setMicStatus("マイク取得失敗");
        console.error(error);
      }
    };

    getMicrophone();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          padding: "24px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>🎤 ルーム</h1>

        <p>
          部屋番号：<strong>{roomId}</strong>
        </p>

        <p>
          状態：<strong>{micStatus}</strong>
        </p>
      </div>
    </main>
  );
}

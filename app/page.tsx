"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  const handleJoin = () => {
    if (!roomId.trim()) {
      alert("部屋番号を入力してください");
      return;
    }

    router.push(`/room/${roomId}`);
  };

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "320px",
          padding: "24px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>🎤 Voice Chat</h1>

        <p>部屋番号</p>

        <input
          type="text"
          placeholder="12345"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={handleJoin}
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          入室
        </button>
      </div>
    </main>
  );
}

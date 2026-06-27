export default async function RoomPage({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;

  return (
    <main
      style={{
        padding: "40px",
      }}
    >
      <h1>ルーム</h1>

      <p>部屋番号：{roomId}</p>
    </main>
  );
}

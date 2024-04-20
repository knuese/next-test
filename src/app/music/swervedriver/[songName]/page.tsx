export default function Song({ params }: { params: { songName: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {params.songName.toUpperCase()}
    </main>
  );
}

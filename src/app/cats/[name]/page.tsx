const allowedCats = ['benjamin', 'moose']

export default function Cat({ params }: { params: { name: string } }) {
  if (!allowedCats.includes(params.name.toLowerCase())) {
    throw new Error('cat not found')
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {params.name.toUpperCase()}
    </main>
  );
}

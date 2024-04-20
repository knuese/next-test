import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <b className="m-10">Swervedriver Songs</b>
      <ul>
        <li>
          <Link href="/music/swervedriver/duel">
            Duel
          </Link>
        </li>
        <li>
          <Link href="/music/swervedriver/never-lose-that-feeling">
            Never Lose That Feeling
          </Link>
        </li>
      </ul>
    </main>
  );
}

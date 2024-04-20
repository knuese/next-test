export default function SwervedriverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ color: 'blue' }}>
      {children}
    </div>
  );
}

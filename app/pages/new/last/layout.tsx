export default function DialerLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section>
          {children}
      </section>
    );
  }
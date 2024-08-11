export default function InstructionsLayout({
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
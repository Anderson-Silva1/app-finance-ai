export const Footer = () => {
  return (
    <footer className="border-border bg-background/80 text-foreground w-full border-t backdrop-blur-lg">
      {/* COPYRIGHT */}
      <div className="border-border text-muted-foreground border-t py-6 text-center text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">Finance AI</span>. Todos os
        direitos reservados.
      </div>
    </footer>
  );
};

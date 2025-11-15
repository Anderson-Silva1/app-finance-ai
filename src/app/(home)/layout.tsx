import { Footer } from "@/components/home/template/footer";
import { Header } from "@/components/home/template/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

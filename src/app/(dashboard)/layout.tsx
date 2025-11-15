import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Footer } from "@/components/dashboard/footer";
import { Header } from "@/components/dashboard/header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger className="absolute m-2 p-6" />
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}

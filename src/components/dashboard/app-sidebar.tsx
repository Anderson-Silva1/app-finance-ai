import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  CreditCardIcon,
  InfoIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
  ListOrderedIcon,
  SettingsIcon,
  TargetIcon,
} from "lucide-react";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Todas as Transações",
    url: "/transactions",
    icon: ListOrderedIcon,
  },
  {
    title: "Receitas",
    url: "/transactions/revenue",
    icon: ArrowUpCircleIcon,
  },
  {
    title: "Despesas",
    url: "/transactions/expense",
    icon: ArrowDownCircleIcon,
  },
  {
    title: "Contas Bancárias",
    url: "/accounts",
    icon: LandmarkIcon,
  },
  {
    title: "Cartões de Crédito",
    url: "/cards",
    icon: CreditCardIcon,
  },
  {
    title: "Metas",
    url: "/goals",
    icon: TargetIcon,
  },
  {
    title: "Configurações",
    url: "/settings",
    icon: SettingsIcon,
  },
  {
    title: "Sobre o Sistema",
    url: "/about",
    icon: InfoIcon,
  },
];
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

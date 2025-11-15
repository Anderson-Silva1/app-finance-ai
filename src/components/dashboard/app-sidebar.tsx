"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import clsx from "clsx";

import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  CreditCardIcon,
  InfoIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
  ListOrderedIcon,
  LogOutIcon,
  SettingsIcon,
  SquareArrowOutUpRightIcon,
  TargetIcon,
} from "lucide-react";

import { ModeToggle } from "../toggle-theme";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboardIcon },
  { title: "Todas as Transações", url: "/transactions", icon: ListOrderedIcon },
  { title: "Receitas", url: "/transactions/revenue", icon: ArrowUpCircleIcon },
  {
    title: "Despesas",
    url: "/transactions/expense",
    icon: ArrowDownCircleIcon,
  },
  { title: "Contas Bancárias", url: "/accounts", icon: LandmarkIcon },
  { title: "Cartões de Crédito", url: "/cards", icon: CreditCardIcon },
  { title: "Metas", url: "/goals", icon: TargetIcon },
  { title: "Configurações", url: "/settings", icon: SettingsIcon },
  { title: "Blog", url: "/blog", icon: SquareArrowOutUpRightIcon },
  { title: "Sobre o Sistema", url: "/about", icon: InfoIcon },
];

export function AppSidebar() {
  return (
    <Sidebar
      className={clsx(
        // Background + border baseado no seu theme
        "bg-sidebar text-sidebar-foreground border-sidebar-border border-r",
        // Suavização premium
        "shadow-xl backdrop-blur-xl",
      )}
    >
      {/* HEADER */}
      <SidebarHeader
        className={clsx(
          "flex flex-row items-center justify-between px-6 py-6",
          "border-sidebar-border border-b",
        )}
      >
        <div className="space-y-0.5">
          <p className="text-muted-foreground text-sm font-semibold tracking-wide">
            Bem-vindo,
          </p>
          <p className="text-base font-bold">{`Anderson da Silva`}</p>
        </div>

        <Avatar className="ring-primary/50 size-14 shadow-md ring-2">
          <AvatarImage src="https://github.com/Anderson-Silva1.png" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
      </SidebarHeader>

      {/* MENU */}
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground mb-3 text-xs tracking-widest uppercase">
            Navegação
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1.5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={clsx(
                      // Layout base
                      "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",

                      // Default text + icon (usa o token do sidebar)
                      "text-sidebar-foreground",

                      // Hover: acento (accent)
                      "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",

                      // Active: cor primária do sidebar
                      "data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground",

                      // Acessibilidade e micro UX
                      "focus-visible:ring-sidebar-ring transition-all focus-visible:ring-2",
                    )}
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon
                        className={clsx(
                          "text-muted-foreground size-5 transition-colors",
                          "group-hover:text-sidebar-accent-foreground",
                        )}
                      />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="border-sidebar-border border-t px-6 py-4">
        <div className="flex w-full items-center justify-between">
          <ModeToggle />

          <button
            className={clsx(
              "flex items-center gap-2 text-sm font-medium",
              "text-destructive hover:text-destructive/80 transition-colors",
            )}
          >
            <LogOutIcon className="size-5" />
            Sair
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

import { ChefHat, Heart, BookOpen, Users } from "lucide-react";
import { NavLink } from "../components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../components/ui/sidebar";

const navItems = [
  { title: "Recipes", url: "/", icon: ChefHat },
  { title: "Favorites", url: "/favorites", icon: Heart },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border/40 shadow-2xl shadow-black/5 bg-white md:bg-background/95 backdrop-blur-xl transition-all duration-300">
      <SidebarHeader className="items-center pt-8 pb-6 px-4">
        {!collapsed ? (
          <div className="flex flex-col items-center w-full animate-in fade-in zoom-in-95 duration-500">
            <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600 mb-6 drop-shadow-sm tracking-tight text-center">
              Chefie
            </h2>
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-600 rounded-full blur-[14px] opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-4xl shadow-xl border-4 border-background transform group-hover:scale-[1.03] transition-all duration-300">
                👩‍🍳
              </div>
            </div>
            <div className="text-center mt-5 space-y-1.5">
              <p className="font-bold text-foreground text-[17px] tracking-tight">Theresa Webb</p>
              <div className="bg-orange-500/10 text-orange-500 dark:text-orange-400 text-xs font-semibold px-3 py-1 rounded-full inline-block border border-orange-500/20">
                Master Chef
              </div>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-lg shadow-md mt-2 transition-transform hover:scale-110">
            👩‍🍳
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-3 md:px-4 mt-6">
        <SidebarMenu className="gap-2.5">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="lg" tooltip={item.title}>
                <NavLink
                  to={item.url}
                  end
                  className="group flex w-full items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300 font-medium text-muted-foreground hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400 hover:scale-[1.02]"
                  activeClassName="!bg-gradient-to-r !from-orange-500 !to-amber-500 !text-white !font-semibold shadow-lg shadow-orange-500/25 scale-[1.02] border-none [&>svg]:!text-white"
                >
                  <item.icon className="h-[22px] w-[22px] shrink-0 transition-transform group-hover:scale-110" />
                  {!collapsed && <span className="text-[16px] tracking-wide">{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

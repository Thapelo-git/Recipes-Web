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
    <Sidebar collapsible="icon" className="border-r-0 ">
      <SidebarHeader className="items-center pt-6 pb-4">
        {!collapsed && (
          <>
            <h2 className="text-2xl font-display font-bold italic text-foreground">Chefie</h2>
            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-3xl shadow-lg">
                👩‍🍳
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground text-sm">Theresa Webb</p>
                <p className="text-xs text-muted-foreground italic">Master Chef</p>
              </div>
            </div>
          </>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-sm">
            👩‍🍳
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-3">
        <SidebarMenu className="gap-1.5">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="lg">
                <NavLink
                  to={item.url}
                  end
                  className="rounded-xl px-4 py-2.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                  activeClassName="bg-primary text-primary-foreground shadow-md hover:bg-primary hover:text-primary-foreground"
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span className="font-medium">{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

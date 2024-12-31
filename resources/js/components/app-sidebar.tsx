import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { MenuItemType, useNavigation } from '@/context/NavigationContext'
import { Link } from '@inertiajs/react'
import { ChevronRight } from 'lucide-react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from './ui/collapsible'
import { useTheme } from './theme-provider'
import ApplicationLogo from './application-logo'

export function AppSidebar() {
    const { menuItems } = useNavigation()

    return (
        <Sidebar collapsible="icon">
            <AppSidebarHeader />

            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {menuItems.map((item) => (
                            <AppSidebarMenuItem key={item.title} item={item} />
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

const AppSidebarHeader = () => {
    const { activeMenuItem } = useNavigation()

    return (
        <SidebarHeader className="h-16">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" asChild>
                        <a
                            href="#"
                            className="hover:bg-transparent hover:text-black dark:hover:text-white"
                        >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground ">
                                <ApplicationLogo />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    Qayam Hunza
                                </span>
                                <span className="truncate text-xs">
                                    {activeMenuItem?.title}
                                </span>
                            </div>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}

const AppSidebarMenuItem = ({ item }: { item: MenuItemType }) => {
    const { activeMenuItem } = useNavigation()
    const { theme } = useTheme()

    const isDark = theme === 'dark'

    if (item.children)
        return (
            <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.active}
                className="group/collapsible"
            >
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {item.children?.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.title}>
                                    <SidebarMenuSubButton
                                        asChild
                                        isActive={subItem.active}
                                    >
                                        <Link href={subItem.url}>
                                            <subItem.icon
                                                color={
                                                    subItem.active
                                                        ? '#FFFFFF'
                                                        : isDark
                                                          ? '#FFFFFF'
                                                          : '#000000'
                                                }
                                            />
                                            <span>{subItem.title}</span>
                                        </Link>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        )
    return (
        <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={item == activeMenuItem}>
                <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}

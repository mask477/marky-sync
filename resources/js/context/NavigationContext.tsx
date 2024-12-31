import {
    BookUser,
    Calendar,
    CalendarCheck,
    CalendarDays,
    CalendarMinus,
    CalendarPlus,
    CalendarRange,
    CalendarX2,
    CircleGauge,
    ClipboardList,
    Cog,
    Coins,
    Columns4,
    ConciergeBell,
    Contact,
    DoorClosed,
    DoorOpen,
    HandPlatter,
    Hotel,
    Plus,
    Receipt,
    Sandwich,
    User,
    UserPlus,
    Users,
    UserSquare,
    Utensils,
} from 'lucide-react'
import { createContext, useContext, useEffect, useMemo } from 'react'

export type MenuItemType = {
    title: string
    icon: typeof CircleGauge
    url: string
    active: boolean
    children?: MenuItemType[]
}

const NavigationContext = createContext<{
    menuItems: MenuItemType[]
    activeMenuItem: MenuItemType | undefined
}>({
    menuItems: [],
    activeMenuItem: undefined,
})

export function NavigationContextProvider(props: any) {
    const currentRouteName = route().current() as string

    const menuItems = useMemo<MenuItemType[]>(
        () => [
            {
                title: 'Dashboard',
                icon: CircleGauge,
                url: route('dashboard'),
                active: currentRouteName === 'dashboard',
            },
            {
                title: 'User',
                icon: Contact,
                url: '#',
                active: ['users.index', 'users.create'].includes(
                    currentRouteName
                ),
                children: [
                    {
                        title: 'Create User',
                        icon: Plus,
                        url: route('users.create'),
                        active: currentRouteName === 'users.create',
                    },
                    {
                        title: 'All Users',
                        icon: Users,
                        url: route('users.index'),
                        active: currentRouteName === 'users.index',
                    },
                ],
            },
            {
                title: 'Settings',
                icon: Cog,
                url: route('settings.index'),
                active: ['settings.index'].includes(currentRouteName),
            },
            {
                title: 'Logs',
                icon: ClipboardList,
                url: route('logs.index'),
                active: ['logs.index'].includes(currentRouteName),
            },
        ],
        [currentRouteName]
    )
    const activeMenuItem = useMemo<MenuItemType | undefined>(() => {
        let activeItem: MenuItemType | undefined

        menuItems.map((item) => {
            if (item.active) activeItem = item

            item.children?.map((child) => {
                if (child.active) activeItem = child
            })
        })

        return activeItem
    }, [menuItems])

    const context = {
        menuItems,
        activeMenuItem,
    }

    return (
        <NavigationContext.Provider value={context}>
            {props.children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext
export const useNavigation = () => useContext(NavigationContext)

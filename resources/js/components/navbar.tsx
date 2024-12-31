import React from 'react'
import { MainNav } from './main-nav'
import { UserNav } from './user-nav'
import { ModeToggle } from './mode-toggle'
import { SidebarTrigger } from './ui/sidebar'

export default function Navbar() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <SidebarTrigger />
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    {/* <Search /> */}
                    <ModeToggle />
                    <UserNav />
                </div>
            </div>
        </div>
    )
}

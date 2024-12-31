import { PropsWithChildren, ReactNode, useEffect } from 'react'

import Navbar from '@/components/navbar'
import RootContext from '@/context'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { PageProps } from '@/types'
import Breadcrumbs from '@/components/breadcrumbs'
import AppDashboardHeading from '@/components/app-dashboard-heading'
import { useToast } from '@/hooks/use-toast'

export default function DashboardLayout({
    children,
    title,
    overlays = null,
    success,
    error,
    message,
}: PropsWithChildren<
    PageProps<{
        title?: string
        overlays?: ReactNode
    }>
>) {
    const { toast } = useToast()

    useEffect(() => {
        if (success) {
            toast({
                title: 'Success',
                description: success,
                variant: 'success',
            })
        }
    }, [success])

    useEffect(() => {
        if (error) {
            toast({
                title: 'Error',
                description: error,
                variant: 'destructive',
            })
        }
    }, [error])

    useEffect(() => {
        if (message) {
            toast({
                title: 'Notification',
                description: message,
                variant: 'info',
            })
        }
    }, [message])

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RootContext>
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-full">
                        <Navbar />
                        <Breadcrumbs />
                        {overlays}
                        <div className="p-8 pt-0">
                            <AppDashboardHeading title={title} />
                            {children}
                        </div>
                    </main>
                </SidebarProvider>
            </RootContext>
        </ThemeProvider>
    )
}

import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'
import { PropsWithChildren } from 'react'
import AuthBanner from '@/assets/auth-banner.png'

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex min-h-screen w-[100vw] flex-col items-center justify-center overflow-hidden">
                <div className="grid min-h-screen sm:grid-cols-1 md:grid-cols-2">
                    <div className="col hidden h-full md:block">
                        <img
                            src={AuthBanner}
                            className="h-full w-full object-cover"
                            alt="auth-image"
                        />
                    </div>
                    <div className="relative col flex h-full items-center justify-center">
                        <div className="absolute right-10 top-10">
                            <ModeToggle />
                        </div>
                        <div className="p-5">{children}</div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { useMemo } from 'react'

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const checked = useMemo(() => theme === 'dark', [theme])

    return (
        <div className="flex flex-row justify-between items-center gap-2 toggle">
            <Sun
                className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0"
                color={checked ? '#ffffff' : '#000000'}
            />
            <label
                htmlFor="dark-toggle"
                className="flex items-center cursor-pointer"
            >
                <div className="relative">
                    <input
                        type="checkbox"
                        name="dark-mode"
                        id="dark-toggle"
                        className="checkbox hidden"
                        checked={theme === 'dark'}
                        onChange={(e) =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                        }
                    />
                    <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
                    <div
                        className={`dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition ${
                            checked ? 'translate-x-[100%]' : ''
                        }`}
                    ></div>
                </div>
            </label>
            <Moon
                className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0"
                color={checked ? '#ffffff' : '#000000'}
            />
        </div>
    )
}

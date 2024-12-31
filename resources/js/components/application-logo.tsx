import { useMemo } from 'react'
import { useTheme } from './theme-provider'
import LogoLight from '@/assets/logo-light.png'
import LogoDark from '@/assets/logo-dark.png'
import LogoDark2 from '@/assets/logo-dark-2.png'

export default function ApplicationLogo({
    width = 150,
    height = 150,
}: {
    width?: number | string
    height?: number | string
}) {
    const { theme } = useTheme()

    const LoginFormLogo = useMemo(
        () => (theme == 'light' ? LogoLight : LogoDark2),
        [theme]
    )

    return <img src={LoginFormLogo} {...{ width, height }} />
}

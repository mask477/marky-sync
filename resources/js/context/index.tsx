import { NavigationContextProvider } from './NavigationContext'

export default function RootContext(props: any) {
    return (
        <NavigationContextProvider>{props.children}</NavigationContextProvider>
    )
}

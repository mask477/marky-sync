import { useNavigation } from '@/context/NavigationContext'

export default function AppDashboardHeading({ title }: { title?: string }) {
    const { activeMenuItem } = useNavigation()

    return (
        <div className="flex items-center justify-between space-y-2 mb-6">
            <h2 className="text-3xl font-bold tracking-tight">
                {title ? title : activeMenuItem?.title}
            </h2>
        </div>
    )
}

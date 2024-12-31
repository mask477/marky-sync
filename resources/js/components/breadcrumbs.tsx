import { PageProps } from '@/types'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from './ui/breadcrumb'

import { usePage } from '@inertiajs/react'
import { Fragment } from 'react/jsx-runtime'

export default function Breadcrumbs() {
    const { props } = usePage<PageProps>()
    const { breadcrumbs } = props

    return (
        <div className="px-10 py-4">
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <Fragment key={breadcrumb.url}>
                            <BreadcrumbItem>
                                {breadcrumb.is_current_page ? (
                                    <BreadcrumbPage>
                                        {breadcrumb.title}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={breadcrumb.url}>
                                        {breadcrumb.title}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {index < breadcrumbs.length - 1 && (
                                <BreadcrumbSeparator />
                            )}
                        </Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

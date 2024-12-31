import { SortingState } from '@tanstack/react-table';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    role: 'admin' | 'subadmin' | 'agent';
}

export interface BreadcrumbType {
    title: string;
    url: string;
    is_current_page: boolean;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    currentRouteName: string;
    breadcrumbs: BreadcrumbType[];
    success?: string;
    error?: string;
    message?: string;
};

export type DataTablePageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = PageProps<T> & {
    sorting: SortingState;
    search?: string;
};

export type SideNavItemType = {
    title: string;
    icon: string;
    url: string;
    active: boolean;
    children?: SideNavItemType[];
};

interface Model {
    createdBy: User;
    updatedBy: User;
    createdAt: Date;
    updatedAt: Date;
}

export interface ResourceCollection<T> {
    data: T[];
}

export interface PaginationMetaLink {
    active: boolean;
    label: string;
    url: string;
}

export type PaginationMeta = {
    current_page: number;
    from: number;
    last_page: number;
    links: PaginationMetaLink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
};

export interface PaginatedResource<T> {
    data: T[];
    links: {
        first: string;
        last: string;
        next: string | null;
        prev: string | null;
    };
    meta: PaginationMeta;
}

export type QueryParams<T> = {
    search?: string;
    sort_field?: keyof T;
    sort_direction?: 'asc' | 'desc';
    page_size?: number;
};

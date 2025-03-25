import { FC, PropsWithChildren } from 'react'
import { LoadingEllipsis } from './LoadingEllipsis'

interface Props {
    variant?:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'white'
    | 'secondaryGray'
    | 'secondaryWhite'
    | 'secondaryGreen'
    type?: 'button' | 'submit'
    className?: string
    disabled?: boolean
    loading?: boolean
    onClick?: () => void
    id?: string
    href?: string
}

const VARIANTS = {
    primary:
        'w-full h-9 flex items-center justify-center rounded bg-primary-green text-sm font-medium text-white shadow-sm hover:bg-primary-green-transparent-75 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2',
    warning:
        'w-full h-9 flex items-center justify-center rounded bg-[#FF8E00] text-sm font-medium text-white shadow-sm hover:bg-[#FF9A1F] focus:outline-none focus:ring-2 focus:ring-[#FF9A1F]focus:ring-offset-2',
    danger:
        ' w-full h-9 flex items-center justify-center rounded bg-primary-red text-sm font-medium text-white shadow-sm hover:bg-primary-red-transparent-75 focus:outline-none focus:ring-2 focus:ring-primary-red focus:ring-offset-2',
    white:
        'w-full h-9 flex items-center justify-center rounded bg-white text-sm font-medium text-primary-green shadow-sm hover:bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2',
    secondaryGray:
        'w-full h-9 flex items-center justify-center rounded text-sm font-medium text-[#606060] border border-[#606060] shadow-sm hover:bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#606060] focus:ring-offset-2',
    secondaryWhite:
        'w-full h-9 flex items-center justify-center rounded text-sm font-medium text-[#FFFFFF] border border-[#FFFFFF] shadow-sm hover:bg-white/25 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] focus:ring-offset-2',
    secondaryGreen:
        'w-full h-9 flex items-center justify-center rounded text-sm font-medium text-primary-green border border-primary-green shadow-sm hover:bg-[] focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2',
}

export const Button: FC<PropsWithChildren<Props>> = ({
    children,
    variant = 'primary',
    type = 'button',
    className = '',
    loading = false,
    disabled = false,
    onClick = () => { },
    id,
    href,
}) => {
    const componentClass = `${VARIANTS[variant] || ''} ${className} ${disabled &&
        'cursor-not-allowed bg-stone-300 hover:bg-stone-300 hover:opacity-75'
        } ${loading && 'cursor-not-allowed'}`

    return href ? (
        <a
            href={href}
            className={componentClass + (disabled ? ' pointer-events-none' : '')}
            onClick={onClick}
            id={id}
        >
            {children}
        </a>
    ) : (
        <button
            type={type}
            className={componentClass}
            onClick={onClick}
            disabled={disabled || loading}
            id={id}
        >
            {loading ? <LoadingEllipsis variant='secondary' /> : children}
        </button>
    )
}

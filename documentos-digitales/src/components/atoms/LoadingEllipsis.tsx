import { FC } from 'react'

interface Props {
    variant?: 'primary' | 'secondary'
}

const CLASS_VARIANTS = {
    primary: 'w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce',
    secondary: 'w-2.5 h-2.5 bg-white rounded-full animate-bounce',
}

export const LoadingEllipsis: FC<Props> = ({ variant = 'primary' }) => {
    const classForVariant = CLASS_VARIANTS[variant] || ''
    return (
        <div className="flex">
            <div
                className={`${classForVariant} mr-1`}
                style={{ animationDelay: '0.1s' }}
            ></div>
            <div
                className={`${classForVariant} mr-1`}
                style={{ animationDelay: '0.2s' }}
            ></div>
            <div
                className={`${classForVariant}`}
                style={{ animationDelay: '0.3s' }}
            ></div>
        </div>
    )
}

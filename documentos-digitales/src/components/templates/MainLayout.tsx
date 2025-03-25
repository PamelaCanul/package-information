import Head from "next/head"
import { FC, PropsWithChildren } from "react"

interface Props {
    title?: string
}

const Layout: FC<PropsWithChildren<Props>> = ({
    title = 'tuConta',
    children,
}) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta name='robots' content='noindex' />
            </Head>
            <main className="min-h-screen">{children}</main>
        </>
    )
}

export default Layout
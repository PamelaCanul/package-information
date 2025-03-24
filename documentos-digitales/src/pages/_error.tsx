import { NextPage, NextPageContext } from "next"
import Head from "next/head"

interface ErrorProps {
    statusCode: number | null
}

const ErrorPage: NextPage<ErrorProps> = ({ }) => {

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-blue-600 text-white'>
            <Head>
                <title>¡Página no encontrada!</title>
            </Head>
            <div className='flex flex-col justify-center items-center max-w-md p-4'>
                <h1 className='text-7xl md:text-9xl font-bold mb-8'>¡Ups!</h1>
                <p className='text-md md:text-lg text-center'>
                    ¡Lamentamos las molestias! Estamos teniendo algunos inconvenientes en
                    este momento. Por favor, intenta actualizar la página, o puedes volver
                    a nuestra página de inicio para comenzar de nuevo.
                </p>
            </div>
        </div>
    )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
    const statusCode: number = res?.statusCode ?? err?.statusCode ?? 404
    return { statusCode }
}

export default ErrorPage

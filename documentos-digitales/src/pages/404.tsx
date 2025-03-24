import { NextPage } from "next"
import Head from "next/head"

const Custom404: NextPage = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white">
            <Head>
                <title>¡Página no encontrada!</title>
            </Head>
            <div className="flex flex-col justify-center items-center max-w-md p-4">
                <h1 className="text-7xl md:text-9xl font-bold mb-8">404</h1>
                <p className="text-md md:text-lg text-center">
                    ¡Ups! No encontramos la página que buscas
                </p>
            </div>
        </div>
    )
}

export default Custom404

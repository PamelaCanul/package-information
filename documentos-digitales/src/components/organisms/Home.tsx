import { FC, useState } from "react"
import Card from "../atoms/Cards"
import ListItem from "../atoms/List"
import { Button } from "../atoms/Button"
import Image from "next/image"
import { ArrowDownCircleIcon, CircleStackIcon, PencilSquareIcon } from "@heroicons/react/24/outline"
import PackageList from "../molecules/PackageList"
import { useGetPackagesQuery } from "../../services/packageService";
import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('antd/lib/modal'), { ssr: false });
const Spin = dynamic(() => import('antd/lib/spin'), { ssr: false });

type Props = {
    message?: string
}

const Home: FC<Props> = () => {
    const [visible, setVisible] = useState(false);
    const { isLoading, error } = useGetPackagesQuery(undefined);
    const handleOpen = () => setVisible(true);
    const handleClose = () => setVisible(false);
    return (
        <div className="h-screen flex flex-col items-center justify-start p-6 space-y-6 bg-white overflow-y-auto overflow-x-hidden scroll-smooth">
            <div className="flex flex-col items-center -space-y-0.5 text-gray-700">
                <div className="w-[360px] aspect-[2/1] relative">
                    <Image
                        src='/img/logo.png'
                        alt='tu conta'
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="text-center">
                    <p className="text-md font-semibold mt-1">¡Nuevo servicio!</p>
                    <p className="text-md max-w-md mt-0.5">Encárgate de tu negocio, nosotros de tu contabilidad.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full max-w-5xl">
                <Card iconType="calculator" title="Hacemos tu contabilidad mensual" />
                <Card iconType="percentage" title="Calculamos tus impuestos" />
                <Card iconType="invoice" title="Presentamos tus declaraciones SAT" />
                <Card iconType="hand" title="Cálculo, timbrado y envío de nómina" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl">
                <div className="p-4 w-full h-full flex justify-center items-center">
                    <iframe
                        className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-md"
                        src="https://www.youtube.com/embed/nA5jl_Lo5kU"
                        title="tu Conta video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="p-4">
                    <p className="text-lg font-bold text-gray-900 ml-10">Beneficios</p>
                    <ListItem title="Automático" description="Ahorra tiempo al eliminar la tarea de enviar facturas a tu contados ¡El proceso es automático!" />
                    <ListItem title="Servicio Oportuno" description="Comunicación más fácil y efectiva con tu contador persona." />
                    <ListItem title="Simplicidad" description="Información contable en tiempo real." />
                    <ListItem title="Confiable" description="Cálculos hechos por uno de nuestros contadores expertos asignado especialmente a tu negocio." />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-5xl bg-indigo-700 p-6 rounded-lg text-center">
                <div className="flex flex-col items-center text-white space-y-0.5">
                    <PencilSquareIcon className="w-12 h-12 text-lime-400 transition-colors duration-300 hover:text-lime-500" />
                    <p className="text-lime-500 font-bold text-lg">Paso 1</p>
                    <p>Agrega tu FIEL</p>
                </div>
                <div className="flex flex-col items-center text-white space-y-0.5">
                    <CircleStackIcon className="w-12 h-12 text-lime-400 transition-colors duration-300 hover:text-lime-500" />
                    <p className="text-lime-500 font-bold text-lg">Paso 2</p>
                    <p>Sincroniza tus cuentas bancarias</p>
                </div>
                <div className="flex flex-col items-center text-white space-y-0.5">
                    <ArrowDownCircleIcon className="w-12 h-12 text-lime-400 transition-colors duration-300 hover:text-lime-500" />
                    <p className="text-lime-500 font-bold text-lg">Paso 3</p>
                    <p>Recibe mensualmente tu declaración de impuestos</p>
                </div>
            </div>


            <div className="text-center w-full max-w-3xl text-gray-700 text-base md:text-lg px-4 md:px-20 lg:px-40">
                <p className="font-semibold">
                    ¿Quieres cambiar a Tu Conta? Nosotros nos encargamos de llevar a cabo la transacción de toda tu contabilidad hasta el día de hoy.
                </p>
            </div>

            <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center gap-6 px-4 md:px-20 lg:px-72">
                <Button className="w-full md:w-1/2 bg-lime-500 rounded-full py-2 px-6 flex items-center justify-center" onClick={handleOpen}>
                    Ver Paquetes
                </Button>
                <Button className="w-full md:w-1/2 bg-indigo-800 rounded-full py-2 px-4 flex items-center justify-center ">
                    Agenda una cita con un contador experto
                </Button>
            </div>
            <Modal
                open={visible}
                onCancel={handleClose}
                footer={null}
                centered
                width={{
                    xs: '95%',
                    sm: '90%',
                    md: '85%',
                    lg: '80%',
                    xl: '75%',
                    xxl: '70%',
                }}
            >
                {isLoading && <Spin size="large" />}
                {error && <p>Error al cargar los paquetes.</p>}
                <PackageList />
            </Modal>
        </div>
    );
}

export default Home; 
import { FC } from "react"
import Card from "../atoms/Cards"
import ListItem from "../atoms/List"
import { Button } from "../atoms/Button"

type Props = {
    message?: string
}

export const Home: FC<Props> = ({
}) => {
    return (
        <div className="flex flex-col items-center p-2 space-x-2">
            <div className="p-4 space-x-2 text-gray-800">
                <p>El logo va aquí</p>
                <div className="text-center">
                    <p>¡Nuevo servicio!</p>
                    <p>Encárgate de tu negocio, nosotros de tu contabilidad.</p>
                </div>

            </div>
            <div className="flex flex-row items-center p-2 space-x-2 text-gray-800">
                <Card title="Hacemos tu contabulidad mensual" />
                <Card title="Calculamos tus impuestos" />
                <Card title="Presentamos tus declaraciones SAT" />
                <Card title="Cálculo, timbrado y envio de nómina" />
            </div>
            <div className="flex flex-row items-center p-2 space-x-8 text-gray-800">
                <div>
                    <p>El video va aquí</p>
                </div>
                <div>
                    <p className="text-md font-bold text-gray-900">Beneficios</p>
                    <ListItem title="Automático" description="Ahorra tiempo al eliminar la tarea de enviar facturas a tu contados ¡El proceso es automático!" />
                    <ListItem title="Servicio Oportuno" description="Comunicación más fácil y efectiva con tu contador persona." />
                    <ListItem title="Simplicidad" description="Información contable en tiempo real." />
                    <ListItem title="Confiable" description="Cálculos hechos por uno de nuestros contadores expertos asignado especialmente a tu negocio." />
                </div>
            </div>
            <div className="flex flex-row items-start p-2 space-x-2 bg-indigo-700">
                <div className="p-3 text-center">
                    <p>Icono de lapiz</p>
                    <p className="text-lime-500 text-md font-bold">Paso 1</p>
                    <p className="text-white text-sm">Agrega tu FIEL</p>
                </div>
                <div className="p-3 text-center">
                    <p>Icono de base de datos</p>
                    <p className="text-lime-500 text-md font-bold">Paso 2</p>
                    <p className="text-white text-sm">Sincroniza tus cuentas bancarias</p>
                </div>
                <div className="p-3 text-center">
                    <p>Icono de descarga de documento</p>
                    <p className="text-lime-500 text-md font-bold">Paso 3</p>
                    <p className="text-white text-sm">Recibe mensualmente tu declaración de impuestos</p>
                </div>
            </div>
            <div className="text-center p-3">
                <p className="text-sm text-gray-800">¿Quiere cambiar a tu Conta? Nosotros nos encargamos de llevar a cabo la transacción de toda tu contabilidad hasta el día de hoy.</p>
            </div>
            <div className="flex flex-row items-start p-2 space-x-2">
                <Button className="bg-lime-500">Ver Paquetes</Button>
                <Button className="bg-indigo-800">Agenda una cita con un contador experto</Button>
            </div>
        </div>
    )
}

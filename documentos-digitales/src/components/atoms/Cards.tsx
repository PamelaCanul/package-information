import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FC, PropsWithChildren } from "react";

interface Props {
    iconType?: IconProp,
    title: string,
}

const Card: FC<PropsWithChildren<Props>> = ({

    title
}) => (
    <div className="p-5 border rounded-lg shadow-lg hover:shadow-2xl transition">
        {/* Agregar el tipo de icono  */}
        <h3 className="text-lg text center">{title}</h3>
    </div>
);
export default Card;
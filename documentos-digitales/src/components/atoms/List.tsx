
import { FC, PropsWithChildren } from "react";


interface Props {
    title: string,
    description: string
}

const ListItem: FC<PropsWithChildren<Props>> = ({
    title,
    description
}) => (
    <div className="flex items-start space-x-3 p-2 border-b border-gray-200">
        {/* <FontAwesomeIcon icon={faCircleCheck} style={{ "--fa-primary-color": "#01ad15", "--fa-secondary-color": "#110345", "--fa-secondary-opacity": "1", }} /> */}
        <div>
            <h3 className="font-bold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>

)

export default ListItem;

import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { FC, PropsWithChildren } from "react";

interface Props {
    title: string;
    description: string;
}

const ListItem: FC<PropsWithChildren<Props>> = ({ title, description }) => (
    <div className="flex items-start space-x-3 p-2">
        <CheckCircleIcon className="w-5 h-5 text-lime-500 flex-shrink-0 mt-1" />
        <div className="flex-1">
            <p className="font-bold text-gray-800 text-sm">{title}</p>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
);

export default ListItem;

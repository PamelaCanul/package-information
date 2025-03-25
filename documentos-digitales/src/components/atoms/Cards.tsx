import { FC, PropsWithChildren } from "react";
import { CalculatorIcon, DocumentCurrencyDollarIcon, DocumentTextIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

interface Props {
    iconType?: string;
    title: string;
}

const Card: FC<PropsWithChildren<Props>> = ({ iconType, title }) => {
    const renderIcon = () => {
        switch (iconType) {
            case "calculator":
                return <CalculatorIcon className="w-24 h-24 text-indigo-600 transition-colors duration-300 group-hover:text-lime-500 active:text-lime-500" />;
            case "percentage":
                return <DocumentCurrencyDollarIcon className="w-24 h-24 text-indigo-600 transition-colors duration-300 group-hover:text-lime-500 active:text-lime-500" />;
            case "invoice":
                return <DocumentTextIcon className="w-24 h-24 text-indigo-600 transition-colors duration-300 group-hover:text-lime-500 active:text-lime-500" />;
            case "hand":
                return <PaperAirplaneIcon className="w-24 h-24 text-indigo-600 transition-colors duration-300 group-hover:text-lime-500 active:text-lime-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="p-5 rounded-lg border border-gray-300 shadow-lg hover:shadow-2xl transition flex flex-col items-center space-y-3 text-center group active:shadow-lg">
            {renderIcon()}
            <h3 className="text-xs font-semibold text-gray-800">{title}</h3>
        </div>
    );
};

export default Card;

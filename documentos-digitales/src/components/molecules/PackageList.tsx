import React from 'react';
import { useGetPackagesQuery } from '@/services/packageService';
import { Package } from '@/lib/types/packages';
import { Button } from '../atoms/Button';

const PackageModal: React.FC = () => {
    const { data: packages } = useGetPackagesQuery(undefined);

    return (
        <div>
            {packages && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 text-center">
                    {packages.map((pkg: Package) => (
                        <div key={pkg.id} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-6 bg-[#d9eaf3] border border-[#d9eaf3] rounded-lg">
                            <p className="text-[#387ab2] font-semibold text-sm">{pkg.name}</p>
                            <hr className="border-[#acd0e4]" />
                            <div className="flex items-center space-x-2 pt-4">
                                <p>$</p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{pkg.price}</h5>
                                <p>+IVA/mes</p>
                            </div>
                            <p className="mb-3 font-normal text-gray-700">{pkg.description}</p>
                            <Button className="w-full mt-6 bg-[#387ab2] text-white rounded-full py-2">Elegir</Button>
                        </div>
                    ))}
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-6 bg-[#d9eaf3] border border-[#d9eaf3] rounded-lg">
                        <p className="text-[#387ab2] font-semibold text-sm">Select</p>
                        <hr className="border-[#acd0e4]" />
                        <div className="flex items-center space-x-2 pt-2">
                            <h4 className="mb-2 text- font-bold tracking-tight text-gray-900">Contactanos para hacer un paquete a tus necesidades</h4>
                        </div>
                        <p className="mb-3 font-normal text-gray-700">+300 movimientos bancarios al mes</p>
                        <Button className="w-full bg-[#387ab2] text-white rounded-full py-2">Cotizar paquete</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackageModal;

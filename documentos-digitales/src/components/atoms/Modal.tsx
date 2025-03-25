import { Fragment, FC, PropsWithChildren } from 'react'
// import { Dialog, Transition } from '@headlessui/react'

interface Props {
    open: boolean
    onClose?: () => void
    className?: string
}

export const Modal: FC<PropsWithChildren<Props>> = ({
    // children,
    // open,
    // onClose = () => console.log(),
    // className = 'flex min-h-full items-center justify-center',
}) => {
    return (
        <></>
        // <Transition.Root show={open} as={Fragment}>
        //     <Dialog as='div' className='relative z-40' onClose={onClose}>
        //         <div className='relative z-30'>
        //             <Transition.Child
        //                 as='div'
        //                 enter='ease-out duration-300'
        //                 enterFrom='opacity-0'
        //                 enterTo='opacity-100'
        //                 leave='ease-in duration-200'
        //                 leaveFrom='opacity-100'
        //                 leaveTo='opacity-0'
        //             >
        //                 <div
        //                     className='fixed inset-0 bg-black bg-opacity-75 transition-opacity'
        //                     onClick={onClose}
        //                 />
        //             </Transition.Child>

        //             <div className='fixed inset-0 z-10 overflow-y-auto webkit-overflow-scrolling-touch'>
        //                 <div className={`sm:items-center sm:p-0 ${className}`}>
        //                     <Transition.Child
        //                         as='div'
        //                         enter='ease-out duration-300'
        //                         enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
        //                         enterTo='opacity-100 translate-y-0 sm:scale-100'
        //                         leave='ease-in duration-200'
        //                         leaveFrom='opacity-100 translate-y-0 sm:scale-100'
        //                         leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
        //                     >
        //                         <Dialog.Panel>{children}</Dialog.Panel>
        //                     </Transition.Child>
        //                 </div>
        //             </div>
        //         </div>
        //     </Dialog>
        // </Transition.Root>
    )
}

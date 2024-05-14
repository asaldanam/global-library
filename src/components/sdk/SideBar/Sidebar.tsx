'use client';

import { Stories } from "@/components/features/Editor/Editor";
import {
    Package2
} from "lucide-react";
import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

type SidebarProps = {
    title: ReactNode
}

export function Sidebar(props: PropsWithChildren<SidebarProps>) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        {props.title}
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            {props.children}
                        </nav>
                    </div>
                </div>
            </div>
            {/* Resto del componente se mantiene igual... */}
        </div>
    )
};

// export function Sidebar() {
//     return (
//         <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
//             <div className="hidden border-r bg-muted/40 md:block">
//                 {<div className="flex h-full max-h-screen flex-col gap-2">
//                     <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
//                         <Link href="/" className="flex items-center gap-2 font-semibold">
//                             <Package2 className="h-6 w-6" />
//                             <span className="">Nuevo relato</span>
//                         </Link>
//                     </div>
//                     <div className="flex-1">
//                         <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
//                             <Link
//                                 href="#"
//                                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//                             >
//                                 <Home className="h-4 w-4" />
//                                 Dashboard
//                             </Link>
//                             {/* <Link
//                                 href="#"
//                                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//                             >
//                                 <ShoppingCart className="h-4 w-4" />
//                                 Orders
//                             </Link>
//                             <Link
//                                 href="#"
//                                 className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
//                             >
//                                 <Package className="h-4 w-4" />
//                                 Products{" "}
//                             </Link>
//                             <Link
//                                 href="#"
//                                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//                             >
//                                 <Users className="h-4 w-4" />
//                                 Customers
//                             </Link>
//                             <Link
//                                 href="#"
//                                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
//                             >
//                                 <LineChart className="h-4 w-4" />
//                                 Analytics
//                             </Link> */}
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-col">
//                 {/* <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
//                     <div className="flex items-center">
//                         <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
//                     </div>
//                     <div
//                         className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
//                     >
//                         <div className="flex flex-col items-center gap-1 text-center">
//                             <h3 className="text-2xl font-bold tracking-tight">
//                                 You have no products
//                             </h3>
//                             <p className="text-sm text-muted-foreground">
//                                 You can start selling as soon as you add a product.
//                             </p>
//                             <Button className="mt-4">Add Product</Button>
//                         </div>
//                     </div>
//                 </main> */}
//             </div>
//         </div>
//     )
// };

export default Sidebar; 
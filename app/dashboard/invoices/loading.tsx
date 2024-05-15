import {InvoicesTableSkeleton} from '@/app/ui/skeletons';
import {lusitana} from "@/app/ui/fonts";

export default function Loading() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>
            <InvoicesTableSkeleton/>
        </div>
    );
}

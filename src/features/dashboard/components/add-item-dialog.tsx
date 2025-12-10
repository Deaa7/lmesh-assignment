import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export default function AddItemDialog() {
    return <Dialog>
        <DialogTrigger asChild>
            <button className="flex-shrink-0">
                <Plus size={16} className="sm:w-5 sm:h-5 text-blue-800"/>
            </button>
        </DialogTrigger>
        <DialogContent className="w-[90%] sm:w-full max-w-md">
            <DialogTitle className="text-base sm:text-lg">
                Add new Item
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm">this dialog is used to add a new item</DialogDescription>
        </DialogContent>
    </Dialog>
}
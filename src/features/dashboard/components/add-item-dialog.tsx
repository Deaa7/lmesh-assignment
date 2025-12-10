import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export default function AddItemDialog() {
    return <Dialog>
        <DialogTrigger asChild>
            <button>
                <Plus size={20}  className="text-blue-800"/>
            </button>
        </DialogTrigger>
        <DialogContent>
            <DialogTitle>
                Add new Item
            </DialogTitle>
            <DialogDescription>this dialog is used to add a new item</DialogDescription>
        </DialogContent>
    </Dialog>
}
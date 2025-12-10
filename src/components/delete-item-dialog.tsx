import { Check, Trash2, TriangleAlert, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { useDashboardStore } from "@/store/dashboard-store";
import { toast } from "sonner";
import { useState } from "react";

export default function DeleteItemDialog({ itemId }: { itemId: string }) {
  const [open, setOpen] = useState(false);

  const removeItem = useDashboardStore(
    (state) => state.removeItemFromAssignment
  );
  const DeleteItemHandler = () => {
    removeItem(itemId);
    toast.success("assignment deleted successfully");
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="mt-[2%] flex-shrink-0">
            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 text-gray-500 cursor-pointer" />
          </button>
        </DialogTrigger>
        <DialogContent className="w-[90%] sm:w-full max-w-md">
          <DialogHeader className="flex flex-col justify-center items-center">
            <TriangleAlert className="text-gray-500 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base font-semibold mt-2">Warning</span>
          </DialogHeader>
          <DialogDescription className="text-center text-gray-500 text-xs sm:text-sm font-semibold">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </DialogDescription>

          <DialogFooter className="flex! justify-center! items-center gap-2 sm:gap-4">
            <DialogClose asChild>
              <button className="flex justify-center text-gray-600 gap-1 items-center bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold">
                <X size={14} className="sm:w-4 sm:h-4" />
                Cancel
              </button>
            </DialogClose>
            <button
              className="flex justify-center text-white gap-1 items-center bg-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold"
              onClick={DeleteItemHandler}>
              <Check size={14} className="sm:w-4 sm:h-4" />
              Accept
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

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
          <button className=" mt-[2%]">
            <Trash2 className="size-4 ml-2 text-gray-500 cursor-pointer" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-100!">
          <DialogHeader className="flex flex-col justify-center items-center">
            <TriangleAlert className="text-gray-500" />
            Warning
          </DialogHeader>
          <DialogDescription className="text-center text-gray-500 text-xs font-semibold">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </DialogDescription>

          <DialogFooter className="flex!  justify-center! items-center gap-4">
            <DialogClose asChild>
              <button className="flex justify-center text-gray-600 gap-1 items-center bg-gray-100 px-4 py-2 rounded-full text-xs font-bold ">
                <X size={16} />
                Cancel
              </button>
            </DialogClose>
            <button
              className="flex justify-center text-white gap-1 items-center bg-blue-700 px-4 py-2 rounded-full text-xs font-bold"
              onClick={DeleteItemHandler}>
              <Check size={16} />
              Accept
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

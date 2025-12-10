import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export default function AddAssignmentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-2 sm:px-3 md:px-4 flex justify-center gap-1 sm:gap-2 items-center py-1.5 sm:py-2 rounded-full bg-blue-700 text-white text-xs sm:text-sm md:text-base">
          <Plus size={16} className="sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">New Assignment</span>
          <span className="sm:hidden">New</span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[90%] sm:w-full max-w-md">
        <DialogTitle className="text-base sm:text-lg">Add new Assignment</DialogTitle>
        <DialogDescription className="text-xs sm:text-sm">
          this dialog is used to add a new assignment
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

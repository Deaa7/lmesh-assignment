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
        <button className="px-4 flex justify-center gap-2 items-center py-2 rounded-full bg-blue-700 text-white">
          <Plus size={20} />
          New Assignment
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add new Assignment</DialogTitle>
        <DialogDescription>
          this dialog is used to add a new assignment
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

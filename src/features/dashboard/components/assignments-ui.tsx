import { useDashboardStore } from "@/store/dashboard-store";
import type { assignment } from "@/types/types";
import ItemsUI from "./items-ui";
import AddItemDialog from "./add-item-dialog";

export default function AssignmentsUI() {
  const assignments: assignment[] = useDashboardStore(
    (state) => state.assignments
  );
  return (
    <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
      {assignments.map((assignment: assignment , index) => (
        <div key={"assignment-"+index.toString()} className="border-b-2 border-b-gray-300 pb-1 mx-2 sm:mx-4 md:mx-6 lg:mx-10">
          <div className="flex justify-between items-center gap-2">
            <div className="flex-1 min-w-0">
              <span className="text-black font-bold text-xs sm:text-sm md:text-base lg:text-base mx-1 sm:mx-2">
                {assignment.title}
              </span>
              <span className="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-600 font-semibold">
                {assignment.metadata}
              </span>
            </div>
            <AddItemDialog />
          </div>
          <ItemsUI items={assignment.items} />
        </div>
      ))}
    </div>
  );
}

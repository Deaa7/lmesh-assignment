import { useDashboardStore } from "@/store/dashboard-store";
import type { assignment } from "@/types/types";
import ItemsUI from "./items-ui";
import AddItemDialog from "./add-item-dialog";

export default function AssignmentsUI() {
  const assignments: assignment[] = useDashboardStore(
    (state) => state.assignments
  );
  return (
    <div className="space-y-5">
      {assignments.map((assignment: assignment) => (
        <div className="border-b-2 border-b-gray-300 pb-1  mx-10">
          <div className="flex justify-between">
            <div>
              <span className="text-black font-bold mx-2">
                {assignment.title}
              </span>
              <span className="text-sm text-gray-600 font-semibold">
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

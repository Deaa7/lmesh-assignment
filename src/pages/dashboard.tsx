import MonthsOfYearUI from "@/features/dashboard/components/months-of-year-ui";
import AssignmentsUI from "@/features/dashboard/components/assignments-ui";
import ColorLabels from "@/features/dashboard/components/color-labels";
import AddAssignmentDialog from "@/features/dashboard/components/add-assignment-dialog";

export default function Dashboard() {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center flex-wrap mt-5">
        <div>
          <h1 className="text-2xl font-bold"> DOE Jane </h1>
          <p className="text-sm text-gray-600 font-semibold">Workload</p>
        </div>
        <AddAssignmentDialog />
      </div>
      <MonthsOfYearUI />

      <div
        id="assignments-container"
        className=" mt-5 max-h-[400px] overflow-y-auto">
        <AssignmentsUI />
      </div>
      <ColorLabels />
    </div>
  );
}

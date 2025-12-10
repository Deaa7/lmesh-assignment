import { useDashboardStore } from "@/store/dashboard-store";
import MonthUI from "@/components/ui/month-ui";

export default function MonthsOfYearUI() {
  // Subscribe to computed values directly from state - this triggers re-render when assignments change
  const totalStuffNumber = useDashboardStore((state) =>
    state.assignments.reduce(
      (acc, assignment) =>
        acc +
        assignment.items.reduce(
          (acc, item) => acc + (item.isFictive ? 0 : item.StuffNumber),
          0
        ),
      0
    )
  );
 

  return (
    <div className="flex justify-center gap-2 border-b-2 border-b-gray-300 pb-3 ">
      {Array.from({ length: 12 }, (_, index) => (
        <MonthUI
          key={index}
          month={index}
          stuffNumber={totalStuffNumber}
        />
      ))}
    </div>
  );
}

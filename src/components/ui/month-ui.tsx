export default function MonthUI({
  month = 0,
  stuffNumber = 0,
}: {
  month: number;
  stuffNumber: number;
}) {
  const currentMonth: number = new Date().getMonth();

  const monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const isCurrentMonth = month == currentMonth;
  return (
    <div className={`items-center flex flex-col gap-2 justify-center   `}>
      <p className=" text-gray-500 font-semibold text-xs">
        {monthNamesShort[month]}
      </p>
      <p
        className={`py-1 px-8 rounded-sm ${
          isCurrentMonth
            ? stuffNumber <= 0
              ? "bg-red-200"
              : stuffNumber <= 1
              ? "bg-yellow-200"
              : "bg-blue-200"
            : "bg-red-200"
        }`}>
        {isCurrentMonth ? stuffNumber : 0}
      </p>
    </div>
  );
}

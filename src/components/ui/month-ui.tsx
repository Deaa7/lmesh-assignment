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
    <div className={`items-center flex flex-col gap-1 sm:gap-1.5 md:gap-2 justify-center min-w-[40px] sm:min-w-[50px] md:min-w-[60px]`}>
      <p className="text-gray-500 font-semibold text-[10px] sm:text-xs md:text-xs">
        {monthNamesShort[month]}
      </p>
      <p
        className={`py-0.5 sm:py-1 px-3 sm:px-4 md:px-6 lg:px-8 rounded-sm text-[10px] sm:text-xs md:text-sm ${
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

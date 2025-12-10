export default function ColorLabels() {
  return (
    <div className="mt-3 sm:mt-4 md:mt-8 lg:mt-15 mx-2 sm:mx-4 md:mx-6 lg:mx-10 flex justify-start gap-2 sm:gap-3 md:gap-4 flex-wrap">
      <div className="flex justify-center items-center gap-1 sm:gap-2">
        <div className="w-8 h-5 sm:w-10 sm:h-6 md:w-12 md:h-7 rounded-md bg-gray-200"></div>
        <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700">Out</p>
      </div>

      <div className="flex justify-center items-center gap-1 sm:gap-2">
        <div className="w-8 h-5 sm:w-10 sm:h-6 md:w-12 md:h-7 rounded-lg bg-green-200"></div>
        <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700">Full loaded</p>
      </div>

      <div className="flex justify-center items-center gap-1 sm:gap-2">
        <div className="w-8 h-5 sm:w-10 sm:h-6 md:w-12 md:h-7 rounded-lg bg-yellow-200"></div>
        <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700">Underloaded</p>
      </div>

      <div className="flex justify-center items-center gap-1 sm:gap-2">
        <div className="w-8 h-5 sm:w-10 sm:h-6 md:w-12 md:h-7 rounded-lg bg-blue-200"></div>
        <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700">Overloaded</p>
      </div>

      <div className="flex justify-center items-center gap-1 sm:gap-2">
        <div className="w-8 h-5 sm:w-10 sm:h-6 md:w-12 md:h-7 rounded-lg bg-red-200"></div>
        <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700">No workload</p>
      </div>
    </div>
  );
}

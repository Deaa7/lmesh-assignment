export default function ColorLabels() {
  return (
    <div className=" mt-15  mx-10 flex justify-start gap-4">
      <div className="flex justify-center items-center gap-2">
        <div className="w-12 h-7 rounded-md bg-gray-200"></div>
        <p className="text-sm font-semibold text-gray-700">Out</p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="w-12 h-7 rounded-lg bg-green-200"></div>
        <p className="text-sm font-semibold text-gray-700">Full loaded</p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="w-12 h-7 rounded-lg bg-yellow-200"></div>
        <p className="text-sm font-semibold text-gray-700">Underloaded</p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="w-12 h-7 rounded-lg bg-blue-200"></div>
        <p className="text-sm font-semibold text-gray-700">Overloaded</p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="w-12 h-7 rounded-lg bg-red-200"></div>
        <p className="text-sm font-semibold text-gray-700">No workload</p>
      </div>
    </div>
  );
}

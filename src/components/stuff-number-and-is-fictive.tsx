import type { items } from "@/types/types";
import { useDashboardStore } from "@/store/dashboard-store";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";

export default function StuffNumberAndIsFictive({ item }: { item: items }) {
  const toggleItemFictiveStatus = useDashboardStore(
    (state) => state.toggleItemFictiveStatus
  );
  const [stuffNumber, setStuffNumber] = useState(item.StuffNumber.toString());

  const updateStuffNumber = useDashboardStore(
    (state) => state.updateStuffNumber
  );
  const updateStuffNumberHandler = () => {
    const value = stuffNumber.trim();

    // Check if value is empty
    if (value === "") {
      setStuffNumber(item.StuffNumber.toString());
      return;
    }

    // Check if value is a valid number
    const numValue = Number(value);
    if (isNaN(numValue)) {
      toast.error("The value must be a number");
      setStuffNumber(item.StuffNumber.toString());
      return;
    }

    // Check if value is between 0 and 5
    if (numValue < 0 || numValue > 5) {
      toast.error("The value must be between 0 and 5");
      setStuffNumber(item.StuffNumber.toString());
      return;
    }

    // Check decimal places - if there's a decimal point, it should have at most one digit after it
    if (value.includes(".")) {
      const decimalParts = value.split(".");
      // Check for multiple decimal points or invalid format
      if (
        decimalParts.length !== 2 ||
        decimalParts[0] === "" ||
        decimalParts[1].length === 0 ||
        decimalParts[1].length > 1
      ) {
        toast.error("There can be only one number after the decimal point");
        setStuffNumber(item.StuffNumber.toString());
        return;
      }
    }

    // If validation passes, update the store
    updateStuffNumber(item.id, numValue);
  };

  return (
    <div className="flex justify-start items-center gap-1 my-1">
      <div className="w-[94%] bg-gray-200 h-8! text-xs rounded-sm text-gray-600 font-semibold"></div>
      <div
        className={`w-[6%]  h-8! text-xs rounded-sm text-gray-600 font-semibold ${
          item.isFictive ? "bg-red-200" : "bg-gray-200"
        } flex items-center justify-center gap-2`}>
        <input
          type="text"
          value={stuffNumber}
          onChange={(e) => setStuffNumber(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateStuffNumberHandler();
            }
          }}
          className=" cursor-default text-start w-5 text-xs rounded-xs   focus-within:border-gray-300 focus:shadow  outline-none  border border-transparent  "
        />

        <Checkbox
          className=" border-gray-300 shadow data-[state=checked]:bg-red-400 data-[state=checked]:border-none"
          defaultChecked={item.isFictive}
          onCheckedChange={() => toggleItemFictiveStatus(item.id)}
        />
      </div>
    </div>
  );
}

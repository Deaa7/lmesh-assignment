import type { items } from "@/types/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { MessageSquareMore } from "lucide-react";
import { useState } from "react";
import { useDashboardStore } from "@/store/dashboard-store";
import StuffNumberAndIsFictive from "./stuff-number-and-is-fictive";

export default function SingleItemActions({
  item,
  showingLastBorder,
}: {
  item: items;
  showingLastBorder: boolean;
}) {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const writeCommentToItem = useDashboardStore(
    (state) => state.writeCommentToItem
  );

  return (
    <div
      className={`w-full lg:w-[90%] sm:[80%] ${
        showingLastBorder ? "border-b-2 border-b-gray-300 " : ""
      } pb-2 sm:pb-3`}>
      <StuffNumberAndIsFictive item={item} />
      <div className="flex justify-start gap-1 flex-col sm:flex-row">
        <Select>
          <SelectTrigger className="bg-gray-200 h-7! sm:h-8! text-[10px] sm:text-xs rounded-sm text-gray-600 font-semibold w-full sm:w-auto">
            Acting as{" "}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">option 1</SelectItem>
            <SelectItem value="2">option 2</SelectItem>
            <SelectItem value="3">option 3</SelectItem>
          </SelectContent>
        </Select>

        <div className="w-full relative">
          <textarea
            onFocus={() => setIsCommentOpen(true)}
            value={item.comment}
            onBlur={() => setIsCommentOpen(false)}
            onChange={(e) => writeCommentToItem(item.id, e.target.value)}
            className="w-full focus:outline-none resize-none focus:resize h-7 sm:h-8 focus:h-fit focus:pb-6 sm:focus:pb-8 cursor-default! px-1.5 sm:px-2 py-1.5 sm:py-2 bg-gray-200 text-[10px] sm:text-xs rounded-sm placeholder:text-gray-600 font-semibold"
            placeholder="Comment"
          />
          {!isCommentOpen && (
            <MessageSquareMore className="w-3 sm:w-4 absolute right-1.5 sm:right-2 top-3.5 sm:top-4 -translate-y-1/2 text-gray-400 cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
}

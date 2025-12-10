import type { items } from "@/types/types";

import SingleItemActions from "@/components/single-item-actions";
import DeleteItemDialog from "@/components/delete-item-dialog";
 
export default function ItemsUI({ items }: { items: items[] }) {
  return (
    <>
      {items.map((item: items , index:number) => (
        <div key={"item-"+index.toString()} className="flex justify-between items-start flex-wrap my-0.5 sm:my-1 gap-1 sm:gap-2">
          <div className="w-full sm:w-[15%] lg:w-[8%] min-w-40 mr-[0.5%] flex items-center  sm:items-start  gap-1 mb-1 sm:mb-0">
            <div>
              <div className="w-[3px] sm:w-[4px] md:w-[5px] h-[16px] sm:h-[18px] md:h-[20px] rounded-full bg-blue-800 mr-1"></div>
            </div>
            <div className="text-xs sm:text-xs md:text-sm">
              <p >
                {item.name}
                {" |"}
              </p>
              <p >{item.code}</p>
            </div>
          </div>

          <div className="flex-1 min-w-0 flex items-start gap-1">
            <SingleItemActions item={item} showingLastBorder={index < items.length - 1} />
            <DeleteItemDialog itemId={item.id}/>
          </div>
        </div>
      ))}
    </>
  );
}

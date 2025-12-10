import type { items } from "@/types/types";

import SingleItemActions from "@/components/single-item-actions";
import DeleteItemDialog from "@/components/delete-item-dialog";

export default function ItemsUI({ items }: { items: items[] }) {
  return (
    <>
      {items.map((item: items , index:number) => (
        <div className="flex justify-start  items-start flex-wrap my-1 ">
          <div className="w-[7%] mr-[0.1%]   flex">
            <div>
              <div className="w-[5px] h-[20px] rounded-full bg-blue-800  mr-1"></div>
            </div>
            <div className="text-sm  ">
              <p>
                {item.name}
                {" |"}
              </p>
              <p>{item.code}</p>
            </div>
          </div>

          <SingleItemActions item={item} showingLastBorder={index < items.length - 1} />
        
         <DeleteItemDialog itemId={item.id}/>
        </div>
      ))}
    </>
  );
}

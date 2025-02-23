/* eslint-disable react/prop-types */
import { SortableContext } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

const Tier = ({ tier, color, items }) => {
  const { setNodeRef } = useDroppable({ id: tier });

  return (
    <div className="flex items-center">
      <h1
        className={`${color} font-robotoMono p-7 w-24 text-center rounded font-bold text-3xl border-y-2 border-gray-400`}
      >
        {tier}
      </h1>
      <SortableContext items={items}>
        <div
          ref={setNodeRef}
          className="w-full flex overflow-x-scroll gap-4 p-2 min-h-24 items-center bg-gray-200 dark:bg-gray-700 rounded-r-lg border-2 border-dashed border-gray-400"
        >
          {items.map((item) => (
            <img
              key={item.id}
              src={item.img}
              className="min-w-20 max-h-20 rounded-md"
            />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export default Tier;

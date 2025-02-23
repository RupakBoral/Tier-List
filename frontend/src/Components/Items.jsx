/* eslint-disable react/prop-types */
import { useDraggable } from "@dnd-kit/core";

const DraggableItem = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
    data: { img: item.img },
  });

  return (
    <div className="flex flex-col relative items-center gap-2">
      <img
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className="peer w-28 h-28 cursor-grab"
        src={item.img}
        style={{
          transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : "none",
        }}
      />
      <p className="absolute top-2 rounded-lg text-center bg-gray-800 peer collapse peer-hover:visible hover:invisible text-md font-semibold p-2">
        {item.name}
      </p>
    </div>
  );
};

const Items = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map((item) => (
        <DraggableItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;

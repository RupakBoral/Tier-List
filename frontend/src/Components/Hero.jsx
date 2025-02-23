import Items from "./Items";
import Tier from "./Tier";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { useState } from "react";
import FoodData from "../assets/FoodData";

const tiers = [
  { id: "S", color: "bg-violet-500" },
  { id: "A", color: "bg-blue-500" },
  { id: "B", color: "bg-green-500" },
  { id: "C", color: "bg-yellow-500" },
  { id: "D", color: "bg-red-500" },
];

const Hero = () => {
  const [tieredItems, setTieredItems] = useState({
    S: [],
    A: [],
    B: [],
    C: [],
    D: [],
  });

  const [items, setItems] = useState(FoodData);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeItem = items.find((item) => item.id === active.id);
    if (!activeItem) return;

    const newTier = over.id;

    setTieredItems((prev) => {
      const updated = { ...prev };
      updated[newTier] = [...updated[newTier], activeItem];
      return updated;
    });

    setItems((prevItems) => prevItems.filter((item) => item.id !== active.id));
  };

  return (
    <div className="rounded-lg flex gap-8 justify-evenly items-center">
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="w-3/5">
          {tiers.map(({ id, color }) => (
            <Tier key={id} tier={id} color={color} items={tieredItems[id]} />
          ))}
        </div>
        {items === null ? <div></div> : <Items items={items} />}
      </DndContext>
    </div>
  );
};

export default Hero;

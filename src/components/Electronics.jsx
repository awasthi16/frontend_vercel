// VirtualCircuitBuilder.jsx
import React, { useState } from "react";

const componentsList = [
  { id: "resistor", name: "Resistor" },
  { id: "led", name: "LED" },
  { id: "arduino", name: "Arduino Uno" },
  { id: "breadboard", name: "Breadboard" },
  { id: "battery", name: "Battery (5V)" },
];

export default function VirtualCircuitBuilder() {
  const [canvasComponents, setCanvasComponents] = useState([]);

  const handleDrop = (component) => {
    setCanvasComponents([...canvasComponents, { ...component, x: 100, y: 100 }]);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragEnd = (e, index) => {
    const newX = e.clientX - e.currentTarget.offsetWidth / 2;
    const newY = e.clientY - e.currentTarget.offsetHeight / 2;
    const updated = [...canvasComponents];
    updated[index] = { ...updated[index], x: newX, y: newY };
    setCanvasComponents(updated);
  };

  const isLedOn =
    canvasComponents.some((c) => c.id === "led") &&
    canvasComponents.some((c) => c.id === "battery");

  return (
    <div className="flex h-screen">
      <aside className="w-1/5 bg-gray-100 p-4 border-r">
        <h2 className="font-bold text-xl mb-4">Components</h2>
        {componentsList.map((comp) => (
          <button
            key={comp.id}
            className="w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleDrop(comp)}
          >
            {comp.name}
          </button>
        ))}
      </aside>

      <main className="flex-1 bg-white relative overflow-hidden">
        <div className="w-full h-full relative">
          {canvasComponents.map((comp, index) => (
            <div
              key={index}
              className="absolute bg-blue-200 rounded p-2 cursor-move shadow"
              style={{ top: comp.y, left: comp.x }}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnd={(e) => handleDragEnd(e, index)}
            >
              {comp.name}
            </div>
          ))}

          {isLedOn && (
            <div className="absolute bottom-4 right-4 p-4 bg-green-200 rounded shadow">
              🔆 LED is ON (battery connected)
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

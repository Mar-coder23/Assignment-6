import { useState } from "react";
import Header from "./Header";
import PaintingList from "./PaintingList";
import EditPaintingForm from "./EditPaintingForm";

export default function App() {
  // initial data (like in your HTML example)
  const initialData = [
    { id: "016060", title: "Girl Arranging Her Hair", artist: "Mary Cassatt", year: 1886 },
    { id: "019160", title: "Farmhouse in Provence", artist: "Vincent Van Gogh", year: 1888 },
    { id: "016070", title: "The Boating Party", artist: "Mary Cassatt", year: 1893 },
    { id: "017040", title: "Woman with a Parasol", artist: "Claude Monet", year: 1875 },
    { id: "017080", title: "The Bridge at Argenteuil", artist: "Claude Monet", year: 1874 }
  ];

  const [paintings, setPaintings] = useState(initialData);
  const [currentPainting, setCurrentPainting] = useState(initialData[0]);

  const changePainting = (painting) => {
    setCurrentPainting(painting);
  };

  const updatePainting = (modifiedPainting) => {
    const updatedList = [...paintings];
    const index = updatedList.findIndex(p => p.id === modifiedPainting.id);
    updatedList[index] = modifiedPainting;
    setPaintings(updatedList);
    setCurrentPainting(modifiedPainting);
  };

  const undoChanges = () => {
    setPaintings([...initialData]);
    setCurrentPainting(initialData[0]);
  };

  return (
    <article className="app">
      <Header undo={undoChanges} />
      <div className="box">
        <PaintingList
          current={currentPainting}
          paintings={paintings}
          change={changePainting}
        />
        <EditPaintingForm
          current={currentPainting}
          update={updatePainting}
        />
      </div>
    </article>
  );
}
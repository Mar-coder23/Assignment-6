import PaintingList from "./PaintingList";

export default function PaintingList({ paintings, current, change }) {
  return (
    <section className="paintingList">
      {paintings.map(p => (
        <PaintingList
          key={p.id}
          painting={p}
          current={current}
          change={change}
        />
      ))}
    </section>
  );
}
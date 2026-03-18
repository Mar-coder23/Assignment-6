import PaintingListItem from "./PaintingListItem";

export default function PaintingList({ paintings, current, change }) {
  return (
    <section className="paintingList">
      {paintings.map((p) => (
        <PaintingListItem
          key={p.id}
          painting={p}
          current={current}
          change={change}
        />
      ))}
    </section>
  );
}
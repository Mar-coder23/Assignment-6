export default function PaintingListItem({ painting, current, change }) {
  const handleSelect = () => change(painting);
  let classCombo = "row";
  if (painting.id === current.id) classCombo += " invert";

  return (
    <div className={classCombo} onClick={handleSelect}>
      <img src={"paintings/square/" + painting.id + ".jpg"} alt={painting.title} />
      <h3>{painting.title}</h3>
      <p>{painting.artist}</p>
      <p>{painting.year}</p>
    </div>
  );
}
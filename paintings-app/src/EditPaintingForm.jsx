export default function EditPaintingForm({ current, update }) {
  const handleInputChange = (e) => {
    const modifiedPainting = { ...current };
    const { name, value } = e.target;
    modifiedPainting[name] = value;
    update(modifiedPainting);
  };

  const { id, title, artist, year } = current;

  return (
    <section className="paintingForm">
      <img src={`/paintings/${current.id}.jpg`} alt={current.title} />
      <div>
        <label>Title</label>
        <input type="text" name="title" value={title} onChange={handleInputChange} />
      </div>
      <div>
        <label>Artist</label>
        <input type="text" name="artist" value={artist} onChange={handleInputChange} />
      </div>
      <div>
        <label>Year</label>
        <input type="text" name="year" value={year} onChange={handleInputChange} />
      </div>
    </section>
  );
}
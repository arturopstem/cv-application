function AddEntryButton({ type, entries, onClick }) {
  const entryQuantityIndicator = entries.length > 0 ? 'another' : '';
  const buttonText = `+ Add ${entryQuantityIndicator} ${type} entry`;

  return (
    <button className="add-entry-btn" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default AddEntryButton;

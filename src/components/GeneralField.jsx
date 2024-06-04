function GeneralField({
  name,
  type,
  label,
  placeholder,
  generalInfo,
  setGeneralInfo,
}) {
  const { isEditing } = generalInfo[name];

  function handleChange(e) {
    const newGeneralInfo = { ...generalInfo };
    newGeneralInfo[name].value = e.target.value;
    setGeneralInfo(newGeneralInfo);
  }

  function setIsEditing(state) {
    const newGeneralInfo = { ...generalInfo };
    newGeneralInfo[name].isEditing = state;
    setGeneralInfo(newGeneralInfo);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  const editingTemplate = (
    <form className="general-field" onSubmit={handleSubmit}>
      <label htmlFor={name}>{label}:</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={generalInfo[name].value}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <button type="submit">Save</button>
    </form>
  );

  const viewTemplate = (
    <div className="general-field">
      <span>{label}:</span>
      <span>{generalInfo[name].value}</span>
      <button type="button" onClick={() => setIsEditing(true)}>
        Edit
      </button>
    </div>
  );

  return <>{isEditing ? editingTemplate : viewTemplate}</>;
}

export default GeneralField;

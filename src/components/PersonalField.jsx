import personalFieldDefs from '../js/personalFieldDefs';

function PersonalField({ field, profile, setProfile }) {
  const def = personalFieldDefs[field];
  const { personalDetails } = profile;

  const handleChange = (e) => {
    const nextValue = e.target.value;
    setProfile((draft) => {
      draft.personalDetails[def.id] = nextValue;
    });
  };

  return (
    <fieldset className="fieldset" style={{ gridArea: def.id }}>
      <label htmlFor={def.id}>{def.label}</label>
      {def.fieldType === 'input' && (
        <input
          type={def.type}
          name={def.id}
          id={def.id}
          defaultValue={personalDetails[def.id]}
          onChange={handleChange}
          required={def.required}
        />
      )}
      {def.fieldType === 'select' && (
        <select
          name={def.id}
          id={def.id}
          defaultValue={personalDetails[def.id]}
          onChange={handleChange}
          required={def.required}
        >
          {def.options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      )}
    </fieldset>
  );
}

export default PersonalField;

import personalFieldDefs from '../js/personalFieldDefs';

function PersonalField({ field, profile, setProfile }) {
  const def = personalFieldDefs[field];
  const { personalDetails } = profile;
  const inputId = def.name;

  const handleChange = (e) => {
    const nextValue = e.target.value;
    setProfile((draft) => {
      draft.personalDetails[def.name] = nextValue;
    });
  };

  return (
    <fieldset className="fieldset" style={{ gridArea: def.name }}>
      <label htmlFor={inputId}>{def.label}</label>
      {def.fieldType === 'input' && (
        <input
          type={def.type}
          name={def.name}
          id={inputId}
          defaultValue={personalDetails[def.name]}
          onChange={handleChange}
          required={def.required}
        />
      )}
      {def.fieldType === 'select' && (
        <select
          name={def.name}
          id={inputId}
          defaultValue={personalDetails[def.name]}
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

import skillFieldDefs from '../js/skillFieldDefs';

function SkillField({ field, entry, setProfile }) {
  const def = skillFieldDefs[field];
  const inputId = `${def.name}_${entry.id}`;

  const handleChange = (e) => {
    const nextValue = e.target.value;

    setProfile((profile) => {
      const targetSkillEntry = profile.skills.find(
        (skillEntry) => skillEntry.id === entry.id,
      );

      targetSkillEntry[def.name] = nextValue;
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
          value={entry[def.name] ?? ''}
          onChange={handleChange}
          required={def.required}
        />
      )}
      {def.fieldType === 'select' && (
        <select
          name={def.name}
          id={inputId}
          value={entry[def.name] ?? ''}
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

export default SkillField;

import workFieldDefs from '../js/workFieldDefs';

function WorkField({ field, entry, setProfile }) {
  const def = workFieldDefs[field];
  const inputId = `${def.name}_${entry.id}`;

  const handleChange = (e) => {
    const nextValue = e.target.value;

    setProfile((profile) => {
      const targetWorkEntry = profile.workExperience.find(
        (workEntry) => workEntry.id === entry.id,
      );

      targetWorkEntry[def.name] = nextValue;
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
      {def.fieldType === 'textarea' && (
        <textarea
          name={def.name}
          id={inputId}
          value={entry[def.name] ?? ''}
          onChange={handleChange}
          required={def.required}
        ></textarea>
      )}
    </fieldset>
  );
}

export default WorkField;

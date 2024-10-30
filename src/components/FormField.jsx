import fieldDefinitions from '../js/fieldDefinitions';
import '../styles/FormField.css';

function FormField({ entriesArrayName, field, entry, setProfile }) {
  const def = fieldDefinitions[entriesArrayName][field];
  const inputId = `${def.name}_${entry.id}`;

  const handleChange = (e) => {
    const nextValue = e.target.value;

    setProfile((profile) => {
      const targetEntry = profile[entriesArrayName].find(
        (entryInArray) => entryInArray.id === entry.id,
      );

      targetEntry[def.name] = nextValue;
    });
  };

  return (
    <fieldset className="form-field" style={{ gridArea: def.name }}>
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

export default FormField;

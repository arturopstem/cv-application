import fieldDefinitions from '../js/fieldDefinitions';
import { deleteEntry, saveEntry } from '../js/profileStorage';
import sectionDefinitions from '../js/sectionDefinitions';
import '../styles/EntryForm.css';
import EntryButton from './EntryButton';
import FormField from './FormField';

function EntryForm({ section, entry, setProfile }) {
  const fields = Object.keys(fieldDefinitions[section]);
  const { isMultiEntry } = sectionDefinitions.find(
    (sectionDef) => sectionDef.name === section,
  );

  const handleDelete = () => {
    setProfile((profile) => {
      const nextEntriesArray = profile[section].filter(
        (sectionEntry) => sectionEntry.id !== entry.id,
      );

      profile[section] = nextEntriesArray;
    });
    deleteEntry(section, entry);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEntry(section, entry);
  };

  const formFieldProps = { section, entry, setProfile };

  return (
    <section className="entry-form-wrapper">
      <form className="entry-form" onSubmit={handleSubmit}>
        <div className="entry-form__fields">
          {fields.map((field, i) => {
            formFieldProps.field = field;
            return <FormField key={i} {...formFieldProps} />;
          })}
        </div>
        <menu className="entry-form__menu">
          {isMultiEntry && (
            <li>
              <EntryButton type="delete" onClick={handleDelete} />
            </li>
          )}
          <li>
            <EntryButton type="save" />
          </li>
        </menu>
      </form>
    </section>
  );
}

export default EntryForm;

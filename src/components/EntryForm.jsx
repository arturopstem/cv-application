import fieldDefinitions from '../js/fieldDefinitions';
import { deleteEntry, saveEntry } from '../js/profileStorage';
import EntryButton from './EntryButton';
import FormField from './FormField';

function EntryForm({ entriesArrayName, entry, setProfile }) {
  const fields = Object.keys(fieldDefinitions[entriesArrayName]);

  const handleDelete = () => {
    setProfile((profile) => {
      const nextEntriesArray = profile[entriesArrayName].filter(
        (entryInArray) => entryInArray.id !== entry.id,
      );

      profile[entriesArrayName] = nextEntriesArray;
    });
    deleteEntry(entriesArrayName, entry);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEntry(entriesArrayName, entry);
  };

  const formFieldProps = { entriesArrayName, entry, setProfile };

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
          <li>
            <EntryButton type="delete" onClick={handleDelete} />
          </li>
          <li>
            <EntryButton type="save" />
          </li>
        </menu>
      </form>
    </section>
  );
}

export default EntryForm;

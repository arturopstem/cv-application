import { deleteEntry, saveEntry } from '../js/profileStorage';
import EducationField from './EducationField';
import EntryButton from './EntryButton';

function EducationEntry({ entry, setProfile }) {
  const handleDelete = () => {
    setProfile((profile) => {
      const nextEducation = profile.education.filter(
        (educationEntry) => educationEntry.id !== entry.id,
      );

      profile.education = nextEducation;
    });
    deleteEntry('education', entry);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEntry('education', entry);
  };

  return (
    <section className="education-entry">
      <form className="entry-form" onSubmit={handleSubmit}>
        <div className="entry-form__fields">
          <EducationField field="degree" {...{ entry, setProfile }} />
          <EducationField field="school" {...{ entry, setProfile }} />
          <EducationField field="cityTown" {...{ entry, setProfile }} />
          <EducationField field="startDate" {...{ entry, setProfile }} />
          <EducationField field="endDate" {...{ entry, setProfile }} />
          <EducationField field="description" {...{ entry, setProfile }} />
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

export default EducationEntry;

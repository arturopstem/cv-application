import DeleteEntryButton from './DeleteEntryButton';
import EducationField from './EducationField';

function EducationEntry({ entry, setProfile }) {
  const handleDelete = () => {
    setProfile((profile) => {
      const nextEducation = profile.education.filter(
        (educationEntry) => educationEntry.id !== entry.id,
      );

      profile.education = nextEducation;
    });
  };

  return (
    <section className="education-entry">
      <nav>
        <menu>
          <li>
            <DeleteEntryButton onClick={handleDelete} />
          </li>
        </menu>
      </nav>
      <form>
        <EducationField field="degree" {...{ entry, setProfile }} />
        <EducationField field="school" {...{ entry, setProfile }} />
        <EducationField field="cityTown" {...{ entry, setProfile }} />
        <EducationField field="startDate" {...{ entry, setProfile }} />
        <EducationField field="endDate" {...{ entry, setProfile }} />
        <EducationField field="description" {...{ entry, setProfile }} />
      </form>
    </section>
  );
}

export default EducationEntry;

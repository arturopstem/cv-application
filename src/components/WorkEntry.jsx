import DeleteEntryButton from './DeleteEntryButton';
import WorkField from './WorkField';

function WorkEntry({ entry, setProfile }) {
  const handleDelete = () => {
    setProfile((profile) => {
      const nextWorkExperience = profile.workExperience.filter(
        (workEntry) => workEntry.id !== entry.id,
      );

      profile.workExperience = nextWorkExperience;
    });
  };

  return (
    <section className="work-entry">
      <nav>
        <menu>
          <li>
            <DeleteEntryButton onClick={handleDelete} />
          </li>
        </menu>
      </nav>
      <form>
        <WorkField field="jobTitle" {...{ entry, setProfile }} />
        <WorkField field="employer" {...{ entry, setProfile }} />
        <WorkField field="cityTown" {...{ entry, setProfile }} />
        <WorkField field="startDate" {...{ entry, setProfile }} />
        <WorkField field="endDate" {...{ entry, setProfile }} />
        <WorkField field="description" {...{ entry, setProfile }} />
      </form>
    </section>
  );
}

export default WorkEntry;

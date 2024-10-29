import EntryButton from './EntryButton';
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="work-entry">
      <form className="entry-form" onSubmit={handleSubmit}>
        <div className="entry-form__fields">
          <WorkField field="jobTitle" {...{ entry, setProfile }} />
          <WorkField field="employer" {...{ entry, setProfile }} />
          <WorkField field="cityTown" {...{ entry, setProfile }} />
          <WorkField field="startDate" {...{ entry, setProfile }} />
          <WorkField field="endDate" {...{ entry, setProfile }} />
          <WorkField field="description" {...{ entry, setProfile }} />
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

export default WorkEntry;

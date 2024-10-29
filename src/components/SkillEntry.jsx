import EntryButton from './EntryButton';
import SkillField from './SkillField';

function SkillEntry({ entry, setProfile }) {
  const handleDelete = () => {
    setProfile((profile) => {
      const nextSkill = profile.skills.filter(
        (skillEntry) => skillEntry.id !== entry.id,
      );

      profile.skills = nextSkill;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="skill-entry">
      <form className="entry-form" onSubmit={handleSubmit}>
        <div className="entry-form__fields">
          <SkillField field="skill" {...{ entry, setProfile }} />
          <SkillField field="level" {...{ entry, setProfile }} />
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

export default SkillEntry;

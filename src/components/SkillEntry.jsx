import DeleteEntryButton from './DeleteEntryButton';
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

  return (
    <section className="skill-entry">
      <nav>
        <menu>
          <li>
            <DeleteEntryButton onClick={handleDelete} />
          </li>
        </menu>
      </nav>
      <form>
        <SkillField field="skill" {...{ entry, setProfile }} />
        <SkillField field="level" {...{ entry, setProfile }} />
      </form>
    </section>
  );
}

export default SkillEntry;

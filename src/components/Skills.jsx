import { v4 as uuidv4 } from 'uuid';

import AddEntryButton from './AddEntryButton';
import EntryForm from './EntryForm';

function Skills({ profile, setProfile }) {
  const { skill } = profile;

  const addSkillEntry = () => {
    const newId = uuidv4();

    setProfile((profile) => {
      profile.skill.push({ id: newId });
    });
  };

  return (
    <section className="skill">
      <h2>Skills</h2>
      {skill.map((entry) => (
        <EntryForm key={entry.id} section="skill" {...{ entry, setProfile }} />
      ))}
      <menu>
        <li>
          <AddEntryButton
            type="skill"
            entries={skill}
            onClick={addSkillEntry}
          />
        </li>
      </menu>
    </section>
  );
}

export default Skills;

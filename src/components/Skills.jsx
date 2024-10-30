import { v4 as uuidv4 } from 'uuid';

import AddEntryButton from './AddEntryButton';
import EntryForm from './EntryForm';

function Skills({ profile, setProfile }) {
  const { skills } = profile;

  const addSkillEntry = () => {
    const newId = uuidv4();

    setProfile((profile) => {
      profile.skills.push({ id: newId });
    });
  };

  return (
    <section className="skills">
      <h2>Skills</h2>
      {skills.map((entry) => (
        <EntryForm
          key={entry.id}
          entriesArrayName="skills"
          {...{ entry, setProfile }}
        />
      ))}
      <menu>
        <li>
          <AddEntryButton
            type="skill"
            entries={skills}
            onClick={addSkillEntry}
          />
        </li>
      </menu>
    </section>
  );
}

export default Skills;

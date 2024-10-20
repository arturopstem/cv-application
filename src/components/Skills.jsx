import { v4 as uuidv4 } from 'uuid';

import SkillEntry from './SkillEntry';

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
        <SkillEntry key={entry.id} {...{ entry, setProfile }} />
      ))}
      <menu>
        <li>
          <button onClick={addSkillEntry}>+ Add another skill entry</button>
        </li>
      </menu>
    </section>
  );
}

export default Skills;

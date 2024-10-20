import { v4 as uuidv4 } from 'uuid';

import EducationEntry from './EducationEntry';

function Education({ profile, setProfile }) {
  const { education } = profile;

  const addEducationEntry = () => {
    const newId = uuidv4();

    setProfile((profile) => {
      profile.education.push({ id: newId });
    });
  };

  return (
    <section className="education">
      <h2>Education</h2>
      {education.map((entry) => (
        <EducationEntry key={entry.id} {...{ entry, setProfile }} />
      ))}
      <menu>
        <li>
          <button onClick={addEducationEntry}>
            + Add another education entry
          </button>
        </li>
      </menu>
    </section>
  );
}

export default Education;

import { v4 as uuidv4 } from 'uuid';

import WorkEntry from './WorkEntry';

function WorkExperience({ profile, setProfile }) {
  const { workExperience } = profile;

  const addWorkEntry = () => {
    const newId = uuidv4();

    setProfile((profile) => {
      profile.workExperience.push({ id: newId });
    });
  };

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      {workExperience.map((entry) => (
        <WorkEntry key={entry.id} {...{ entry, setProfile }} />
      ))}
      <menu>
        <li>
          <button onClick={addWorkEntry}>+ Add another work entry</button>
        </li>
      </menu>
    </section>
  );
}

export default WorkExperience;

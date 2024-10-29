import { v4 as uuidv4 } from 'uuid';

import AddEntryButton from './AddEntryButton';
import WorkEntry from './WorkEntry';

function WorkExperience({ profile, setProfile }) {
  const { work } = profile;

  const addWorkEntry = () => {
    const newId = uuidv4();

    setProfile((profile) => {
      profile.work.push({ id: newId });
    });
  };

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      {work.map((entry) => (
        <WorkEntry key={entry.id} {...{ entry, setProfile }} />
      ))}
      <menu>
        <li>
          <AddEntryButton type="work" entries={work} onClick={addWorkEntry} />
        </li>
      </menu>
    </section>
  );
}

export default WorkExperience;

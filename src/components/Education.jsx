import { v4 as uuidv4 } from 'uuid';

import AddEntryButton from './AddEntryButton';
import EntryForm from './EntryForm';

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
        <EntryForm
          key={entry.id}
          entriesArrayName="education"
          {...{ entry, setProfile }}
        />
      ))}
      <menu>
        <li>
          <AddEntryButton
            type="education"
            entries={education}
            onClick={addEducationEntry}
          />
        </li>
      </menu>
    </section>
  );
}

export default Education;

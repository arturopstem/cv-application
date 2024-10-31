import { v4 as uuidv4 } from 'uuid';

import sectionDefinitions from '../js/sectionDefinitions';
import AddEntryButton from './AddEntryButton';
import EntryForm from './EntryForm';

function EntriesSection({ section, profile, setProfile }) {
  const entries = profile[section];

  const def = sectionDefinitions.find((def) => def.name === section);

  const addEntry = () => {
    const newId = uuidv4();

    setProfile((profile) => {
      profile[section].push({ id: newId });
    });
  };

  return (
    <section className="entries-section">
      <h2>{def.title}</h2>
      {entries.map((entry) => (
        <EntryForm key={entry.id} {...{ section, entry, setProfile }} />
      ))}
      {def.isMultiEntry && (
        <menu>
          <li>
            <AddEntryButton
              type={section}
              entries={entries}
              onClick={addEntry}
            />
          </li>
        </menu>
      )}
    </section>
  );
}

export default EntriesSection;

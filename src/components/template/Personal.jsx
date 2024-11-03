import fieldDefinitions from '../../js/fieldDefinitions';
import '../../styles/Personal.css';

function Personal({ entries }) {
  const personalInfo = entries[0];
  delete personalInfo.id;

  const { firstName, lastName, ...otherFields } = personalInfo;
  const fullName = [firstName, lastName].join(' ').trim();

  const personalDefinitions = fieldDefinitions.personal;

  return (
    <section className="template__personal">
      <section className="personal">
        {fullName && (
          <h1
            className="personal__info personal__info--fullName"
            style={{ gridArea: 'fullName' }}
          >
            {fullName}
          </h1>
        )}
        {Object.entries(otherFields).map(([field, value]) => {
          const def = personalDefinitions[field];
          return (
            <p
              key={field}
              className="personal__info"
              style={{ gridArea: def.name }}
            >
              <span className="personal__info__field">{def.label}</span>
              <span className="personal__info__value">{value}</span>
            </p>
          );
        })}
      </section>
    </section>
  );
}

export default Personal;

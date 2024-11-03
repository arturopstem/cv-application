import { Fields, getLines, toCommaList } from '../../js/utils';
import '../../styles/Education.css';

function Education({ entries }) {
  return (
    <section className="template__education">
      <header>
        <h2>EDUCATION</h2>
      </header>
      <section className="education__entries">
        {entries.map((entry) => {
          const fields = new Fields(entry);
          const schoolInfo = toCommaList(entry.school, entry.cityTown);
          const description = getLines(entry.description);

          return (
            <section key={entry.id} className="education__entry">
              {fields.hasAll('startDate', 'endDate') && (
                <div className="education__date">
                  <time>{entry.endDate}</time>
                  <span>-</span>
                  <time>{entry.startDate}</time>
                </div>
              )}
              <div className="education__info">
                <h3 className="education__degree">{entry.degree}</h3>
                {fields.hasAny('school', 'cityTown') && (
                  <p className="education__employer-info">{schoolInfo}</p>
                )}
                {fields.hasAny('description') && description.length > 0 && (
                  <ul className="education__description">
                    {description.map((str, i) => (
                      <li key={i}>{str}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default Education;

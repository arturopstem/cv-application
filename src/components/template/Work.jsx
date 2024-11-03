import { Fields, getLines, toCommaList } from '../../js/utils';
import '../../styles/Work.css';

function Work({ entries }) {
  return (
    <section className="template__work">
      <header>
        <h2>WORK EXPERIENCE</h2>
      </header>
      <section className="work__entries">
        {entries.map((entry) => {
          const fields = new Fields(entry);
          const employerInfo = toCommaList(entry.employer, entry.cityTown);
          const description = getLines(entry.description);

          return (
            <section key={entry.id} className="work__entry">
              {fields.hasAll('startDate', 'endDate') && (
                <div className="work__date">
                  <time>{entry.endDate}</time>
                  <span>-</span>
                  <time>{entry.startDate}</time>
                </div>
              )}
              <div className="work__info">
                <h3 className="work__job-title">{entry.jobTitle}</h3>
                {fields.hasAny('employer', 'cityTown') && (
                  <p className="work__employer-info">{employerInfo}</p>
                )}
                {fields.hasAny('description') && description.length > 0 && (
                  <ul className="work__description">
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

export default Work;

import '../../styles/Skill.css';

function Skill({ entries }) {
  return (
    <section className="template__skill">
      <header>
        <h2>SKILLS</h2>
      </header>
      <section className="skill__entries">
        {entries.map((entry) => {
          return (
            <section key={entry.id} className="skill__entry">
              <div className="skill__name">{entry.skill}</div>
              <div className="skill__level">{entry.level}</div>
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default Skill;

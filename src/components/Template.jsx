import { readStoredProfile } from '../js/profileStorage';
import Education from './template/Education';
import Personal from './template/Personal';
import Skill from './template/Skill';
import Work from './template/Work';

function Template() {
  const storedProfile = readStoredProfile();
  const profile = storedProfile ?? {};
  const { personal, work, education, skill } = profile;

  return (
    <section className="template">
      <article>
        {personal && <Personal entries={personal} />}
        {work && <Work entries={work} />}
        {education && <Education entries={education} />}
        {skill && <Skill entries={skill} />}
      </article>
    </section>
  );
}

export default Template;

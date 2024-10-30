import Education from './Education';
import PersonalDetails from './PersonalDetails';
import Skills from './Skills';
import Template from './Template';
import WorkExperience from './WorkExperience';

function Main({ currentView, profile, setProfile }) {
  let mainContent = <>Loading ...</>;

  switch (currentView) {
    case 'personal':
      mainContent = <PersonalDetails {...{ profile, setProfile }} />;
      break;
    case 'work':
      mainContent = <WorkExperience {...{ profile, setProfile }} />;
      break;
    case 'education':
      mainContent = <Education {...{ profile, setProfile }} />;
      break;
    case 'skill':
      mainContent = <Skills {...{ profile, setProfile }} />;
      break;
    case 'template':
      mainContent = <Template />;
      break;
  }

  return <main>{mainContent}</main>;
}

export default Main;

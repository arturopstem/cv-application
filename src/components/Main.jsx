import Education from './Education';
import PersonalDetails from './PersonalDetails';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

function Main({ currentView, profile, setProfile }) {
  let mainContent = <>Loading ...</>;

  switch (currentView) {
    case 'personal-details':
      mainContent = <PersonalDetails {...{ profile, setProfile }} />;
      break;
    case 'work-experience':
      mainContent = <WorkExperience {...{ profile, setProfile }} />;
      break;
    case 'education':
      mainContent = <Education {...{ profile, setProfile }} />;
      break;
    case 'skills':
      mainContent = <Skills {...{ profile, setProfile }} />;
      break;
    case 'template':
      break;
  }

  return <main>{mainContent}</main>;
}

export default Main;

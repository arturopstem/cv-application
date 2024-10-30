import EntriesSection from './EntriesSection';
import Template from './Template';

function Main({ currentView: section, profile, setProfile }) {
  let mainContent = <>Loading ...</>;

  const entriesSectionProps = { section, profile, setProfile };

  switch (section) {
    case 'personal':
    case 'work':
    case 'education':
    case 'skill':
      mainContent = <EntriesSection {...entriesSectionProps} />;
      break;
    case 'template':
      mainContent = <Template />;
      break;
  }

  return <main>{mainContent}</main>;
}

export default Main;

import { useAutoAnimate } from '@formkit/auto-animate/react';

import EntriesSection from './EntriesSection';
import Template from './Template';

function Main({ currentView: section, profile, setProfile }) {
  const [parent] = useAutoAnimate({ disrespectUserMotionPreference: true });
  let mainContent = <>Loading ...</>;

  const entriesSectionProps = { section, profile, setProfile };

  switch (section) {
    case 'personal':
    case 'work':
    case 'education':
    case 'skill':
      mainContent = <EntriesSection key={section} {...entriesSectionProps} />;
      break;
    case 'template':
      mainContent = <Template />;
      break;
  }

  return <main ref={parent}>{mainContent}</main>;
}

export default Main;

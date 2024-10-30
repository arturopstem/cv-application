import sectionDefinitions from '../js/sectionDefinitions';
import '../styles/Navigation.css';
import NavButton from './NavButton';

function Navigation({ currentView, setCurrentView }) {
  return (
    <nav className="navigation">
      <menu className="view-nav-menu">
        {sectionDefinitions.map((section) => (
          <NavButton
            key={section.name}
            {...{ section, currentView, setCurrentView }}
          />
        ))}
      </menu>
    </nav>
  );
}

export default Navigation;

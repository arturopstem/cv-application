import '../styles/Navigation.css';
import NavButton from './NavButton';

const VIEWS = [
  { name: 'personal-details', label: 'Personal Details' },
  { name: 'work-experience', label: 'Work Experience' },
  { name: 'education', label: 'Education' },
  { name: 'skills', label: 'Skills' },
  { name: 'template', label: 'Template' },
];

function Navigation({ currentView, setCurrentView }) {
  return (
    <nav className="navigation">
      <menu className="view-nav-menu">
        {VIEWS.map((view) => (
          <NavButton
            key={view.name}
            {...{ view, currentView, setCurrentView }}
          />
        ))}
      </menu>
    </nav>
  );
}

export default Navigation;

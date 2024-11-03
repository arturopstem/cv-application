import classNames from 'classnames';

import { saveView } from '../js/viewStorage';

function NavButton({ section, currentView, setCurrentView }) {
  const isSelected = section.name === currentView;
  const btnClass = classNames({
    'view-nav-btn': true,
    selected: isSelected,
  });

  const handleClick = () => {
    setCurrentView(section.name);
    saveView(section.name);
  };

  return (
    <li>
      <button className={btnClass} onClick={handleClick}>
        {section.title}
      </button>
    </li>
  );
}

export default NavButton;

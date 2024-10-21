import classNames from 'classnames';

function NavButton({ view, currentView, setCurrentView }) {
  const isSelected = view.name === currentView;
  const btnClass = classNames({
    'view-nav-btn': true,
    selected: isSelected,
  });

  const handleClick = () => setCurrentView(view.name);

  return (
    <li>
      <button className={btnClass} onClick={handleClick}>
        {view.label}
      </button>
    </li>
  );
}

export default NavButton;

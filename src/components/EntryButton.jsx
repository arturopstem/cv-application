import '../styles/EntryButton.css';

function DeleteSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className="entry-button__icon"
    >
      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
    </svg>
  );
}

function SaveSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className="entry-button__icon"
    >
      <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
    </svg>
  );
}

function EntryButton({ type, onClick }) {
  let button = <></>;

  switch (type) {
    case 'delete':
      button = (
        <button
          type="button"
          className="entry-button entry-button--delete"
          onClick={onClick}
        >
          <DeleteSvg /> Delete
        </button>
      );
      break;
    case 'save':
      button = (
        <button
          type="submit"
          className="entry-button entry-button--save"
          onClick={null}
        >
          <SaveSvg /> Save
        </button>
      );
      break;
  }

  return button;
}

export default EntryButton;

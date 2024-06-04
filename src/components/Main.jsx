import { useState } from 'react';

import GENERAL_INFO from '../utils/general-info';
import CVForm from './CVForm';

function Main() {
  const [mainState, setMainState] = useState('editing');
  const [generalInfo, setGeneralInfo] = useState(GENERAL_INFO);

  const formProps = {
    generalInfo,
    setGeneralInfo,
  };

  let mainContent;

  switch (mainState) {
    case 'editing':
      mainContent = (
        <>
          <CVForm {...formProps} />
          <button onClick={() => setMainState('preview')}>Preview</button>
        </>
      );
      break;
    case 'preview':
      mainContent = (
        <>
          <h2>PREVIEW</h2>
          <button onClick={() => setMainState('editing')}>Edit</button>
          <button onClick={() => setMainState('sent')}>Send</button>
        </>
      );
      break;
    case 'sent':
      mainContent = <h2>CV SUCCESSFULLY SENT</h2>;
      break;
    default:
      mainContent = null;
      break;
  }

  return <main>{mainContent}</main>;
}

export default Main;

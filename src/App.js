import axios from 'axios';
import Snapshot from './components/Snapshot';

import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   getTweet();
  // }, []);

  return (
    <div className="App">
      <Snapshot />
    </div>
  );
}

export default App;

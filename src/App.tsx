import React from 'react';

import { ButtonList, OptionList } from './components';

const App = () => {
  const [state, setState] = React.useState(0);

  return (
    <div className="app">
      <ButtonList />
      <OptionList />
    </div>
  );
};

export default App;

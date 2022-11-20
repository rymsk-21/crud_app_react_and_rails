import React from 'react';
import { Routers, Route } from 'react-router-dom';
import Editor from './Editor';

const App = () => (
  <Routers>
    <Route path="events/*" element={<Editor />} />
  </Routers>
);

export default App;

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutePath from './routes/RoutePath';
import { ThemeProvider } from './config/themeContext';

function App() {
  return (
    <Fragment>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<RoutePath />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

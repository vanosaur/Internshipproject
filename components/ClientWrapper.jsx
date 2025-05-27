'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { useSelector } from 'react-redux';

function ThemeWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={mode === 'dark' ? 'dark' : ''}>
      {children}
    </div>
  );
}

export default function ClientWrapper({ children }) {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
}

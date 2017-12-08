import AppContainer from './AppContainer';
import React from 'react';
import {hydrate} from 'react-dom';

hydrate(
   <AppContainer />,
   document.getElementById('app')
);
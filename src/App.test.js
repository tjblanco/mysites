import React from 'react';
import ReactDOM from 'react-dom';
import SitesFilterAppContainer from './SitesFilterApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SitesFilterAppContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

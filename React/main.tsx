

import React from 'react'
import ReactDOM from 'react-dom/client'
import 'SpaceContentJSHomepage.css'
import SpaceContentJSHomepage from '../Components/ContentSpaceJSHomepage/ContentSpaceJSHomepage'


const root = ReactDOM.createRoot(document.getElementById('ContentSpaceJS') as HTMLElement);
root.render(

  <React.StrictMode>
         
    <SpaceContentJSHomepage />
  </React.StrictMode>
);

export default root;
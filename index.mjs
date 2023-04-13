import React from 'react'
import ReactDOM from 'react-dom/client'
import './/Components/ContentSpaceJSHomepage/ContentSpaceJSHomePage.css'

import SpaceContentJSHomepage from './/Components/ContentSpaceJSHomepage/ContentSpaceJSHomepage.tsx'


const root = ReactDOM.createRoot(document.getElementById('ContentSpaceJS'));

// const root = ReactDOM.createRoot(document.getElementById('ContentSpaceJS') as HTMLElement);
root.render(
  <React.StrictMode>
         
    <SpaceContentJSHomepage />
  </React.StrictMode>
);
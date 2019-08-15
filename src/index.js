import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './pages/HomePage';

/**
 * webpack packs it all together
 */

 /**
  * const React = require('react')
  *   vs
  * import React from 'react'
  * 
  * es2015 modules  - import React from 'react'
  *     - set of rules for how code is shared between js files
  * 
  * commonjs modules  - const React = require('react')
  *     - a diff set of rules for how code is shared between js files
  */

const App = (props) => {
    return (
        <HomePage />
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

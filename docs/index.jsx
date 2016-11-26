'use strict';

import React from 'react'
import ReactDOM from '../src/mixins/ReactDOM'
import Docs from './docs'

React.initializeTouchEvents && React.initializeTouchEvents(true);
ReactDOM.render(<Docs />, document.getElementById('rapp'));

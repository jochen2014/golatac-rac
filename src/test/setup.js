process.env.NODE_ENV = 'test'

import { jsdom } from 'jsdom'
import {noop} from 'lodash'

//mocha doesn't understand webpack loaders
//alternatively, install npm install --save-dev ignore-styles
require.extensions['.css'] = noop
require.extensions['.less'] = noop
require.extensions['.scss'] = noop

//to suppress react propTypes validation warnings
process.env.NODE_ENV='production'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator

import { createStore } from 'redux'
import { root } from './reducer'
import middleware from './middleware';

export default createStore(root, middleware) 
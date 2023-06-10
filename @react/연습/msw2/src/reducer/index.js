

import {combineReducers} from '@reduxjs/toolkit'
import { listSlice } from './list'

export const rootReducer = combineReducers({list: listSlice.reducer})

import {createBrowserRouter} from 'react-router-dom'
import Start from '../pages'
import MaingPage from '../pages/main'

const router  = createBrowserRouter([
  {
    path: '/',
    element: <Start/>
  },
  {
    path: '/todolist/:list',
    element: <MaingPage/>
  },

])

export default router;
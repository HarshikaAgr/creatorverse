import { useRoutes, Link } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import './App.css'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <ShowCreators />
    },
    {
      path: '/creator/:id',
      element: <ViewCreator />
    },
    {
      path: '/new',
      element: <AddCreator />
    },
    {
      path: '/edit/:id',
      element: <EditCreator />
    }
  ])

  return (
    <div className="app">
      <nav>
        <Link to="/">Creatorverse</Link>
        <Link to="/new">Add Creator</Link>
      </nav>

      {routes}
    </div>
  )
}

export default App
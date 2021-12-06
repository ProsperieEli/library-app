import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { Header } from 'react'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import Home from './views/Books/Home'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <Router>
      <header>
        Enter the Library.
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/library" exact>
          List
        </NavLink>
      </header>
      <Switch>
        <Route exact path="/library" component={BookList} />
        <Route exact path="/library/:bookId" component={BookDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App

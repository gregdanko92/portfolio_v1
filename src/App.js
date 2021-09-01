import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>

      <Switch>
      <body>
          <Route path='/' exact component={Welcome} >
            <Welcome/>
          </Route>

          <Route path= '/about' exact component={About}>
          <About/>
          </Route>
        </body>
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;

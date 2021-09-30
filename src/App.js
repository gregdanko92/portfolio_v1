import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import Projects from './components/Projects';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      <Header/>

      <body>
      <Switch>
          <Route path='/' exact component={Welcome} >
            <Welcome/>
          </Route>

          <Route path= '/about' exact component={About}>
          <About/>
          </Route>

          <Route path= '/projects' exact component={Projects}>
          <Projects/>
          </Route>

          <Route path= '/resume' exact component={Resume}>
          <Resume/>
          </Route>
      </Switch>
      <Footer/>
        </body>

    </div>
  );
}

export default App;

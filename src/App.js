import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import Projects from './components/Projects';
import Resume from './components/Resume';
import { PdfResume } from './components/PdfResume';
import Contact from './components/Contact'


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

          {/* <Route path= '/pdf' exact component={PdfResume}>
          <PdfResume/>
          </Route> */}

          <Route path= '/resume' exact component={Resume}>
          <Resume/>

          </Route>
          <Route path= '/contact' exact component={Contact}>
          <Contact/>
          </Route>

          
      </Switch>
      <Footer/>
        </body>

    </div>
  );
}

export default App;

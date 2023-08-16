import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import WorkExperience from './components/WorkExperience';
import Resume from './components/Resume';
import PdfResume from './components/PdfResume';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Header/>
    <div className='site-body-container'>
      <Switch>
          <Route path='//' exact component={Welcome} >
            <Welcome/>
          </Route>

          <Route path= '/about' exact component={About}>
          <About/>
          </Route>

          <Route path= '/work_experience' exact component={WorkExperience}>
          <WorkExperience/>
          </Route>

          <Route path= '/resume' exact component={Resume}>
          <Resume/>

          </Route>
          <Route path= '/PdfResume' exact component={PdfResume}>
          <PdfResume/>
          </Route>

          <Route path= '/contact' exact component={Contact}>
          <Contact/>
          </Route>

          
      </Switch>
    </div>
      <Footer/>

    </div>
  );
}

export default App;

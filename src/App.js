import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './componets/header/header'
import Footer from './componets/footer/footer'
import Main from './pages/main/main'
import Projects from './pages/projects/pro'
import Contact from './pages/contact/contact'

function App() {
    return(
        <Router>
            <Header/>
        <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/home' exact component={Main} />
        <Route path='/Contact' exact component={Contact} />
        <Route path='/Projects' exact component={Projects} />
         </Switch>
        <Footer/>
            </Router>
    );
}

export default App;
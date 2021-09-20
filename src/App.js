import { Route, Switch } from "react-router-dom"
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from "./Menu";

const App = () => {
  const Name = () => {
    return <h1>this is a name page</h1>
  }


  return (
    <>
    <Menu />
    <Switch>     {/*9 - stap */}
       <Route exact path="/"  component={About}/>  {/* 7 - stap set switch - route - path - component  10 - stap 10 exact path set krne ke liye /* */}
       <Route exact path="/contact"  component={Contact}/>    {/* 8 - stap */}
       <Route path="/contact/name"  component={Name}/>
       <Route component={Error} />
    </Switch>
    {/* <About />
    <Contact /> */}
    </>
  )
}

export default App;

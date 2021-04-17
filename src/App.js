import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Menu } from "./components/Menu";
import { CreateSurvey } from "./components/CreateSurvey";
import { TakeSurvey } from "./components/TakeSurvey";
import {useState} from "react";
import BackgroundImg from "./images/BackgroundImg.png";
export default function App(props) {
  const [qbank, setQbank] = useState([props.SampleQue]);

  const addQuestion=(queString, optionsArray)=>{
    let obj={
      question:queString,
      options:optionsArray
    }
    let temp =[...qbank, obj];
    setQbank(temp);
    console.log(qbank);
  }
  return (
    <div className="App">
      <Router>
        <div >
          <Link to="/" className="backgroung"><img alt="Header image" id="backImg" width="100%" height="auto"
            src={BackgroundImg}/>
          </Link>
        </div>
        
        <Switch>
          <Route exact path="/" component={Menu}/>
          <Route path="/createSurvey" exact><CreateSurvey addQuestion={addQuestion}></CreateSurvey></Route>
          <Route path="/takeSurvey"><TakeSurvey qbank={qbank}></TakeSurvey></Route>
        </Switch>
      </Router>
    </div>
  );
}

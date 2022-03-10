import React, {useState, useLayoutEffect} from 'react';
import Signup from './Signup';
import {Container, Button} from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import Auditorium from './Auditorium';
import PodCast from './Podcast';
import MeetTheExpert from './MeetTheExpert';
import PoultryDhaba from './PoultryDhaba';
import ResourceCenter from './ResourceCenter';
import BuyersGuide from './BuyersGuide';
import FunZone from './FunZone';
import PuzzleGame from './PuzzleGame';
import DeviceOrientation, { Orientation } from 'react-screen-orientation'
import AutoRotate from '../images/Autorotate.png';
import './podcast.css';


function App() {

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

    const [width, height] = useWindowSize();

  return (
    <Container className="d-flex align-items-center justify-content-center"
              style={{maxWidth: "100%", height: "auto"}}>
      <div className="w-100">
        <Router>
          <AuthProvider>
          <Switch>
              {/* <PrivateRoute exact path="/" component={Signup}/> */}
              
              {/* <Route exact path="/" component={Signup}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/login" component={Login}/>
              <Route path="/forgot-password" component={ForgotPassword}/>
              <Route path="/podcast" component={PodCast}/>
              <Route path="/buyers-guide" component={BuyersGuide}/>
              <Route path="/recipeVideos" component={PoultryDhaba}/>
              <Route path="/meet-the-expert" component={MeetTheExpert}/>
              <Route path="/auditorium" component={Auditorium}/>
              <Route path="/resource-center" component={ResourceCenter}/> 
              <Route path="/fun-zone" component={FunZone}/>
              <Route path="/puzzle-game" component={PuzzleGame}/> */}
              {width > 468 ?
                <div>
                  <Route exact path="/" component={Signup}/>
                  <Route path="/dashboard" component={Dashboard}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/forgot-password" component={ForgotPassword}/>
                  <Route path="/podcast" component={PodCast}/>
                  <Route path="/buyers-guide" component={BuyersGuide}/>
                  <Route path="/recipeVideos" component={PoultryDhaba}/>
                  <Route path="/meet-the-expert" component={MeetTheExpert}/>
                  <Route path="/auditorium" component={Auditorium}/>
                  <Route path="/resource-center" component={ResourceCenter}/> 
                  <Route path="/fun-zone" component={FunZone}/>
                  <Route path="/puzzle-game" component={PuzzleGame}/>
                </div>
                : 
                <img className="imgCssM" src={AutoRotate}/>
              }
              {/* <DeviceOrientation lockOrientation={'landscape'}>
                <Orientation className="imgCss" orientation='portrait'>
                    <img className="imgCssM" src={AutoRotate}/>
                </Orientation>
                <Orientation orientation='landscape' alwaysRender={false}> */}
                {/* {width > 468 ?
                <div> */}
                  {/* <PrivateRoute path="/dashbaord" component={Dashboard}/>
                  <PrivateRoute path="/auditorium" component={Auditorium}/>
                  <PrivateRoute path="/podcast" component={PodCast}/>
                  <PrivateRoute path="/meet-the-expert" component={MeetTheExpert}/>
                  <PrivateRoute path="/resource-center" component={ResourceCenter}/> */}
                {/* </div>
                  :
                    <img className="imgCssM" src={AutoRotate}/>
                } */}
                {/* </Orientation>
              </DeviceOrientation> */}
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;

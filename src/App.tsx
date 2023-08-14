import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';
import Header from './pages/Header';
import Tabs from './pages/Tabs';
import Sports from './pages/Sports';
import LiveAndReal from './pages/LiveAndReal';
import Casino from './pages/Casino';
import Esports from './pages/Esports';
import Vegas from './pages/Vegas';
import { useState } from 'react';
import LoginModal from './pages/LoginModal';
import SignupModal from './pages/SignupModel';
import CTAComponent from './pages/CTAComponent';

setupIonicReact();

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false); 
  const [loggedInUser, setLoggedInUser] = useState<{ firstName: string, lastName: string } | undefined>();
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSignupSuccess = () => {
    setShowSignupModal(false);
    setShowModal(true);
    alert("User created successfully! Please log in.");
};
  return (
    <Router>
      <IonApp>
        <div className="app-container">
        <Header 
                        onLoginClick={() => setShowModal(true)}
                        onSignupClick={() => setIsSignupModalOpen(true)}
                        onLogoutClick={() => {
                            setLoggedInUser(undefined); 
                        }}
                        loggedInUser={loggedInUser}
                    />
         <LoginModal 
                        isOpen={showModal} 
                        onDismiss={() => setShowModal(false)} 
                        onLogin={(user) => {
                            setLoggedInUser(user);
                        }} 
                    />
        <SignupModal 
            isOpen={isSignupModalOpen} 
            onDismiss={() => setIsSignupModalOpen(false)}
            onSignup={(user) => {

            }}
            onSignupSuccess={handleSignupSuccess}
        />
        <Tabs />
        <IonContent>
            <Switch>
                <Route path="/sports" component={Sports} exact />
                <Route path="/live-and-real" component={LiveAndReal} exact />
                <Route path="/casino" component={Casino} exact />
                <Route path="/esports" component={Esports} exact />
                <Route path="/vegas" component={Vegas} exact />
            </Switch>
        </IonContent>
        <CTAComponent onJoinNowClick={() => setIsSignupModalOpen(true)} />
        </div>
      </IonApp>
    </Router>
  );
}

export default App;

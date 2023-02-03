import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Accueil/Home';

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
import Login  from "./pages/Client/Login";
/* Theme variables */
import './theme/variables.css';
import CreateEnchere from './pages/enchere/CreateEnchere';
import Stats from './pages/statistiques/Stat';
import Insert_Client_Page from './pages/Client/Inscription_Client';
import ListEncherePage from './pages/enchere/ListeEnchere/ListEncherePage';
import FicheEnchere from './pages/enchere/FicheEnchere';
import ListEnchereUtil from './pages/enchere/HistoriqueEnchere/HistoriqueEnchere';
import HistoriqueEnchere from './pages/enchere/HistoriqueEnchere/HistoriqueEnchere';
import Rechargement from './pages/mouvement/Rechargement';
import CreateProduit from './pages/produit/CreateProduit';
import Accueil from './pages/Accueil/Accueil';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/accueil">
          <Accueil />
        </Route>

        <Route exact path="/login">
        <Login />
        </Route>

        
        <Route exact path="/ins_mobile">
        <Insert_Client_Page />
        </Route>

{/* Enchere */}
        <Route exact path="/enchere/create">
        <CreateEnchere />
        </Route>

        <Route exact path="/encheres">
        <ListEncherePage />
        </Route>

        <Route exact path="/enchere/fiche">
        <FicheEnchere />
        </Route>

        <Route exact path="/recharge">
        <Rechargement/>
        </Route>

        <Route exact path="/produit/create">
        <CreateProduit/>
        </Route>

        

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonThumbnail, IonLabel, IonCardSubtitle, IonButton } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import Login from '../Client/Login';
import './Home.css';
import image from './images/default.png';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Enchere</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       <IonRow>
        <IonCol></IonCol>
        <IonCol>

        <IonCard>
            <IonCardHeader>
        <IonCardTitle>Connexion</IonCardTitle>
        <IonCardSubtitle>"Chasse au trésor,ou vente de ses biens"</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
       
          <IonItem>
            <IonThumbnail slot="start" style={{height:200,width:400}}>
              <img  src={image}  />
            </IonThumbnail>
           
          </IonItem>
          <Login></Login>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
            <IonLabel title='Inscription'>Vous n'avez pas encore de compte?</IonLabel>
            <IonItem>
            <IonButton href='/ins_mobile'>Inscrivez-vous!!</IonButton>

          </IonItem>
            </IonCol>
            <IonCol></IonCol>

          </IonRow>
       
          </IonCardContent>
    </IonCard>





        </IonCol>
        <IonCol>

        </IonCol>
       </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;

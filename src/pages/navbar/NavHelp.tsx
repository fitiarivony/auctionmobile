import { IonButtons,IonIcon, IonButton, IonMenu, IonListHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel,IonMenuToggle } from '@ionic/react';
import {menu} from 'ionicons/icons';

const NavHelp: React.FC = () => {
  return (
    <IonButtons slot="start">
    <IonMenuToggle>
      <IonButton>
        <IonIcon slot="icon-only" icon={menu}></IonIcon>
      </IonButton>
    </IonMenuToggle>
  </IonButtons>
  );
};


export default NavHelp;

import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import AddClientForm from './Form_Client';
import Client_insert from '../../interfaces/Client_insert';

const Insert_Client_Page: React.FC = () => {
    const [clients, setClients] = useState<Client_insert[]>([]);

    const handleAddClient = (client: Client_insert) => {
        setClients([...clients, client]);
    };

    
  
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Insertion de client</IonTitle>
                </IonToolbar>
            </IonHeader>
            <AddClientForm onAddClient={handleAddClient} />
        </IonPage>
    );
};

export default Insert_Client_Page;
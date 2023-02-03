import React, { useState } from 'react';
import { IonContent, IonInput, IonLabel, IonItem, IonButton } from '@ionic/react';
import Client_insert from '../../interfaces/Client_insert';
import URLHelper from '../../Helper/URLHelper';

interface Props {
    onAddClient: (client: Client_insert) => void;
}

const AddClientForm: React.FC<Props> = ({ onAddClient }) => {
    const [client, setClient] = useState<Client_insert>({
        nom: "",
        prenom: "",
        identifiant: "",
        mdp: "",
        dateNaissance: ""
    });

    

    const handleInput = (e: any) => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddClient(client);
        setClient({
            nom: "",
            prenom: "",
            identifiant: "",
            mdp: "",
            dateNaissance: ""
        });
        signup();
        
    };

    const signup=()=>{
        
        fetch(URLHelper.urlgen("utilisateur"),{method:'POST',headers:{ 'Content-Type': 'application/json'},body: JSON.stringify(client)})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            if (data.status === undefined) {
                 window.location.replace("/home");  
            }else{
                alert("erreur");
                console.log("echec");
            }
         })
    }

    return (
        <IonContent>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonLabel position="floating">Nom</IonLabel>
                    <IonInput
                        type="text"
                        name="nom"
                        value={client.nom}
                        onIonChange={handleInput}
                        required
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Prenom</IonLabel>
                    <IonInput
                        type="text"
                        name="prenom"
                        value={client.prenom}
                        onIonChange={handleInput}
                        required
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Identifiant</IonLabel>
                    <IonInput
                        type="text"
                        name="identifiant"
                        value={client.identifiant}
                        onIonChange={handleInput}
                        required
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Mot de passe</IonLabel>
                    <IonInput
                        type="password"
                        name="mdp"
                        value={client.mdp}
                        onIonChange={handleInput}
                        required
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Date de naissance</IonLabel>
                    <IonInput
                        type="date"
                        name="dateNaissance"
                        value={client.dateNaissance}
                        onIonChange={handleInput}
                        required
                    />
                </IonItem>
                <IonButton type="submit" expand="block">
                    Ajouter client
                </IonButton>
            </form>
        </IonContent>
    );
};

export default AddClientForm;

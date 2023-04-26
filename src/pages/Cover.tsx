import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonFooter,
  IonButton,
} from '@ionic/react';
import React from 'react';
import './Cover.css';

const Cover: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Cover</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Cover</IonTitle>
        </IonToolbar>
      </IonHeader>
      <h1 className="coverCentering">Rats</h1>
      <div className="coverCentering">
        <img src="./rats.jpg" width="300" height="auto"></img>
      </div>
      <h2 className="coverCentering">by Ben Johnson</h2>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonButton expand="block" routerLink="/toc">
          Start Reading
        </IonButton>
      </IonToolbar>
    </IonFooter>
  </IonPage>
);

export default Cover;

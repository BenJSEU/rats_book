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
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import React from 'react';
import { caretForwardOutline } from 'ionicons/icons';

const TOC: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Table of Contents</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">TOC</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonList inset={true}>
        <IonItem routerLink="/" routerDirection="back">
          <IonLabel>Cover</IonLabel>
        </IonItem>
        <IonItem routerLink="/chapter/1">
          <IonLabel>Chapter 1</IonLabel>
        </IonItem>
        <IonItem routerLink="/chapter/2">
          <IonLabel>Chapter 2</IonLabel>
        </IonItem>
        <IonItem routerLink="/chapter/3">
          <IonLabel>Chapter 3</IonLabel>
        </IonItem>
        <IonItem routerLink="/chapter/4">
          <IonLabel>Chapter 4</IonLabel>
        </IonItem>
        <IonItem routerLink="/chapter/5">
          <IonLabel>Chapter 5</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonButton expand="block" routerLink="/chapter/1">
          <IonIcon icon={caretForwardOutline} />
        </IonButton>
      </IonToolbar>
    </IonFooter>
  </IonPage>
);

export default TOC;

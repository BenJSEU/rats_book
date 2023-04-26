import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  caretBackOutline,
  caretForwardOutline,
  menuOutline,
} from 'ionicons/icons';

const Chapter5: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Chapter 5</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Chapter 5</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <p>
          That afternoon, Papa began to work feverishly on a perch for Jim as
          they didn't have a chair for him. Mama began to prepare her famous
          cabbage stew and Little slept soundly in his bed recovering from the
          day’s activities.
        </p>
        <p>
          Soon, it was time for dinner. Papa had finished the perch and Mama's
          stew was ready.
        </p>
        <p>Little awoke from his nap just as Jim arrived.</p>
        <p>
          The Rats sat in their chairs round the table and Jim on his perch.
        </p>
        <p>
          Mama served the cabbage stew to everyone and they all began eating.
        </p>
        <p>Everyone except for Jim.</p>
        <p>For Jim didn't like cabbage you see.</p>
        <p>Jim was a Hawk</p>
        <strong>And hawks eat mice and Rats for dinner!</strong>
      </IonContent>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                expand="block"
                routerLink="/chapter/4"
                routerDirection="back">
                <IonIcon icon={caretBackOutline} />
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                expand="block"
                routerLink="/toc"
                routerDirection="back">
                <IonIcon icon={menuOutline} />
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                disabled={true}
                expand="block"
                routerLink="/chapter/5"
                routerDirection="forward">
                <IonIcon icon={caretForwardOutline} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonFooter>
  </IonPage>
);

export default Chapter5;

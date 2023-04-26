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

const Chapter1: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Chapter 1</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Chapter 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <p>
          One day there was a family of rats that moved to a new home in the
          country. They had previously been evicted from their home in the city.
          Papa Rat had lost his job and they were no longer able to afford the
          rent of 1 cheese/month anymore, so Mr. Mole changed the locks while
          they were out to dinner one night and posted a note on their door.
        </p>
        <p>
          Upon arriving home, the Rats were distraught to find all their
          belongings out in the hallway. To make matters worse their neighbor,
          another rat named Pack, had beaten them home and had already stolen
          most of their belongings.
        </p>
        <p>
          Sad, dejected, and with nowhere to go, the Rats gathered what was left
          of the belongings and head to the countryside.You see, one day prior
          to the eviction, Mama Rat was eating in the local diner with Little
          rat (her son) when some strange looking creatures came into the diner.
        </p>
        <p>Mama and Little had never seen anything like them before.</p>
        <p>Mama: Hi, I've never seen anything like you before. What are you?</p>
        <p>
          Strange-Looking Guest: We are field mice and we come from the country.
        </p>
        <p>
          Mama: Well, you certainly are strange looking, but you seem nice
          enough. Tell me about this place called country.
        </p>
        <p>
          So, the field mice joined Mama and Little for lunch and told them all
          about the wonderful land named country. They talked for hours
          describing the wide-open fields, the abundance of crops available for
          the taking, and the many warm barns in which to live.
        </p>
        <p>
          That night, the Rats left the city and headed out in search of
          country. They wandered to and fro for many long and cold nights until
          they finally arrived at the land called country.
        </p>
      </IonContent>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                expand="block"
                routerLink="/toc"
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
                expand="block"
                routerLink="/chapter/2"
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

export default Chapter1;

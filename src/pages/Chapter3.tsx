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

const Chapter3: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Chapter 3</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Chapter 3</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <p>
          A few months later, something different happened. Little went out to
          the field but Jim didn't show up. Little waiting all day but still no
          Jim. The same thing happened the next day too. And the day after that
          and the day after that. Soon Jim gave up waiting for Jim.
        </p>
        <p>
          He began to play on his own again but always wondered where Jim was.
          Then one day, several months later, Jim returned.
        </p>
        <p>
          He seemed different than before. He no longer wanted to play games and
          instead was very quiet and solemn. He only seemed mildly interested in
          his friend Little. It began to concern Little so much that one day he
          decided to tell his parents about it.
        </p>
        <p>
          Little’s parents were very angry with him because they knew about
          hawks and how they liked to eat mice. They forbid Little from ever
          seeing Jim again.
        </p>
        <p>
          Little tried to reason with his parents. He tried to explain that they
          were Rats and not mice, but his parents wouldn't budge. They still
          refused to let Little see Jim again.
        </p>
        <p>
          The next, while Mama was knitting in the farmhouse and Papa was mining
          with the groundhogs, Little snuck out of the house. He looked all over
          the field and couldn't find Jim. He searched high and low, but still
          there was no sign of Jim. Finally, after hours of searching, Little
          spotted Jim down by the river. He remembered that Papa forbid him from
          going there. And he also remembered that he wasn't supposed to see
          Jim. He figured, I'm already in enough trouble, why not go down by the
          river.
        </p>
        <p>And so he did.</p>
        <p>Quickly, Little made his way down to the river.</p>
      </IonContent>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                expand="block"
                routerLink="/chapter/2"
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
                routerLink="/chapter/4"
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

export default Chapter3;

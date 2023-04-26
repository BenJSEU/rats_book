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

const Chapter2: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Chapter 2</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Chapter 2</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <p>
          They quickly realized that it was everything their friends, the field
          mice, had described. The fields were wide and open and there was an
          abundance for crops, free for the taking. Additionally, there were
          numerous huge barns in which the Rats could take residence. After
          filling their bellies with the corn, cabbage, and cantaloupes the Rats
          settled down in a small red barn down by a river (not to be confused
          with a van down by the river). The Rats were delighted with their new
          accommodations. The barn was expansive compared with their former
          place and there was plenty of room for Little to run and play outside.
        </p>
        <p>
          Papa: Little, there is plenty of room for you to run and play outside.
          Just be careful and don't go near the river.
        </p>

        <p>
          Little: Ok Papa, but why not go to the river. Its water is so cool and
          refreshing.
        </p>

        <p>
          Papa: There are many creatures out there that could hurt you, Little,
          and the waters are rough and could easily sweep you away.
        </p>

        <p>Papa: I don't want you going down there.</p>
        <p>
          So, the days turned into weeks, and the weeks into months. Papa found
          a job mining with the groundhogs and Mama even took a job at the
          farmhouse knitting sweaters. Little would spend his time playing in
          the field and soaking up the sun. He enjoyed nothing more than
          bouncing around the open areas and, if he could catch them, scooping
          up the field mice and bopping them on the head.
        </p>
        <p>
          Then one day, while Little was playing in the field and Mama was
          knitting in the farmhouse and Papa was mining with the groundhogs,
          Little met a new friend.
        </p>
        <p>
          This friend was unlike anything Little had ever seen. It has two large
          legs that were yellow like corn he was used to eating. And the legs
          end with the funniest looking toes he had ever seen. It also had the
          two largest arms Little had ever seen. They were easily twice as long
          as the creature’s body and were covered with this strange brown and
          white material. Its nose was also strange. It reminded Little of two
          canoes facing each other, one a little shorter than the other.
        </p>
        <p>Little: Hello, new friend, what are you?</p>

        <p>
          New Friend: Hello rat. I am a hawk and my name is Jim. do you want to
          play?
        </p>

        <p>Little: Sure!</p>

        <p>
          So Little and Jim began to play in the field. Little would run as fast
          as he could and Jim would scoop him up and fly high into the sky. They
          played this game over and over. Sometimes Little would try to trick
          Jim and turn at the last minute but Jim always managed to scoop him
          up.
        </p>

        <p>
          When the day was done Jim said to Little: I had a lot of fun. We
          should play tomorrow, but don't tell you parents. They probably
          wouldn't like it.
        </p>
        <p>Little: Ok. Bye Jim.</p>
        <p>
          And so it continued day after day. Little would meet Jim in the field
          and they would play all day and Jim would give the same warning at the
          end of the day.
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
                routerLink="/chapter/1"
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
                routerLink="/chapter/3"
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

export default Chapter2;

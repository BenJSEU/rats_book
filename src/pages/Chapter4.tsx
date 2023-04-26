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

const Chapter4: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Chapter 4</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Chapter 4</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <p>
          Upon arriving at the water's edge, he saw that Jim was on the other
          bank. He tried yelling across to Jim but the raging water was too
          loud. Jim couldn't hear him. So Little searched along the bank for a
          place he could cross. He found a spot where rocks dotted the water
          forming a path across. He decided to try and jump from rock to rock.
        </p>
        <p>
          The rocks were slippery and wet, but Little was agile. After all, he
          had been bounding through the fields for quite some time now.
        </p>
        <p>
          Little made it to the first rock. and then the second and third.
          Little was making short work of these rocks. He was bounding from one
          to the other as if it were nothing. Only 5 more to go.
        </p>
        <p>4</p>
        <p>3</p>
        <p>2</p>
        <p>And then it happened.</p>
        <p>
          As little was preparing to jump on the final rock a frog jumped into
          the water right next to the rock. This frightened Little and caused
          him to lose his balance.
        </p>
        <p>
          He stood on the rock swaying back and forth and forth and back before
          finally tumbling into the frigid water below
        </p>
        <p>Little cried out for help</p>
        <p>Little: Help! Help! Help!</p>
        <p>Little: Help me, Jim!</p>
        <p>
          Little was in luck! The movement of the frog had caught Jim's eye and
          he had turned to watch. He saw Little fall into the water and heard
          him yelling for help.
        </p>
        <p>
          Jim quickly took to the air and spotted Little floating down the
          river, struggling to stay afloat. Jim flew as high as he could and
          then turned downward. With a precision that made it look like he had
          practiced it a thousand times in the field, Jim swept down and scooped
          Little from the raging waters. He flew Little all the way back to the
          barn where he set him down.
        </p>
        <p>
          Seeing all of this, the frog spread the word of Jim's heroic act. Soon
          all the farm creatures knew that Jim had saved Little's life, even
          Papa and Mama. Papa and Mama were so glad that Little was alright and
          they were even more glad that Jim had saved Little. They invited Jim
          to the barn to have dinner with him that night.
        </p>
        <p>
          So, Jim left to go get ready for dinner and Papa and Mama took Little
          inside to rest.
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
                routerLink="/chapter/3"
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

export default Chapter4;

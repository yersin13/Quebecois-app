import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
  IonFabButton,
  IonButtons,
  IonToggle,
  IonButton,
  IonCard,
} from "@ionic/react";
import { addCircle, bookmarkOutline, bookOutline, chatboxOutline, chatbubbleOutline, chatbubbles, chatbubblesOutline, earthOutline, heart, heartOutline, moon, rocket, rocketOutline, sunny } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { NavButtons } from "./NavButtons";
import './Home.css';



export const Menu = () => {

  const [color, setColor] = useState('dark')
  const [showButton, setShowButton] = useState(false)

  const localStorageContent = localStorage.getItem('theme')



  useEffect(() => {

    if (localStorageContent == null) {
      localStorage.setItem('theme', "dark")
      document.body.classList.toggle('dark');


    } else if (localStorageContent?.match("dark")) {
      setShowButton(false)
      localStorage.setItem('theme', "dark")

      document.body.classList.toggle('dark');
    } else if (localStorageContent?.match("light")) {
      setShowButton(true)
      localStorage.setItem('theme', "light")

      document.body.classList.toggle('light');
    }

  }, []);

  const toggleDark = () => {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    setShowButton(false)
    localStorage.setItem('theme', "dark")
  }
  const toggleLight = () => {
    document.body.classList.toggle('light');
    document.body.classList.remove('dark');
    setShowButton(true)
    localStorage.setItem('theme', "light")
  }


  return (
    <IonMenu side="end" contentId="main">
      <IonHeader>
        <IonToolbar className="toolbar-home">

          <div className='home-div-logo '>

            <h4 className='home-text-logo padding-menu-others '><img className='home-logo' src="../assets/flor.png" alt="" /> Menu </h4>
            <IonButtons className="menu" slot="right">
              <NavButtons />
            </IonButtons>
          </div>

        </IonToolbar>

      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="false">

          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">

            <IonItem button className="menu-item-home" lines="none" routerLink={"/favWords"} routerDirection="none">
              <IonLabel><h4>Favorite Words</h4></IonLabel>


              <IonButton>
                <IonIcon color="light" className="fav-meme-chip" icon={bookOutline} />
              </IonButton>


            </IonItem>
            <IonItem button className="menu-item-home" lines="none" routerLink={"/favExpressions"} routerDirection="none">
              <IonLabel><h4>  Favorite Phrases</h4></IonLabel>

              <IonButton>
                <IonIcon color="light" className="fav-meme-chip" icon={chatbubblesOutline} />
              </IonButton>


            </IonItem>
            {/* <IonItem button className="menu-item-home" lines="none" routerLink={"/favCorner"} routerDirection="none">
              <IonLabel><h4>  Favorite Corner</h4></IonLabel>

              <IonButton>
                <IonIcon color="light" className="fav-meme-chip" icon={earthOutline} />
              </IonButton>


            </IonItem> */}
            <IonItem button className="menu-item-home" lines="none" routerLink={"/page-2"} routerDirection="none">
              <IonLabel><h4>  About Us</h4></IonLabel>

              <IonButton>
                <IonIcon color="light" className="fav-meme-chip" icon={rocketOutline} />
              </IonButton>


            </IonItem>
          </IonMenuToggle>

          <br />
          <br />
          <br />


          {showButton ?
            <IonCard onClick={toggleDark}>
              <IonItem lines="none">

                <IonLabel>Dark Mode</IonLabel>
                {/* <IonButton className="theme-button" > */}
                  <IonIcon color="primary" icon={moon} />
                {/* </IonButton> */}
              </IonItem>
            </IonCard>



            :
            <IonCard onClick={toggleLight}>
              <IonItem lines="none">

                <IonLabel>Light Mode</IonLabel>
                {/* <IonButton  > */}
                  <IonIcon color="light" icon={sunny} />
                {/* </IonButton> */}
              </IonItem>
            </IonCard>

          }

        </IonList>
      </IonContent>
    </IonMenu>
  );
};
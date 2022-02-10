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
} from "@ionic/react";
import { addCircle, bookmarkOutline, bookOutline, chatboxOutline, chatbubbleOutline, chatbubbles, chatbubblesOutline, earthOutline, heart, heartOutline, rocket, rocketOutline } from "ionicons/icons";
import React from "react";
import { NavButtons } from "./NavButtons";

export const Menu = () => {
  return (
    <IonMenu side="end" contentId="main">
      <IonHeader>
      <IonToolbar className="toolbar-home">
         
         <div className='home-div-logo '>
       
              <h4 className='home-text-logo padding-menu-others '><img className='home-logo' src="../assets/flor.png" alt="" /> Menu </h4>
              <IonButtons className="menu"  slot="right">
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
              
              
                <IonIcon color="secondary" className="fav-meme-chip" icon={bookOutline}  />
            
                </IonItem>
            <IonItem button className="menu-item-home" lines="none" routerLink={"/favExpressions"} routerDirection="none">
              <IonLabel><h4>  Favorite Phrases</h4></IonLabel> 
              
              <IonIcon color="secondary" className="fav-meme-chip" icon={chatbubblesOutline}  />
            
                </IonItem>
            <IonItem button className="menu-item-home" lines="none" routerLink={"/favCorner"} routerDirection="none">
              <IonLabel><h4>  Favorite Corner</h4></IonLabel> 
              
              <IonIcon color="secondary" className="fav-meme-chip" icon={earthOutline}  />
            
                </IonItem>
            <IonItem button className="menu-item-home" lines="none" routerLink={"/page-2"} routerDirection="none">
              <IonLabel><h4>  About Us</h4></IonLabel> 
              
              <IonIcon color="secondary" className="fav-meme-chip" icon={rocketOutline}  />
            
                </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
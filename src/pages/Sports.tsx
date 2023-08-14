import React, { useState, useEffect } from 'react';
import { IonPage, IonContent } from '@ionic/react';

const Sports: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (window.location.pathname === '/sports') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [window.location.pathname]); 

  return (
    <IonPage style={isActive ? { '--ion-color-primary': '#00a826', '--ion-color-primary-tint': '#22b839' } : {}}>
      <IonContent>
        <h1>Sports Page</h1>
      </IonContent>
    </IonPage>
  );
}

export default Sports;
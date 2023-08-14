import React, { useState } from 'react';
import { IonRow, IonCol, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Tabs.css';

const Tabs: React.FC = () => {
    const history = useHistory();
    const [activeTab, setActiveTab] = useState<string>('');

    return (
        <IonRow style={{ backgroundColor: 'grey', justifyContent: 'center' }}>
            <IonCol size="2">
                <IonButton 
                    fill="clear" 
                    color={activeTab === 'sports' ? 'success' : 'light'} 
                    onClick={() => {
                        setActiveTab('sports');
                        history.push('/sports');
                    }}>
                    Sports
                </IonButton>
            </IonCol>
            <IonCol size="2">
                <IonButton 
                    fill="clear" 
                    color={activeTab === 'live-and-real' ? 'success' : 'light'} 
                    onClick={() => {
                        setActiveTab('live-and-real');
                        history.push('/live-and-real');
                    }}>
                    Live & Real
                </IonButton>
            </IonCol>
            <IonCol size="2">
                <IonButton 
                    fill="clear" 
                    color={activeTab === 'casino' ? 'success' : 'light'} 
                    onClick={() => {
                        setActiveTab('casino');
                        history.push('/casino');
                    }}>
                    Casino
                </IonButton>
            </IonCol>
            <IonCol size="2">
                <IonButton 
                    fill="clear" 
                    color={activeTab === 'esports' ? 'success' : 'light'} 
                    onClick={() => {
                        setActiveTab('esports');
                        history.push('/esports');
                    }}>
                    Esports
                </IonButton>
            </IonCol>
            <IonCol size="2">
                <IonButton 
                    fill="clear" 
                    color={activeTab === 'vegas' ? 'success' : 'light'} 
                    onClick={() => {
                        setActiveTab('vegas');
                        history.push('/vegas');
                    }}>
                    Vegas
                </IonButton>
            </IonCol>
        </IonRow>
    );
}

export default Tabs;
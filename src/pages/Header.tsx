import React from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonLabel
} from '@ionic/react';

import './Header.css'

interface HeaderProps {
    onLoginClick: () => void;
    onSignupClick: () => void;
    onLogoutClick?: () => void; 
    loggedInUser?: { firstName: string, lastName: string };
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onSignupClick, onLogoutClick, loggedInUser }) => {
    return (
        <IonHeader>
            <IonToolbar color="dark">
                <IonTitle slot="start">
                    <img src="public/logo.png" alt="Betway Logo" style={{ height: '40px' }} />
                </IonTitle>
                <IonButtons slot="end">
                    {loggedInUser ? (
                        <>
                            <IonLabel>Welcome, {loggedInUser.firstName} {loggedInUser.lastName}</IonLabel>
                            <IonButton onClick={onLogoutClick}>Logout</IonButton>
                        </>
                    ) : (
                        <>
                            <IonButton className="login-btn" onClick={onLoginClick}>Login</IonButton>
                            <IonButton fill="outline" className="signup-btn" onClick={onSignupClick}>Signup</IonButton>
                        </>
                    )}
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;
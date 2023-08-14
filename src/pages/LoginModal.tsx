import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonInput, IonItem } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { userService } from '../services/userService';

interface Props {
    isOpen: boolean;
    onDismiss: () => void;
    onLogin: (user: any) => void;
}


const LoginModal: React.FC<Props> = ({ isOpen, onDismiss, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [token, setToken] = useState('')
    const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null);

    const handleLogin = async () => {
        let isValid = true;

        if (!email) {
            setEmailError('Email is required!');
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError('Enter a valid email address.');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required!');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            try {
                const response = await userService.login(email, password);
                setToken(response.token);
                onLogin(response.userInfo);
                onDismiss();
            } catch (error) {
                if (error instanceof Error) {
                    setApiErrorMessage(error.message);
                } else {
                    setApiErrorMessage(String(error));
                }
            }
        }
    };

    return (
        <IonModal isOpen={isOpen} onDidDismiss={onDismiss}>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent style={{ padding: '20px' }}>
            {apiErrorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{apiErrorMessage}</p>}
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '16px' }}>
                    New Customer?
                    <IonButton fill="clear" color="success" href="/register">
                        Register here
                    </IonButton>
                </div>
                <IonItem>
                    <IonLabel>Username</IonLabel>
                    <IonInput value={email} placeholder="Enter Email" onIonChange={e => setEmail(e.detail.value!)} clearInput />
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>} 
                </IonItem>
                <IonItem>
                    <IonLabel>Password</IonLabel>
                    <IonInput type="password" value={password} placeholder="Enter Password" onIonChange={e => setPassword(e.detail.value!)} clearInput />
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                </IonItem>
                <IonButton expand="block" color="success" onClick={handleLogin}>Login</IonButton>
                <IonButton fill="clear" href="/forgot-password">
                    Forgot username/password?
                </IonButton>
            </IonContent>
        </IonModal>
    );
}

export default LoginModal;


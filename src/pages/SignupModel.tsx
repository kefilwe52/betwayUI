import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonInput, IonItem } from '@ionic/react';
import React, { useState } from 'react';
import { userService } from '../services/userService';

interface Props {
    isOpen: boolean;
    onDismiss: () => void;
    onSignup: (user: Partial<User>) => void;
    onSignupSuccess: () => void;
}

const SignupModal: React.FC<Props> = ({ isOpen, onDismiss, onSignup,onSignupSuccess }) => {
    const [user, setUser] = useState<Partial<User>>({});
    const [errors, setErrors] = useState<Partial<User>>({});
    const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null);

    const handleSignup = async () => {
        let isValid = true;
        const newErrors: Partial<User> = {};

        if (!user.FirstName?.trim()) {
            newErrors.FirstName = 'First name is required.';
            isValid = false;
        }

        if (!user.LastName?.trim()) {
            newErrors.LastName = 'Last name is required.';
            isValid = false;
        }

        if (!user.Email?.trim() || !/^\S+@\S+\.\S+$/.test(user.Email)) {
            newErrors.Email = 'Enter a valid email address.';
            isValid = false;
        }

        if (!user.Password?.trim()) {
            newErrors.Password = 'Password is required.';
            isValid = false;
        }

        if (!user.MobileNumber?.trim()) {
            newErrors.MobileNumber = 'Mobile number is required.';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            try {
                await userService.signup(user); 
                onSignup(user);
                onSignupSuccess();
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
                    <IonTitle>Signup</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent style={{ padding: '10px' }}>
            {apiErrorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{apiErrorMessage}</p>}
                <IonItem>
                    <IonLabel>First Name</IonLabel>
                    <IonInput value={user.FirstName} placeholder="Enter First Name" onIonChange={e => setUser({ ...user, FirstName: e.detail.value! })} clearInput />
                    {errors.FirstName && <p style={{ color: 'red' }}>{errors.FirstName}</p>}
                </IonItem>
                <IonItem>
                    <IonLabel>Last Name</IonLabel>
                    <IonInput value={user.LastName} placeholder="Enter Last Name" onIonChange={e => setUser({ ...user, LastName: e.detail.value! })} clearInput />
                    {errors.LastName && <p style={{ color: 'red' }}>{errors.LastName}</p>}
                </IonItem>
                <IonItem>
                    <IonLabel>Email</IonLabel>
                    <IonInput type="email" value={user.Email} placeholder="Enter Email" onIonChange={e => setUser({ ...user, Email: e.detail.value! })} clearInput />
                    {errors.Email && <p style={{ color: 'red' }}>{errors.Email}</p>}
                </IonItem>
                <IonItem>
                    <IonLabel>Password</IonLabel>
                    <IonInput type="password" value={user.Password} placeholder="Enter Password" onIonChange={e => setUser({ ...user, Password: e.detail.value! })} clearInput />
                    {errors.Password && <p style={{ color: 'red' }}>{errors.Password}</p>}
                </IonItem>
                <IonItem>
                    <IonLabel>Mobile Number</IonLabel>
                    <IonInput type="tel" value={user.MobileNumber} placeholder="Enter Mobile Number" onIonChange={e => setUser({ ...user, MobileNumber: e.detail.value! })} clearInput />
                    {errors.MobileNumber && <p style={{ color: 'red' }}>{errors.MobileNumber}</p>}
                </IonItem>

                <IonButton expand="block" color="success" onClick={handleSignup}>Signup</IonButton>
            </IonContent>
        </IonModal>
    );
}

export default SignupModal;



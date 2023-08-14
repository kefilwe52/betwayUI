import React from 'react';
import { IonButton, IonLabel } from '@ionic/react';
import './CTAComponent.css';

interface CTAProps {
    onJoinNowClick: () => void;
}

const CTAComponent: React.FC<CTAProps> = ({ onJoinNowClick }) => {
    return (
        <div className="cta-panel">
            <div className="cta-label">SPORTS NEW CUSTOMER OFFER</div>
            <div className="cta-label">Get up to $10 in Free Bets</div>
            <IonButton className="cta-button" onClick={onJoinNowClick}>Join Now</IonButton>
        </div>
    );
}

export default CTAComponent;;
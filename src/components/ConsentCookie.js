import React from 'react';
import CookieConsent from 'react-cookie-consent';

const ConsentCookie = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Aksepterer"
            cookieName="consentCookie"
            style={{ background: '#000' }}
            buttonStyle={{ backgroundColor: '#C199A6', color: '#fff', fontSize: '12px', textTransform: 'uppercase' }}
            expires={150}
        >
            <span style={{ fontSize: '10px', fontFamily: 'Roboto Condensed' }}>
                Nettstedet bruker cookies for å bedre møte dine forventninger. Hvis du ikke aksepterer cookies, kan du
                deaktivere den i innstillingene til nettleseren din. Men det er en risiko for at enkelte funksjoner på
                www.eskeinterior.no ikke vil fungere korrekt.
            </span>
        </CookieConsent>
    );
};

export default ConsentCookie;

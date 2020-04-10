import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';
import { TERMS } from '../utils/urlRoutes';

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
                www.eskeinterior.no ikke vil fungere korrekt. &nbsp;
                <Link style={{ fontSize: '10px', fontFamily: 'Roboto Condensed', color: '#C199A6' }} to={TERMS.path}>
                    Personvern
                </Link>
            </span>
        </CookieConsent>
    );
};

export default ConsentCookie;

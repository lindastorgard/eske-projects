import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPI = (param, projectId = '') => {
    // ---- State
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState(null);
    const [category, setCategory] = useState(null);
    const [landingpage, setLandingpage] = useState(null);
    const [aboutpage, setAboutpage] = useState(null);
    const [termsPage, setTermsPage] = useState(null);
    const [servicespage, setServicespage] = useState(null);
    const [contactpage, setContactpage] = useState(null);
    const [project, setProject] = useState(null);

    // ---- API

    const fetchCategories = async () => {
        setError(null);
        try {
            setIsLoading(true);
            const result = await axios('https://eskeprosjekt.no/wp/wp-json/wp/v2/main_categories');
            setCategories(result.data);
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };

    const fetchCategory = async () => {
        setError(null);
        try {
            setIsLoading(true);
            const result = await axios(
                `https://eskeprosjekt.no/wp/wp-json/wp/v2/projects?filter[meta_key]=project_type&filter[meta_compare]=LIKE&filter[meta_value]=${param}&filter[orderby]=modified&per_page=100`,
            );
            setCategory(result.data);
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };
    const fetchLandingpage = async () => {
        setError(null);
        try {
            setIsLoading(true);
            const result = await axios('https://eskeprosjekt.no/wp/wp-json/wp/v2/landing_page');
            setLandingpage(result.data);
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };
    const fetchAboutPage = async () => {
        setError(null);
        try {
            setIsLoading(true);
            const result = await axios('https://eskeprosjekt.no/wp/wp-json/wp/v2/about_page');
            setAboutpage(result.data);
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };

    const fetchServicesPage = async () => {
        setError(null);
        try {
            setIsLoading(true);
            const result = await axios('https://eskeprosjekt.no/wp/wp-json/wp/v2/tjenster_page');
            setServicespage(result.data);
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };

    const fetchContactPage = async () => {
        setError(null);
        try {
            setIsLoading(true);
            const result = await axios('https://eskeprosjekt.no/wp/wp-json/wp/v2/contact_page');
            setContactpage(result.data);
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };

    const fetchProductWIthId = async () => {
        setError(null);
        try {
            setIsLoading(true);
            const result = await axios(`https://eskeprosjekt.no/wp/wp-json/wp/v2/projects?include[]=${projectId}`);
            setProject(result.data);
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };

    const fetchTermsAndConditions = async () => {
        setError(null);
        try {
            setIsLoading(true);
            const result = await axios('https://eskeprosjekt.no/wp/wp-json/wp/v2/personvern');
            setTermsPage(result.data);
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
        fetchCategory();
        if (param) {
            fetchCategory();
        }
        fetchLandingpage();
        fetchAboutPage();
        fetchContactPage();
        fetchServicesPage();
        fetchTermsAndConditions();
        if (projectId) {
            fetchProductWIthId();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param, projectId]);

    return {
        category,
        categories,
        landingpage,
        aboutpage,
        contactpage,
        servicespage,
        termsPage,
        project,
        isLoading,
        error,
    };
};
export default useAPI;

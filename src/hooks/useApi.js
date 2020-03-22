import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPI = param => {
    // ---- State
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState(null);
    const [category, setCategory] = useState(null);
    const [landingpage, setLandingpage] = useState(null);
    const [aboutpage, setAboutpage] = useState(null);

    // ---- API

    const fetchCategories = async () => {
        setError(null);
        try {
            setIsLoading(true);
            const result = await axios('http://eskeprosjekt.no/wp-json/wp/v2/main_categories');
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
                `http://eskeprosjekt.no/wp-json/wp/v2/projects?filter[meta_key]=project_type&filter[meta_compare]=LIKE&filter[meta_value]=${param}`,
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
            const result = await axios('http://eskeprosjekt.no/wp-json/wp/v2/landing_page');
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
            const result = await axios('http://eskeprosjekt.no/wp-json/wp/v2/about_page');
            setAboutpage(result.data);
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };

    // const fetchProductWIthId = async () => {
    //     setError(null);
    //     try {
    //         setIsLoading(true);
    //         const result = await axios(
    //             `http://eskeprosjekt.no/wp-json/wp/v2/products?include[]=470&include[]=${productId.productId}`,
    //         );
    //         setProduct(result.data);
    //     } catch (e) {
    //         setError(e.toString());
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };
    // };

    useEffect(() => {
        fetchCategories();
        fetchCategory();
        if (param) {
            fetchCategory();
        }
        fetchLandingpage();
        fetchAboutPage();
        // if (productId) {
        //     fetchProductWIthId();
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param]);

    return {
        category,
        categories,
        landingpage,
        aboutpage,
        // data,
        // product,
        isLoading,
        error,
    };
};
export default useAPI;

import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPI = () => {
    // ---- Local Storage
    const categoryFilter = localStorage.getItem('category');
    // ---- State
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState(null);
    // const [category, setCategory] = useState(null);
    // const [product, setProduct] = useState(null);

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

        // const fetchCategory = async () => {
        //     setError(null);
        //     try {
        //         setIsLoading(true);
        //         const result = await axios(
        //             `http://eskeprosjekt.no/wp-json/wp/v2/main_categories?filter[meta_key]=title&filter[meta_compare]=LIKE&filter[meta_value]=${categoryFilter}`,
        //         );
        //         setCategory(result.data);
        //     } catch (e) {
        //         setError(e.toString());
        //     } finally {
        //         setIsLoading(false);
        //     }
        // };

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
        // if (productId) {
        //     fetchProductWIthId();
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
    // [countryFilter, categoryFilter]
    );

    return { 
        // category, 
        categories, 
        // data, 
        // product, 
        isLoading, 
        error 
    };
};
export default useAPI;

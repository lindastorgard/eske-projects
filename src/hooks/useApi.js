import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPI = param => {
    // ---- Local Storage
    const categoryFilter = localStorage.getItem('category');
    // ---- State
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState(null);
    const [category, setCategory] = useState(null);
    const [landingpage, setLandingpage] = useState(null);

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
        console.log('im running');
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
        // if (productId) {
        //     fetchProductWIthId();
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryFilter, param]);

    return {
        category,
        categories,
        landingpage,
        // data,
        // product,
        isLoading,
        error,
    };
};
export default useAPI;

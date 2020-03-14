import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPI = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    // ---- API

    const fetchData = async () => {
        setError(null);
        try {
            setIsLoading(true);
            const result = await axios(
                'http://eskeprosjekt.no/wp-json/wp/v2/projects?filter[meta_key]=project_type&filter[meta_compare]=LIKE&filter[meta_value]=residential',
            );
            setData(result.data);
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // console.log(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, isLoading, error };
};
export default useAPI;

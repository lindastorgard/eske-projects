import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;
        script.dataset.pinBuild = 'doBuild';
        script.defer = true;

        document.body.appendChild(script);
        if (window.doBuild) window.doBuild();
    }, [url]);
};

export default useScript;

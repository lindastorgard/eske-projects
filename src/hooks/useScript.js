import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;
        script.dataset.pinBuild = 'doBuild';

        document.body.appendChild(script);
        if (window.doBuild) window.doBuild();

        return () => {
            document.body.removeChild(script);
        };
    }, [url]);
};

export default useScript;

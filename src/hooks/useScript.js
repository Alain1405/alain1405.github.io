import { useEffect } from 'react';

const useScript = ({url = null, defer = false, __html = ""}) => {
    useEffect(() => {
        const script = document.createElement('script');

        if(url) script.src = url;
        script.defer = defer;
        console.log(__html)
        script.dangerouslySetInnerHTML = {__html: __html};

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url, defer, __html]);
};

export default useScript;
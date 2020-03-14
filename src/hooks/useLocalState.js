import { useState } from 'react';

function useLocalState(localItem) {
    const [loc, setState] = useState(localStorage.getItem(localItem));
    function setLoc(newItem) {
        localStorage.setItem(localItem, newItem);
        setState(newItem);
    }
    return [loc, setLoc];
}

export default useLocalState;
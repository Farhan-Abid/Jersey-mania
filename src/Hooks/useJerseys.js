import { useEffect, useState } from "react"

const useJerseys = () => {
    const [jerseys, setJerseys] = useState([]);
    useEffect( () => {
        fetch('generated.json')
        .then(res => res.json())
        .then(data => setJerseys(data));

    }, []);

    return [jerseys, setJerseys];
}

export default useJerseys;
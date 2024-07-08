import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null); // set initial value of blogs to null
    const [isPending, setIsPending] = useState(true);

    // fetching(requesting) data from API when component first renders
    useEffect(() => {
        fetch(url) // promess
        .then(res => { // we get response object
            return res.json(); // pass json into a javascript object
        })
        .then(data => { // another promess once we get data
            setData(data)
            setIsPending(false)
        })
    }, [url]) // dependency array controls when useEffect function runs.  Only on initial render

    return {data, isPending}
}
export default useFetch;
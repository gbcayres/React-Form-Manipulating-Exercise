import { useState } from "react"

function usePost(url) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const postData = async (postingData) => {
        try {
            setIsLoading(true);
            setError(null);
            setData(null)

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(postingData)
            })
            
            const responseData = await response.json();
            console.log(responseData);
            setData(responseData);
        } catch(error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    } 

    return { postData, data, isLoading, error }
}

export default usePost
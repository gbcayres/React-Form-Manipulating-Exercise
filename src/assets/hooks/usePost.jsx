import { useState } from "react"

function usePost(url) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (postingData, openModal) => {
        try {
            setIsLoading(true);
            setError(null);
            
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(postingData)
            })

            if(response.ok) {
                openModal();
            } 
        } catch(error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    } 

    return { postData, isLoading, error }
}

export default usePost
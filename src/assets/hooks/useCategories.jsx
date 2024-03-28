import { useState, useEffect } from "react"

const useCategories = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategories = async ()  => {
            try {
                const response = await fetch('http://localhost:5000/categories', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'Application/json'
                    }
                });
                const data = await response.json();
                setCategorias(data);
                console.log(data)
            } catch(error) {
                console.log('error:', error);
            }

        }
        
        fetchCategories();
    }, [])

    return categorias;
}

export default useCategories
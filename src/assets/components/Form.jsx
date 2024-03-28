import { useState } from "react"
import useCategories from "../hooks/useCategories"
import usePost from "../hooks/usePost"

import Input from "./Input"
import Select from "./Select"
import Button from "./Button"

function Form() {
    const categories = useCategories();
    const [item, setItem] = useState({});
    const {postData, data, isLoading, error} = usePost('http://localhost:5000/i');

    console.log(item);

    const handleInput = (e) => {
        const { name, value} = e.target;
        setItem({
            ...item,
            [name]: value
        })
    }

    const handleSelect = (e) => {
        const { value, options, selectedIndex } = e.target;
        setItem({
            ...item,
            category: {
                id: value,
                name: options[selectedIndex].text
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(item)
        console.log(item);
    }

    return (
     <form onSubmit={handleSubmit} >
        <Input 
            label="nome:"
            type="text"
            name="name"
            placeholder="Digite o nome do item"
            handleChange={handleInput}
        />
        <Input 
            label="preço:"
            type="number"
            name="price"
            placeholder="Digite o preço do item"
            handleChange={handleInput}
        />
        <Select
            label="categoria"
            name="category"
            options={categories}
            handleChange={handleSelect}
        />
        {isLoading ? (
            <Button text="Enviando..." disabled/>
        ) : (
            <Button text="Enviar" />
        )}

        {error && <p>Ocorreu um erro: {error}</p>}
        {data && <p>Dados cadastrados com sucesso!</p>}
    </form>
  )
}

export default Form
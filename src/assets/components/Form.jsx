import { useState } from "react"
import useCategories from "../hooks/useCategories"
import usePost from "../hooks/usePost"

import Input from "./ui/Input"
import Select from "./ui/Select"
import Button from "./ui/Button"
import Modal from "./ui/modal/Modal"

function Form() {
    const categories = useCategories();
    const [item, setItem] = useState({});
    const {postData, isLoading, error} = usePost('http://localhost:5000/itens');

    const [isModalOpen, setIsModalOpen] = useState(false);

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
        postData(item, openModal)
    }

    const openModal = () => {
        if(!isModalOpen) {
            setIsModalOpen(true);
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
     <>
        <h1 className="title">Form</h1>
        <form className="form" onSubmit={handleSubmit} >
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

            {error && <p className="error_message">Ocorreu um erro: {error}</p>}
        </form>
        
        {isModalOpen && (
            <Modal 
                title="Notificação"
                onClose={closeModal}
                actions={[
                    {text: "Ok", color: "blue", handleClick: closeModal}
                ]}
            >
                <p>O item foi cadastrado com sucesso!</p>
            </Modal>
        )}
     </>
  )
}

export default Form
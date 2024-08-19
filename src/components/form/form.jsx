import { useState } from "react";

const Form = () =>{
//Estado inicial do formulário
const initialForm ={
    nome: "",
}

//Estado do formulário
const [formState, setFormState] = useState(initialForm);

// Função para lidar com a alteração dos campos de entrada

const handleInput = (event) =>{
    //Obter valor e o nome do campo de entrada
    const target = event.currentTarget;
    //Extrair valor e o nome do campo de entrada
    const {value, name} = target;

    //atualizar o estado do formulário com os novos valores
    setFormState({...formState, [name]: value})
}

// Função para lidar com a submissão do formulário
const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(formState.nome);
// Após o submit retorna o valor nulo no input
    setFormState({... initialForm})
}


    return (
        <div className="containerForm">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formState.nome}
                        onChange={handleInput}
                    />
                </div>  
                <div className="form-control">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}
export default Form;
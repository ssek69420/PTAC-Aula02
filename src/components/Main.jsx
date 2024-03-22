import { useState } from "react";

export default function Main(){
    const [name, setName] = useState("")
    const [telefone, setTelefone] = useState(0)
    const [listaContatos, setListaContatos] = useState([])

    const registrar = (event) =>{
        event.preventDefault();
        alert("Olá ${name}")
    }

    return(
<main> 
    <form action="" onSubmit={registrar}>
    <label htmlFor="name">Name: </label>
        <input
        type="text"
        name="name-contato"
        id="name"
        value={name}
        onChange={(event)=> setName(event.target.value)}
        />

        <label htmlFor="telefone">Phone:</label>
        <input
            type="tel"
            name="telefone-contato"
            id="telefone"
            value={telefone}

            onChange={(event) => setTelefone(event.target.value)}
            />
            <button>Salvar:</button>
        </form>
</main>

    )

}
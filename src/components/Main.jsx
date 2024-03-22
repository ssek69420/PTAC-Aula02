import { useState } from "react";

export default function Main(){
    const [name, setName] = useState("")

    return(
<main> 
        <input
        type="text"
        name=""
        id=""
        onChange={(event)=> setName(event.target.value)}
        />
    {name}
</main>

    )

}
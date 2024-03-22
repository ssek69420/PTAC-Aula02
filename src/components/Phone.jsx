import { useState } from "react";

export default function Phone(){
    const [number, setNumber] = useState("") //not used (yet)

    return(
       <main>
        <form>
            <label><b>Phone number:</b></label>
        <input
        type="tel"
        />
    <button>submit</button>
        </form>
       </main>
    )


}
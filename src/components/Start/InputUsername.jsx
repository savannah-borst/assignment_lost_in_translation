//import { useState } from "react";


function InputUsername() {
    //const [ user, setUser ] = useState();

    return (
        <form>
            <input id="username" type="text" placeholder="What's your name?"/>
            <button className="material-icons" type="submit">arrow_forward</button>

        </form>
    )
}

export default InputUsername;
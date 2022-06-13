import React, {useState} from 'react';
import ReactDOM from "react-dom";

function Decendent1() {
    const [display, setDisplay] = useState(false);
    const SendPortal = () => {
        const Content = <div>Essa mensagem veio do portal</div>
        return ReactDOM.createPortal(Content, document.getElementById("Portal"));
    }
    return (
      <>
        <button type='button' onClick={ () => setDisplay(true)}>Criar portal</button>
        {display && <SendPortal />}
      </>
    )
}
export default Decendent1;
import React from "react";
import styles from "./ComponentConditionalRendering.module.css"; // Importação do arquivo CSS com módulos

// Este componente usa renderização condicional para exibir conteúdo diferente baseado no estado de 'props' e variáveis internas.
const ComponentConditionalRendering = (props) => {

    // Define o conteúdo a ser exibido se o usuário estiver logado (props.name existir)
    const loggedIn = <p className={styles.loggedIn}>Hello {props.name}</p>;
    
    // Define o conteúdo a ser exibido se o usuário NÃO estiver logado (props.name estiver ausente)
    const notLoggedIn = <p className={styles.makeLogin}>Please make the login</p>;

    // Um exemplo de renderização condicional com uma flag booleana interna
    const flag = props.flag;
    const ifFlagTrue = <strong><p>True</p></strong>;  // Renderiza se 'flag' for verdadeiro
    const ifFlagFalse = <strong><p>False</p></strong>; // Renderiza se 'flag' for falso

    return (
        <>
            {/* Renderiza 'loggedIn' ou 'notLoggedIn' dependendo se props.name estiver presente */}
            {props.name ? loggedIn : notLoggedIn}
            
            {/* Renderiza conteúdo baseado no valor de 'flag' */}
            {flag ? ifFlagTrue : ifFlagFalse}
        </>
    );
}

export default ComponentConditionalRendering;



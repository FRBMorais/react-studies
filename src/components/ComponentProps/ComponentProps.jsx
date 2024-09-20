import React from 'react';
import PropTypes from 'prop-types';

// Em React, um componente é uma função que retorna elementos JSX e pode receber props (propriedades).
// Props são usadas para passar dados para o componente pai para os filhos.
// Mais informações sobre 'prop-types' podem ser encontradas em node_modules/prop-types/README.md.

const ComponentProps = (props) => {
    // Retorna elementos JSX com os valores das props.
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.content}</p>
        </>
    );
};

// PropTypes verifica o tipo das props no desenvolvimento, prevenindo erros.
// O uso de PropTypes é especialmente útil quando o componente lida com dados dinâmicos e externos.
ComponentProps.propTypes = {
    title: PropTypes.string.isRequired, // Define que 'title' é obrigatório e deve ser string.
    subtitle: PropTypes.string,         // Opcional, mas precisa ser uma string.
    content: PropTypes.string,          // Também opcional e do tipo string.
};

// defaultProps garante que, se não forem passadas props, o componente tenha valores padrão.
// Isso evita verificações manuais e valores indefinidos.
ComponentProps.defaultProps = {
    title: "Título padrão",       // Default para 'title'.
    subtitle: "Subtítulo padrão", // Default para 'subtitle'.
    content: "Conteúdo padrão",   // Default para 'content'.
};

export default ComponentProps;

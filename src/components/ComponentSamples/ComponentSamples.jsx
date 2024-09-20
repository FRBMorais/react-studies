import React from 'react';

// Em React, um componente é uma função que retorna elementos JSX (uma mistura de HTML e JavaScript).
// Temos 3 formas principais de declarar funções em JavaScript que podem ser usadas para criar componentes.

// 1. Usando Arrow Function (função de seta)
// Esse é o método mais moderno e frequentemente utilizado para declarar componentes em React.
// As Arrow Functions são anônimas e possuem uma sintaxe mais concisa, além de manter o contexto do `this` intacto.

const ComponentSample1 = () => {

    // body disponivel para codigo javascript
    
    return (
        // Componentes React devem sempre retornar um único elemento JSX.
        // Este único elemento pode ser uma tag <div>, <section>, ou um Fragment (<> </>), 
        // que serve como um contêiner para outros elementos.
        <>
            <h1>Arrow Function Component</h1>
            <p>Esse componente foi declarado usando uma Arrow Function.</p>
        </>
    );
};

// 2. Usando Function Declaration (declaração de função)
// Esse é o método tradicional de declarar funções no JavaScript, também conhecido como função nomeada.
// Apesar de ser menos comum em projetos React modernos, ainda é válido e frequentemente usado em componentes simples.

const ComponentSample2 = function() {
    return (
        <>
            <h1>Function Declaration Component</h1>
            <p>Esse componente foi declarado usando a declaração de função tradicional.</p>
        </>
    );
}

// 3. Usando Function Expressions (funções clássicas)
// Esta é a maneira clássica de declarar uma função em JavaScript. É semelhante ao método acima, 
// mas essa função é atribuída diretamente a uma variável e não pode ser chamada antes de sua definição.

function ComponentSample3() {
    return(
        <>
            <h1>Classic Function Component</h1>
            <p>Esse componente foi declarado usando uma Function Expression clássica.</p>
        </>
    );
}

// Exportar um componente permite que ele seja utilizado em outros arquivos do projeto.
// Apenas um `export default` pode ser feito por arquivo, por isso aqui apenas um está ativo de cada vez.
export default ComponentSample1;
// Para testar outros componentes, descomente a linha correspondente e comente o `export default` acima:
// export default ComponentSample2;
// export default ComponentSample3;

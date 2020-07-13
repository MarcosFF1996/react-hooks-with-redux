# redux-with-react-hooks
# Usando Redux com React Hooks no React-Native

Esse é um exemplo bem simples de como consumir uma API da internet no React-Native usando Redux com React Hooks.

## Instalação

```bash
$ yarn add axios
```
ou
```bash
$ expo install axios
```

## Códigos

Importação dos Hooks utilizados na aplicação e o axios.

```js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
```

Criação da state `dados`, onde será salvo todo o conteúdo requisitado no API.

```js
const [dados, setDados] = useState([]);
```

Utilizaremos o Hook `useEffect` no lugar do `componentDidMount`, em seguida usamos o `axios` para a chamada da nossa API de exemplo.
Assim que a API retornar os dados para a nossa aplicação, iremos alterar a state `dados` com os dados da API.

```js
useEffect(() => {
    async function fetchData(){
        const result = await axios('https://reactnative.dev/movies.json');
        setDados(result.data.movies);
    }
    fetchData();
}, []);
```

No retorno do nosso script faremos a seguinte lógica: Se a quantidade de dados da nossa state for maior que 0,
Então iremos percorrer a state e exibir as informações desejadas.
Senão, iremos exibir a mensagem `Carregando` para o usuário.

```js
{
    dados.length>0?
    <View>
        {dados.map((item) => <Text key={item.id}>{item.title}</Text>)}
    </View>:<Text>Carregando</Text>
}
);
```

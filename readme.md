# [Buscaminas](https://buscaminas-two.vercel.app/)

Mi primer proyecto en TS! Es una réplica del buscaminas tradicional.

## Stack

### NextJS

En el tiempo que llevo estudiando React, [NextJS](https://nextjs.org/) casi
siempre fue la base de mis proyectos. Lo elegí porque estoy familiarizado con la
configuración.

### Emotion

Los estilos de los componentes están escritos usando css en JS a través de
[Emotion](https://emotion.sh/). Un ejemplo de las ventajas de esto es que la
interfaz del tablero de juego se genera automáticamente usando grid-template,
recibiendo como parámetros el ancho y el alto del tablero:

```javascript
const BoardLayout =
  styled.div <
  Props >
  `
  align-self: center;
  justify-self: center;
  display: grid;
  grid-gap: 0.2rem;
  grid-template:
    repeat(${props => props.boardHeight}, 2rem) /
    repeat(${props => props.boardWidth}, 2rem);
  background-color: #1b2755;
`
```

### Lottie

[Lottie](https://airbnb.design/lottie/) es una librería desarrollada por airbnb
que sirve para leer animaciones exportadas de After Effects en formato json. En
este proyecto la uso para el efecto de
[explosión](https://lottiefiles.com/16871-boom-trah) cuando clickeás una mina.

### Testing

Para facilitar la detección de errores el proyecto tiene varios scrips útiles:

- test: Corre los test de [Jest](https://jestjs.io/) de las funciones básicas.
- lint: Checkea que no haya errores de sintaxis con
  [ESLint](https://eslint.org/).
- format: Formatea el código según la configuración elegida, usando
  [Prettier](https://prettier.io/).
- check-types: Verifica que no haya errores de tipos, usando
  [Typescript](https://www.typescriptlang.org/).
- validate: Corre todos los script anteriores juntos.

Usando pre-commit hooks con [Husky](https://github.com/typicode/husky),
corrobora todo lo que está listado arriba antes de aceptar un commit.

Algunos screenshots de la aplicación:

![Screenshot del estado inicial del juego](/public/img/Screenshot-buscaminas.png)
![Screenshot de una partida en curso](/public/img/Screenshot-partidaempezada.png)
![Screenshot del juego cuando perdés](/public/img/Screenshot-perdiste.png)

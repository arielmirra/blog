# Qué es React, Redux y cómo se relacionan

![alt](https://photos.collectednotes.com/photos/642/dff981f3-1303-4782-ad99-75b97b723a87)

Partamos desde lo básico y vayamos agregando conocimiento. La idea es que salgas de acá en unos minutos sabiendo qué es [React](https://reactjs.org), qué es [Redux](https://redux.js.org) y cómo juntarlos para hacer ambos más poderosos.

## ¿Qué es React?
React es una librería Javascript focalizada en el desarrollo de interfaces de usuario, o al menos así es como React se define. La realidad es que React es una herramienta poderosa con la cual podemos crear todo tipo de aplicaciones web, SPAs (Single Page Application) o inlcuso aplicaciones para Android y iOS.

React fue desarrollada inicialmente por facebook, es open-source y ampliamente utilizada gracias a su capacidad de rápidamente poder generar interfaces de usuario, mucho más que otros Frameworks como Angular que ofrecen algo más complejo, aunque con ambos se puede lograr las mismas funcionalidades. La razón de esto es porque React utiliza archivos`.jsx`, los cuales tienen la lógica y la UI en el mismo archivo y se dividen en "componentes". Por ejemplo:

```javascript
function formatName(user) { // javascript function
  return user.firstName + ' ' + user.lastName;
}

const user = { // javascript object
  firstName: 'Ariel',
  lastName: 'Mirra'
};

const element = ( // HTML to render
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render( //virtual DOM
  element, // render this element...
  document.getElementById('root') // inside this div
);
```
Acá te dejo un [proyecto en StackBlitz](https://stackblitz.com/edit/react-dstdh1) donde podés jugar con código de React y aprender viendo su funcionamiento.

Si querés usar React en tu propia máquina necesitás tener instalado [NodeJS y npm](https://nodejs.org/es). Luego, solo es cuestión de correr el comando:

```bash
npx create-react-app my-app
```
y ya tendremos una aplicación en ReactJS funcionando para empezar. Excelente.

Una consideración a tener en cuenta es que en .jsx el HTML cambia cómo se escribe, ya que use camelCase para los atributos, por lo que `class="class-name"` ahora es `className="class-name"`.
Notarán además, si son detallistas, que estamos renderizando nuestro HTML en el **ReactDOM**. Esto es el Virtual DOM de React.

### ¿Qué es el virtual DOM?
Si entramos al mundo de ReactJS, vamos a escuchar hablar muchas veces sobre el **Virtual DOM**. Este concepto nace de una idea brillante, actualizar únicamente la parte del [DOM](https://desarrolloweb.com/articulos/que-es-el-dom.html) que necesita cambiar en vez de todo el DOM real. En las aplicaciones Javascript de antes, se recibe el JSON del servidor y se genera nuevo HTML a renderizar, lo que actualiza toda la página en cada cambio.

Si me preguntás a mi, lo mejor de React es su ecosistema; la cantidad de ejemplos en internet, herramientas disponibles y complementos hace a la plataforma accesible y potente. Una de las mejores integraciones es **[Redux](https://es.redux.js.org)**.

### ¿Qué es Redux?
No hay mejor descripción que la que ellos mismos se dan:

> Redux es un contenedor predecible del estado de aplicaciones JavaScript.

Redux es una excelente herramienta para manejar el estado de una aplicación. Sus principales beneficios son:

- Estado global e innmutable
- Mayor control del estado de la aplicación y el flujo de datos
- Arquitectura escalable de datos

Con apenas 2kb, Redux es una herramienta escalable y potente para manejar el estado de cualquier aplicación Javascript

### El flujo de la información
La principal ventaja de Redux es cómo administra los cambios de estado. Para entenderlo, es necesario conocer 3 conceptos clave:


1. El **Store** como la única fuente de la verdad
2. El **State** es de solo lectura
3. Los cambios al State pueden hacerse únicamente a través de **acciones (actions) y funciones puras (reducers)**

![El flujo de información de Redux](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)

De esta forma, se logra centralizar el estado de la aplicación y por lo tanto unificar el lugar para realizar cambios. Esto hace el desarrollo muchísimo más simple:

![única fuente de la verdad](https://photos.collectednotes.com/photos/642/659aa7d2-f213-4027-a725-d782af88535e)

Todo el estado de tu aplicación esta almacenado en un único árbol dentro de un único store. La única forma de cambiar el árbol de estado es emitiendo una acción, un objeto describiendo que ocurrió.

Para especificar como las acciones transforman el árbol de estado, usas reducers puros.

¡Eso es todo!

### Instalación
Para instalar la versión estable de Redux:

```bash
npm i -S redux
```
Si queremos usarlo con React también vamos a instalar la [conexión a React](https://github.com/reduxjs/react-redux) y [las herramientas de desarrollo](https://github.com/gaearon/redux-devtools)

```bash
npm i -S react-redux
npm i -D redux-devtools
```

Ahora veamos algo de código:

```javascript
import { createStore } from 'redux';
/**
Esto es un reducer, una función pura con el formato
(state, action) => newState. Describe como una acción transforma el estado. El estado puede ser cualquier tipo de objeto inmutable, es decir, se devuelve un nuevo objeto si el estado cambió.

En este ejemplo, usamos `switch` y strings, pero puedes usar cualquier forma
que desees si tiene sentido para tu proyecto.
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

// Creamos un store de Redux almacenando el estado de la aplicación.
// Su API es { subscribe, dispatch, getState }.
let store = createStore(counter);

// Puedes suscribirte manualmente a los cambios, o conectar tu vista directamente
store.subscribe(() => {
  console.log(store.getState())
});

// La única forma de modificar el estado interno es despachando acciones.
// Las acciones pueden ser serializadas, registradas o almacenadas luego para volver a ejecutarlas.
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
```

Por último, para conectar nuestro Store con nuestros componentes de React es suficiente con utilizar `connect` del conector:

```javascript
import { connect } from 'react-redux'
import { increment, decrement } from './actionCreators'

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
```

## Ahora te toca a ti
Esto es solo el comienzo, si querés seguir profundizando te dejo:

- Un proyecto de ejemplo de [TODOs usando React y Redux](https://codesandbox.io/s/9on71rvnyo) ya que siempre se aprende mejor cuando las manos están ocupadas
- La documentación oficial de [React](https://reactjs.org) y [Redux](https://redux.js.org/)



Espero que te haya servido para aprender algo nuevo, ahora te toca seguir aprendiendo y profundizando. Gracias por estar acá.

Un saludo, [Ariel Mirra](https://linktr.ee/arielmirra).

[instagam](https://www.instagram.com/ariel.mirra) | [linkedin](linkedin.com/in/ariel-mirra) | [otros proyectos](https://linktr.ee/arielmirra)
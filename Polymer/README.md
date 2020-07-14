# Qué es PolymerJs y porqué tenés que saberlo

A la hora de hacer una aplicación web, la discusión siempre es entre los mejores Frameworks como Angular o React o Vue y porqué cada uno es mejor o peor que el otro. Pero yo vengo a dar a conocer algo mucho más universal, compatible, y más fácil de aprender:  **PolymerJs**.

![PolymerJs](https://photos.collectednotes.com/photos/642/235e0e2b-aba7-42fe-a826-40c262475e01)

## ¿Qué es PolymerJs?
[Polymer](https://www.polymer-project.org/) es un proyecto que te ayuda a desbloquear todo el potencial de la web. Es una librería y un toolbox para utilizar [WebComponents](https://www.webcomponents.org) y crear aplicaciones web progresivas (PWA).

### ¿Pero qué es un WebComponent y porqué tiene tanto potencial?
Excelente pregunta mi joven padawan. Voy a dejar que [MDN](https://developer.mozilla.org/es/docs/Web/Web_Components) (la biblia de los desarrolladores) la responda por mi:
> Los Componentes Web son una colección de tecnologías que te permiten crear elementos personalizados reutilizables — con su funcionalidad encapsulada apartada del resto del código — y utilizarlos en las aplicaciones web.

### Creando un Hello World reutilizable
Suficiente teoría por hoy. Se aprende mucho más cuando los dedos empujan teclas. Vamos a crear nuestro primer componente reutilizable con la ayuda de Polymer para que veas lo fácil que es y lo bien que funciona.

Para empezar necesitamos algunas herramientas que quizás ya tenes instaladas:

- [NodeJs](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)
- [npm](https://www.npmjs.com)

Ahora que tenemos lo básico para el desarrollo web, instalamos Polymer CLI: ```npm install -g polymer-cli@next``` y cloneamos el ejemplo inicial:

``` bash
git clone https://westdabestdb@bitbucket.org/westdabestdb/polymerapp.git
```

Una vez que hayas hecho esto es momento de sacar Polymer a dar una vuelta:

```bash
cd polymerapp
polymer serve
//applications: http://127.0.0.1:8081
//reusable components: http://127.0.0.1:8081/components/polymerapp/
```

Ahora si vas a http://127.0.0.1:8081 deberías ver una hermosa y minimalista pantalla de Hello World. Eso que estas viendo es un componente reutilizable, vayamos a verlo:

```javascript
import {
    PolymerElement,
    html
} from '@polymer/polymer';
class HelloWorld extends PolymerElement {

    constructor(who) {
        super();
        this.who = who;
    }

    static get properties() {
        return {
            who: {
                type: String,
                value: 'World'
            }
        };
    }

    static get template() {
        return html`
        <div class="app-container">
            Hello [[who]]
        </div>

        <style>
            .app-container {
                text-align: center;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
                font-size: 5em;
                height: 100vh;
                width: 100vw;
                background-color: #e3e3e3;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        </style>
        `;
    }
}

customElements.define('hello-world', HelloWorld);
```

Para los que ya saben React, esto es como estar en casa. Tenemos un constructor con un parámetro llamado `who` que lo asigno a una propiedad interna del mismo nombre. Mi template es código HTML con CSS que saluda a lo que le hayan pasado en la variable `who`. Por último, le doy un nombre a mi componente y lo llamo hello-world para que lo podamos mostrar haciendo únicamente `<hello-world who="there!"></hello-world>` que es exactamente lo que hago desde el index:
```javascript
import './HelloWorld.js'
class PolymerApp extends PolymerElement {

    static get properties() {
        return {
            who: {
                type: String,
                value: 'World'
            }
        }
    }
    static get template() {
        return html `
        <hello-world who="there!"></hello-world>
        `;
    }
}
customElements.define('polymer-app', PolymerApp);
```

Esto es todo, los puntos interesantes a tener en cuenta son:

- Los WebComponents son universales, no requieren ninguna librería y se pueden mostrar en cualquier navegador
- Los componentes que creamos son reutilizables y podemos ver muchos más creados por otros [acá](https://www.webcomponents.org/)
- Podemos crear aplicaciones únicamente con esta librería


## Listo para mi, ahora seguís vos
Espero que te haya servido para aprender algo nuevo, ahora te toca seguir aprendiendo y profundizando. Gracias por estar acá.

Un saludo, [Ariel Mirra](https://linktr.ee/arielmirra).

[instagam](https://www.instagram.com/ariel.mirra) | [linkedin](linkedin.com/in/ariel-mirra) | [otros proyectos](https://linktr.ee/arielmirra)
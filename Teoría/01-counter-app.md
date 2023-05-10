# Counter App

## Limitaciones:
+ En React no se puede renderizar dentro de etiquetas JSX un objeto
+ Tampoco se puede poner una función asíncrona, solo funciones normales

## Props
Las props son propiedades que pasan de componentes padre a componentes hijos.
### PropTypes
Es para definir el tipo a las Props, se instala con:

<code>
npm i prop-types
</code>
o
<code>
yarn add prop-types
</code>

### DefaultProps
Otra forma de definir las Props es de la siguiente forma

[FirstApp.jsx](../01-counter-app/src/FirstApp.jsx) 


## Eventos
Mas info: [Eventos Docs React](https://es.reactjs.org/docs/events.html)

Podemos ver con la funcion onClick que se pasa los argumentos a una función solo con nombrarla, no llamarla.
<code>
 <button onClick={ handleAdd }>
          +1
</button>
</code>

[Ejemplo](../01-counter-app/src/CounterApp.jsx)

## Hooks
Mas info [Hooks Docs React](https://es.reactjs.org/docs/hooks-intro.html)

### useState
useState es un hook de React para que podamos almacenar y cambiar el estado de nuestros componentes.

<code>
const [name, setName] = useState(value)
</code>

[Ejemplo](../01-counter-app/src/CounterApp.jsx)
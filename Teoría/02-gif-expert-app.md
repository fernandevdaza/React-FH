# Gif Expert App

## Mapear componentes o elementos de HTML

Al mapear un array con elementos dentro, podemos renderizar componentes con funciones propias de los arrays como <code>.map()</code> o <code>.forEach()</code>

Sin embargo cada componente necesita una propiedad de tipo key para identificar cada renderizado al usar una de estas funciones, esto es **obligatorio**.

[Ejemplo](../02-gif-expert-app/src/GifExpertApp.jsx)

## useEffect

El hook de useEffect permite realizar efectos u operaciones secundarias dependiendo de la condición que se le aplique. Puede ser, llamar a una API cuando se renderiza por primera vez el componente, cuando se actualice el estado, etc.

[Ejemplo](../02-gif-expert-app/src/components/GifGrid.jsx)

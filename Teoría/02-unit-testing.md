# Unit testing en GifExpertApp

## Instalación y configuracion de Jest + React Testing Library

### En proyectos de React + Vite

1. Instalaciones:

```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:

```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del **package.json**

```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel **babel.config.js**

```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

**jest.config.js**

```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

**jest.setup.js**

```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

# Jest

## Mock Functions

Permite probar los vínculos entre el código borrando la implementación real de una función, capturando llamadas a la función (y los parámetros pasados en esas llamadas), capturando instancias de funciones de constructor cuando se instancian con new y permitiendo la configuración de devolución en tiempo de prueba valores.

```
const onNewCategory = jest.fn();
```

[Ejemplo](../02-gif-expert-app/tests/components/AddCategory.test.jsx)

## Métodos con Expect

### toHaveBeenCalled:

Para asegurarse de que se llamó a una función mock con argumentos específicos. Chequea si se llamó una vez.

```
expect(onNewCategory).toHaveBeenCalled()
```

### toHaveBeenCalledTimes:

Para asegurarse de que se llamó a una función mock ciertas veces.

```
expect(onNewCategory).toHaveBeenCalledTimes(2);
```

### toHaveBeenCalledWith:

para asegurarse de que se llamó a una función mock con argumentos especificos.

```
expect(onNewCategory).toHaveBeenCalledWith(inputValue);
```

[Ejemplo](../02-gif-expert-app/tests/components/AddCategory.test.jsx)

# React Testing Library

### RenderHook:

Renderiza un hook y retorna un objeto con algunas propiedades.

```
const { result } = renderHook(() => useFetchGifs('One Punch'));
```

### WaitFor

Dada una condición, espera a que un callback retorne un booleano True

```
await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0);
        );
```

[Ejemplo](../02-gif-expert-app/tests/hooks/useFetchGifs.test.js)

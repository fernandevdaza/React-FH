# 03-Hook-App

## useEffect

El useEffect es muy util para realizar efectos secundarios o llamadas a funciones o apis cuando se renderiza un componente o cuando se cambia el estado. Se puede poner multiples useEffect cuando se necesita disparar un efecto dependiendo del cambio que se realice. Siempre se ejecutará cuando el componente se monte.

[Ejemplo](../03-hook-app/src/02-useEffect/SimpleForm.jsx)

Tiene tres partes:

```javascript
useEffect(() => {
  //funcion de retorno
  first;

  return () => { //funcion de clean up
    second;
  };
}, [third] // dependencias);
```

1. **Función de retorno:** Es lo que queremos que se ejecute cuando se monte el componente
2. **Funcion de clean up:** Es lo que queremos que se ejecute cuando se desmonte el componente.
3. **Dependencias:** Es la variable de estado al que queremos observar para ejecutar el useEffect cada que el estado de la app cambie.

[Ejemplo2](../03-hook-app/src/02-useEffect/Message.jsx)

## useRef
Es como un useState que no dispara la re-renderización cuando hacemos cambios.
Hace referencia a un elemento HTML para poder manipularlo.

[Ejemplo](../03-hook-app/src/04-useRef/FocusScreen.jsx)

## useLayoutEffect
Es como un useEffect que se ejecuta antes de que se renderice en pantalla la página.

[Ejemplo](../03-hook-app/src/05-useLayoutEffect/Layout.jsx)

## Memo
Memoriza un componente que tiene funciones pesadas, asi si el componente padre cambia sin afectar al hijo, el componente hijo no lo hará.

[Ejemplo](../03-hook-app/src/06-memos/Small.jsx)

## useMemo
Memoriza un valor, es como un useEffect, pero este memoriza valores pesados que no necesarimente cambiaran al redibujar un componente.

[Ejemplo](../03-hook-app/src/06-memos/MemoHook.jsx)

## useCallback
Es como un memo, pero memoriza Funciones. Lo cual es beneficioso cuando tienes una función costosa que quieres evitar ejecutar innecesariamente, o una función que se pasa como prop a componentes hijos optimizados para evitar renderizados innecesarios.

[Ejemplo](../03-hook-app/src/06-memos/CallbackHook.jsx)

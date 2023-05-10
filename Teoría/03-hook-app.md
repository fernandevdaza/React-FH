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
3. **Dependencias:** Es la variable de estado al que queremos bservar para ejecutar el useEffect cada que el estado de la app cambie.

[Ejemplo2](../03-hook-app/src/02-useEffect/Message.jsx)

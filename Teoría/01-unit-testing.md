# Unit testing

- Hay dos tipos de pruebas
  - Unitarias: Es probar una sola parte del código
  - Integración: Es probar varias partes que trabajan en conjunto.
- Las pruebas tienen que ser:
  1. Fáciles de escribir
  2. Fáciles de leer
  3. Confiables
  4. Rápidas
  5. Principalmente unitarias.

## AAA (Arrange, Act, Assert)

#### Arrange

Es el paso en el cual establecemos el estado inicial, se conoce como el sujeto a probar.

- Inicializamos variables
- Importaciones necesarias
- Preparamos el ambiente a probar

#### Act

Es en donde aplicamos acciones o estímulos al sujeto de pruebas.

- Llamamos métodos
- Simular clicks
- Realizar acciones sobre el paso anterior

#### Assert

Observar el comportamiento resultante, que los resultados sean los esperados.

## Mitos

- Hacen que mi aplicación no tenga errores
- Las pruebas no pueden fallar
- Hacen más lenta mi aplicación
- Es una pérdida de tiempo.
- Hay que probar todo.

## Jest

Es un framework de Javascript para pruebas.

### Instalación

<code>
yarn add -D jest @types/jest
</code>

### Métodos

**test:** Es donde estarán nuestras pruebas

<code>
test('string', () => {})
</code>

**describe:** crea un bloque donde se agrupará varias pruebas relacionadas.

<code>
describe('string', () => {})
</code>

**expect:** Se usa cada vez que queremos evaluar una condición

**toBe:** Se usa para comparar dos variables y ver si son exactamente iguales.

<code>
expect(message1).toBe(message2);
</code>

[Ejemplo Demo](../01-counter-app/tests/demo.test.js)

**toEqual:** Se usa para comparar mayormente objetos, ya que toBe no puede comparar similitudes.

<code>
expect(object1).toEqual(object2);
</code>

**toStrictEqual:** Se usa para comparar si ambos objetos tienen la misma estructura y tipos.

<code>
expect(object1).toStrictEqual(object2);
</code>

[06-deses-obj](../01-counter-app/tests/base-pruebas/06-deses-obj.test.js)

**toBeFalsy:** Se usa para comparar resultados negativos como undefined o null

<code>
expect(variable).toBeFalsy();
</code>

**done:** Es una forma de decirle a jest que una prueba asíncrona termino.

[09-promesas](../01-counter-app/tests/base-pruebas/09-promesas.test.js)

**toMatchSnapshot:** Se asegura que el componente renderizado coincida con una fotografía que realiza.

Los snapshots son formas útiles de ver si un componente no está cambiando de forma inesperada al comparar con un 'snap'

<code>
expect(container).toMatchSnapshot();
</code>

**toBeTruthy:** Se asegura que sea true la condición en el expect.

<code>
expect(getByText(< FirstApp />)).toBeTruthy();
</code>

**toContain:** Que tiene que contener esa palabra.

<code>

expect(getByTestId('test-title').innerHTML).toContain(title)

</code>

## Testing Library: React

Es un framework para pruebas en muchos otros frameworks o librerías de javascript

**render:** Se utiliza para probar la renderización de componentes

<code>
render( < FirstApp.jsx /> )
</code>

**getByText:** Encuentra un elemento por el texto en un componente.

<code>
expect(getByText(< FirstApp />)).toBeTruthy();
</code>

**getAllByText:** Encuentra varios elementos por el texto en un componente en formato array.

<code>
expect( getAllByText( subtitle ).length ).toBe(1)
</code>

**getByRole:** Encuentra varios elementos por el elemento o tag HTML en un componente.

<code>
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
</code>

**screen:** El objeto screen tiene todas las queries que están previnculadas a document.body

<code>
    expect(screen.getByText(100)).toBeTruthy();
</code>

**fireEvent:** Nos permite ejecutar eventos que normalmente se hacen en el browser

<code>
 fireEvent.click(screen.getByText('+1'));
</code>

Ejemplos:

[FirstApp.test.jsx](../01-counter-app/tests/FirstApp.test.jsx)

[FirstApp2.test.jsx](../01-counter-app/tests/FirstApp2.test.jsx)

[CounterApp.test.jsx](../01-counter-app/tests/CounterApp.test.jsx)

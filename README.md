# Fractal Challenge

Este reto tecnico fue realizado con React, Apollo Client y Css modules. Las APIs usadas fueron de [GraphQL](https://countries.trevorblades.com/) y [REST](https://pixabay.com/api/docs/)(Pixabay).

## Requerimientos

### Requisitos Técnicos:

- Utilizar un framework de JavaScript moderno, preferiblemente Vue 2 Options API o Vue Composition API, pero también son válidos Vue 3, React, Angular, etc.
- Emplear Apollo Client (o una biblioteca similar) para realizar solicitudes GraphQL al API proporcionado.
- Implementar routing adecuado para la navegación entre las vistas de los países y la barra de búsqueda.
- Utilizar alguna biblioteca o método para hacer la interfaz responsive y adaptable a diferentes tamaños de pantalla.
- Utilizar alguna API (GraphQL o REST) para obtener imágenes correspondientes a cada país, ya que el API GraphQL provisto no ofrece esta funcionalidad.

### Diseño

El diseño de la aplicación consta de las siguientes secciones:

- Sidebar: Mostrará una lista de ítems. Únicamente el primer ítem (lista de países) será
  funcional para este reto. Los demás ítems pueden tener contenido simple para demostrar el
  routing adecuado.
- Main Content: Contendrá una barra de búsqueda para buscar países por nombre y una sección
  para mostrar el país seleccionado y sus detalles, como su nombre, capital, idioma, moneda y
  estados (si están disponibles).
- Filtrado por continente: Al hacer clic en la barra de búsqueda, se desplegará un menú para
  filtrar los países por continente, como se muestra en los diseños adjuntos.

### Imágenes de los Países:

Debido a que el API GraphQL no proporciona imágenes para los países, se debe utilizar otra API
(GraphQL o REST) que ofrezca imágenes. Se recomienda el uso de Pixabay o Unsplash para obtener
imágenes correspondientes a cada país.

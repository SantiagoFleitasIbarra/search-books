# Svelte + Typesense - Simple Prototype

Este proyecto es un prototipo que demuestra cómo integrar [Svelte](https://svelte.dev/) con [Typesense](https://typesense.org/) (usando su **free tier**). Permite buscar libros a partir de un índice sencillo con campos de título, autor y año.

## Características

- **Svelte** para el frontend, proporcionando un entorno ligero y reactivo.
- **Typesense** como motor de búsqueda, con una colección de ejemplo (`books`) y datos básicos (cuatro libros de muestra).
- **Diseño simple** con estilos directos en los componentes Svelte.
- **Búsqueda parcial**: Permite buscar coincidencias en el título o autor, actualizando los resultados al escribir.

## Libros de Ejemplo
La colección `books` contiene los siguientes libros:

- **Caperucita Roja**  
  *Autor*: Charles Perrault  
  *Año*: 1697

- **To Kill a Mockingbird**  
  *Autor*: Harper Lee  
  *Año*: 1960

- **1984**  
  *Autor*: George Orwell  
  *Año*: 1949

- **El Gran Gatsby**  
  *Autor*: F. Scott Fitzgerald  
  *Año*: 1925

## Requisitos

- **Node.js** (versión 16 o superior recomendada).
- **npm** o **pnpm** para instalar dependencias.
- **Cuenta gratuita** de Typesense Cloud (o usar un clúster propio) y tu API Key.

## Estructura de Carpetas

```bash
svelte-search/
├── src/
│   ├── lib/
│   │   ├── createIndex.js
│   │   ├── addDocuments.js
│   │   ├── addData.js
│   │   └── typesense.js
│   ├── routes/
│   │   └── +page.svelte   # Punto de entrada principal en SvelteKit
│   └── Search.svelte      # Componente de búsqueda
├── package.json
├── README.md
└── ...
```

## Pasos para Ejecutar

1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/svelte-typesense-prototype.git
cd svelte-typesense-prototype
```

2. Instalar dependencias

```bash
npm install
```

3. Configurar Typesense

* **Asegúrate de editar typesense.js** con el host y la apiKey correctos de tu clúster.

* **Ejecuta createIndex.js** (si deseas crear la colección desde cero) y addData.js o addDocuments.js para poblar la base de datos de prueba.

```bash
node src/lib/createIndex.js
node src/lib/addData.js
```
|**Nota: Estos scripts solo son necesarios la primera vez o cuando quieras reiniciar el índice.**|

4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre tu navegador en **http://localhost:5173** (o la URL que te indique la consola) para ver la aplicación.

## Cómo Funciona

* **Búsqueda**: En la pantalla principal, verás un campo de texto. A medida que escribes, la aplicación hace consultas a Typesense buscando en los campos **title** y **author**.

* **Resultados**: Si hay coincidencias, se muestran en forma de tarjetas con título, autor y año. Si no se encuentran, aparece un mensaje indicando que no hay resultados.

## Personalización

* Puedes modificar los estilos directamente en **Search.svelte** o utilizar un framework CSS como TailwindCSS o Bootstrap.

* Para agregar más campos en el índice, edita el esquema en **createIndex.js** y los documentos de prueba en **addDocuments.js**.

## Licencia
Puedes usar este proyecto como base o inspiración para tus propios prototipos.
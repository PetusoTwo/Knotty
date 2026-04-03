# Knotty Web

Sitio web de catalogo para Knotty (amigurumis hechos a mano), construido con Astro y Tailwind.

## Stack

- Astro 6
- Tailwind CSS
- Componentes Astro reutilizables
- Datos por seccion en `src/data`

## Requisitos

- Node.js 22+
- npm

## Inicio rapido

```bash
npm install
npm run dev
```

App local: `http://localhost:4321`

## Scripts

- `npm run dev`: entorno de desarrollo
- `npm run build`: build de produccion
- `npm run preview`: preview del build

## Estructura principal

```text
src/
	components/   # UI por seccion (Hero, Catalogo, Contacto, Footer, etc.)
	data/         # contenido y configuracion (products, hero, contact, ...)
	layouts/      # layout global
	pages/        # rutas (/ y /catalogo)
	styles/       # estilos globales
public/
	images/       # imagenes del sitio
```


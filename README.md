# Cristian M — Portfolio

Sitio de portafolio freelance para **Cristian M**, desarrollador web y de apps de Colombia.

- HTML, CSS y JavaScript puro.
- Sin frameworks, sin backend y sin paso de compilación.
- Diseño oscuro azul marino, con retrato circular, proyecto destacado y servicios en cuatro columnas.
- Bilingüe español/inglés con selector `ES | EN` y preferencia guardada en `localStorage`.
- Listo para publicar en GitHub Pages, Netlify o Firebase Hosting.

## Estructura

```
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── translations.js
├── assets/
│   ├── favicon.svg
│   └── images/
│       ├── og-cover.png
│       ├── project-vitria.png
│       ├── project-store.jpg        (captura de la tienda Vitria)
│       ├── vitria-logo.svg        (logo de Vitria)
│       └── cristian-portrait.jpg  (retrato del hero y de «Sobre mí»)
└── README.md
```

`cristian-portrait.jpg` está optimizado a 900 × 900 px para usarse en el hero y en la sección «Sobre mí».

## Ver el sitio en local

Abre `index.html` directamente en el navegador, o levanta un servidor estático:

```bash
# Python 3
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Idiomas

En una primera visita, el sitio carga en inglés. El selector `ES | EN` del header cambia todos los textos, los `alt`, las etiquetas ARIA, el título, la meta descripción, Open Graph y el atributo `lang` del documento. La elección se guarda en `localStorage` con la clave `cristian-m-language` y se aplica al recargar.

Todos los textos están en `js/translations.js`, dentro de un único objeto `translations` con las claves `en` y `es`. Para editar una frase, cambia el valor correspondiente en ambos idiomas.

## Marcadores pendientes (PLACEHOLDERS)

Busca `PLACEHOLDER_` en el proyecto y reemplaza:

| Marcador | Dónde | Qué poner |
| --- | --- | --- |
| `PLACEHOLDER_WHATSAPP` | `index.html` (hero y contacto) | Número real en formato internacional, sin `+` ni espacios. Ejemplo: `573001234567` |
| `PLACEHOLDER_EMAIL` | `index.html` (contacto) | Correo real |
| `assets/images/project-store.svg` | `index.html` | Captura real de la tienda de ejemplo |
| `assets/images/og-cover.png` | `index.html` (`og:image`) | Imagen Open Graph (1200 × 630 px, ya generada) |
| Enlaces de proyectos | `index.html` | URLs reales de Vitria y la tienda de ejemplo |
| Redes sociales | `index.html` (footer) | Añadir GitHub, LinkedIn o X cuando tengas las URLs |

Notas:

- `og:image` debe ser una URL absoluta (con dominio) cuando el sitio esté publicado.
- El bloque de contacto incluye una nota visible con los placeholders. Bórrala cuando estén reemplazados.
- Vitria está marcado como proyecto personal. No se afirma que tenga pagos en línea.
- El footer no incluye iconos de redes sociales para no inventar enlaces; se pueden añadir cuando existan las URLs.
- El selector `ES | EN` funciona sin recargar la página y conserva la preferencia del visitante.

## Publicación

### GitHub Pages

1. Sube el proyecto a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En *Source*, selecciona la rama principal y la carpeta `/ (root)`.
4. Guarda y espera a que GitHub publique el sitio.

### Netlify

1. Arrastra la carpeta del proyecto a [app.netlify.com/drop](https://app.netlify.com/drop), o conecta el repositorio.
2. No se necesita comando de build. Publica la raíz del proyecto.

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # elige la carpeta del proyecto como public directory
firebase deploy
```

## Accesibilidad y SEO

- HTML semántico, enlace para saltar al contenido y foco visible.
- Navegación con teclado y menú móvil con `aria-expanded`.
- Selector de idioma con `aria-pressed` y preferencia persistente.
- Textos alternativos en todas las imágenes.
- Título, meta descripción, Open Graph y `lang` actualizado según el idioma.

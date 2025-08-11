import { defineConfig } from "tinacms";



// Branch por defecto
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";





export default defineConfig({
  branch,

  // Variables de Tina Cloud (en local pueden ir vacías)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  
  editor: {
    enabled: false, // Solo formularios, sin preview
  },

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images",
    },
  },

  schema: {
    collections: [
      // POSTS DEL BLOG (Markdown)
      {
        name: "posts",
        label: "Posts",
        path: "src/content/posts",
        format: "md",
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: [
          { type: "string", name: "title", label: "Título", isTitle: true, required: true },
          { type: "string", name: "description", label: "Descripción" },
          { type: "datetime", name: "pubDate", label: "Fecha", required: true },
          { type: "image", name: "heroImage", label: "Imagen destacada" },
          { type: "string", name: "tags", label: "Tags", list: true },
          { type: "rich-text", name: "body", label: "Contenido", isBody: true },
          { type: "boolean", name: "featured", label: "Destacado (mostrar arriba)" },

        ],
      },

      // PÁGINAS EDITABLES (ej: /blog.md para la cabecera del listado)
      {
        name: "pages",
        label: "Páginas",
        path: "src/content/pages",
        format: "md",
        ui: {
          // blog.md -> /blog, contacto.md -> /contacto, etc.
          router: ({ document }) => `/${document._sys.filename}`,
        },
        fields: [
          { type: "string", name: "title", label: "Título", isTitle: true, required: true },
          { type: "string", name: "intro", label: "Intro" },
          { type: "image", name: "heroImage", label: "Imagen destacada" },
          { type: "rich-text", name: "body", label: "Contenido", isBody: true },
        ],
      },
    ],
  },
});

# Documentos Digitales

## 📂 Estructura del Proyecto

```
/documentos-digitales
│── /public              # Logos, imágenes estáticas
│── /src
│   ├── /components
│   │   ├── /atoms       # Elementos básicos (Botón, Título)
│   │   ├── /molecules   # Combinaciones de átomos (Card, Lista)
│   │   ├── /organisms   # Secciones completas (Modal con lista)
│   │   ├── /templates   # Layouts generales
│   ├── /lib 
│   │   ├── /store       # Configuración del estado global
│   │   ├── /types       # Definición de tipos TypeScript
│   ├── /pages
│   │   ├── /api         # Endpoints de API
│   │   ├── _app.js      # Configuración global de la aplicación
│   │   ├── _document.tsx # Documento base de Next.js
│   │   ├── _error.tsx   # Página de error personalizada
│   │   ├── 404.tsx      # Página de error 404
│   │   ├── home.tsx     # Página principal
│   ├── /services       # Lógica de negocio y peticiones API
│   │   ├── packageService.ts # Servicio para gestión de paquetes
│   ├── /styles         # Estilos globales
│   │   ├── globals.css  # Estilos globales de la aplicación
```

## 🚀 Tecnologías Usadas
- **Next.js** - Framework de React para desarrollo SSR y SSG.
- **TypeScript** - Tipado estático para mayor seguridad en el código.
- **Tailwind CSS** - Estilos con clases utilitarias.
- **RTK Query** - Manejo eficiente del estado global y solicitudes HTTP.
- **Firebase** - Backend para autenticación y almacenamiento.
- **Ant Design** - Componentes UI preconstruidos para una interfaz moderna.

## 📌 Instalación y Configuración
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/documentos-digitales.git
   cd documentos-digitales
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el entorno de desarrollo:
   ```bash
   npm run dev
   ```
4. Acceder en el navegador:
   ```
   http://localhost:3000
   ```

## 📜 Scripts Disponibles
- `npm run dev` - Inicia el servidor en modo desarrollo.
- `npm run build` - Construye la aplicación para producción.
- `npm start` - Inicia la aplicación en producción.
- `npm run lint` - Revisa errores de código con ESLint.

## 📌 Contribución
Si deseas contribuir, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube los cambios a tu fork (`git push origin feature-nueva`).
5. Crea un Pull Request en el repositorio principal.

## 📄 Licencia
Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente.

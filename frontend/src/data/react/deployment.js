export const deploymentTopics = [

    // ============================================================
    // 1. npm run build
    // ============================================================

    {
        id: 1,
        module: "deployment",
        title: "npm run build",
        concept: "Command used to create an optimized production build",
        difficulty: "Easy",

        theory: `
npm run build creates the production version of a React application.

For a Vite React project, the build command normally runs:

npm run build

This creates a dist folder containing the files that can be deployed to a web server.

Typical flow:

Source Code
    ↓
npm run build
    ↓
dist/
    ↓
Deploy to Server
        `,

        example: `
npm install

npm run build
        `,

        output: `
dist/
├── index.html
└── assets/
    ├── index-xxxxx.js
    └── index-xxxxx.css
        `
    },

    // ============================================================
    // 2. Production Build
    // ============================================================

    {
        id: 2,
        module: "deployment",
        title: "Production build",
        concept: "Optimized version of the application prepared for real users",
        difficulty: "Easy",

        theory: `
A production build is the optimized version of a React application that is deployed to users.

During the build process, tools such as Vite optimize the application.

Common optimizations include:

- Minification
- Bundling
- Tree shaking
- Asset optimization
- Code splitting when configured

Developers normally do not deploy the src folder directly.

They build the application and deploy the generated dist folder.
        `,

        example: `
npm run build

// Preview the production build locally

npm run preview
        `,

        output: `
Production files are generated:

dist/
├── index.html
└── assets/
        `
    },

    // ============================================================
    // 3. Environment Variables
    // ============================================================

    {
        id: 3,
        module: "deployment",
        title: "Environment variables",
        concept: "Configuration values that can change between environments",
        difficulty: "Medium",

        theory: `
Environment variables store configuration values outside the application code.

They are useful for values such as:

- API URL
- Application mode
- Feature configuration
- Public configuration values

For Vite applications, client-side environment variables must use the VITE_ prefix.

Example:

VITE_API_URL=http://localhost:8080/api

Important:

Variables exposed to a client-side React application are visible to users after the application is built.

Therefore, never put passwords, private keys or other secrets in VITE_ variables.
        `,

        example: `
const apiUrl = import.meta.env.VITE_API_URL;

console.log(apiUrl);
        `,

        output: `
http://localhost:8080/api
        `
    },

    // ============================================================
    // 4. .env
    // ============================================================

    {
        id: 4,
        module: "deployment",
        title: ".env",
        concept: "Environment file used for default environment configuration",
        difficulty: "Easy",

        theory: `
The .env file contains environment variables used by the application.

For Vite:

Only variables beginning with VITE_ are exposed to client-side code.

Example:

.env

VITE_API_URL=http://localhost:8080/api

The application can access it using:

import.meta.env.VITE_API_URL

Do not commit sensitive secrets to source control.
        `,

        example: `
// .env

VITE_API_URL=http://localhost:8080/api

// React

const API_URL =
    import.meta.env.VITE_API_URL;

console.log(API_URL);
        `,

        output: `
http://localhost:8080/api
        `
    },

    // ============================================================
    // 5. .env.development
    // ============================================================

    {
        id: 5,
        module: "deployment",
        title: ".env.development",
        concept: "Environment configuration used during development",
        difficulty: "Medium",

        theory: `
.env.development is used for development-specific configuration.

For example, the development frontend may communicate with a local Spring Boot server.

Example:

.env.development

VITE_API_URL=http://localhost:8080/api

When running the development server:

npm run dev

Vite loads the appropriate development environment variables.

This allows development and production configurations to be different.
        `,

        example: `
// .env.development

VITE_API_URL=http://localhost:8080/api


// React

const API_URL =
    import.meta.env.VITE_API_URL;
        `,

        output: `
Development API:

http://localhost:8080/api
        `
    },

    // ============================================================
    // 6. .env.production
    // ============================================================

    {
        id: 6,
        module: "deployment",
        title: ".env.production",
        concept: "Environment configuration used for production builds",
        difficulty: "Medium",

        theory: `
.env.production contains values used when creating a production build.

For example:

.env.production

VITE_API_URL=https://api.example.com

When we run:

npm run build

Vite uses the production environment configuration.

This allows the same React codebase to use different API URLs in development and production.
        `,

        example: `
// .env.production

VITE_API_URL=https://api.example.com


// React

const API_URL =
    import.meta.env.VITE_API_URL;
        `,

        output: `
Production API:

https://api.example.com
        `
    },

    // ============================================================
    // 7. Vercel
    // ============================================================

    {
        id: 7,
        module: "deployment",
        title: "Vercel",
        concept: "Cloud platform commonly used to deploy frontend applications",
        difficulty: "Easy",

        theory: `
Vercel is a cloud platform commonly used to deploy frontend applications.

A Vite React application can be deployed by connecting a Git repository to Vercel.

Typical flow:

GitHub
   ↓
Vercel
   ↓
npm run build
   ↓
dist
   ↓
Live Website

Environment variables can be configured in the Vercel project settings.

For client-side Vite variables, use the VITE_ prefix.
        `,

        example: `
Build Command:

npm run build

Output Directory:

dist
        `,

        output: `
React Application
      ↓
   Vercel
      ↓
Live Website
        `
    },

    // ============================================================
    // 8. Netlify
    // ============================================================

    {
        id: 8,
        module: "deployment",
        title: "Netlify",
        concept: "Hosting platform used to deploy frontend applications",
        difficulty: "Easy",

        theory: `
Netlify is another platform used to deploy React applications.

A common deployment configuration for a Vite React application is:

Build command:

npm run build

Publish directory:

dist

Netlify can automatically build and deploy the application when code is pushed to a connected Git repository.

Environment variables can be configured in Netlify project settings.
        `,

        example: `
Build command:

npm run build

Publish directory:

dist
        `,

        output: `
Git Push
   ↓
Netlify Build
   ↓
dist/
   ↓
Live React Application
        `
    },

    // ============================================================
    // 9. Nginx
    // ============================================================

    {
        id: 9,
        module: "deployment",
        title: "Nginx",
        concept: "Web server and reverse proxy commonly used to serve React applications",
        difficulty: "Medium",

        theory: `
Nginx can serve the static files generated by a React production build.

After running:

npm run build

we get:

dist/

The dist folder can be placed on a server and served by Nginx.

For a React single-page application, Nginx should also be configured so that application routes fall back to index.html.

Example:

location / {
    try_files $uri $uri/ /index.html;
}

This is important when using React Router.
        `,

        example: `
npm run build

// Copy dist files to the server

/var/www/my-react-app/dist/

// Nginx serves the application
        `,

        output: `
Browser
   ↓
Nginx
   ↓
React dist/
   ↓
index.html
   ↓
React Application
        `
    },

    // ============================================================
    // 10. React + Spring Boot Deployment
    // ============================================================

    {
        id: 10,
        module: "deployment",
        title: "React + Spring Boot deployment",
        concept: "Deploying React frontend and Spring Boot backend together",
        difficulty: "Advanced",

        theory: `
In a React + Spring Boot application, the frontend and backend can be deployed separately or together.

Common architecture:

Browser
   │
   ├── React Frontend
   │
   └── Spring Boot API
          │
          ▼
      PostgreSQL

Separate deployment:

React
   ↓
Vercel / Netlify / Nginx

Spring Boot
   ↓
Cloud Server / Docker / Application Server

The React application uses the production Spring Boot API URL through an environment variable.

Example:

VITE_API_URL=https://api.example.com

The Spring Boot application must also be configured for:

- CORS
- HTTPS
- Database connection
- Environment-specific configuration
- Authentication and authorization

The backend must enforce security. Hiding or protecting a frontend route does not secure the API.
        `,

        example: `
// .env.production

VITE_API_URL=https://api.example.com


// React API call

const response = await fetch(
    \`\${import.meta.env.VITE_API_URL}/users\`
);

const users = await response.json();

console.log(users);
        `,

        output: `
Production Architecture

User Browser
      ↓
React Application
      ↓
https://api.example.com/users
      ↓
Spring Boot
      ↓
PostgreSQL
        `
    }

];
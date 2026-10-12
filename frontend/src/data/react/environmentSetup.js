
export const environmentSetupTopics = [

    // ============================================================
    // 1. NODE.JS
    // ============================================================

    {
        id: 1,
        module: "environment-setup",
        title: "Node.js",
        concept: "Node.js is a JavaScript runtime that allows JavaScript code to run outside the browser.",
        difficulty: "Easy",

        theory: `
Node.js is a JavaScript runtime environment.

Normally, JavaScript runs inside a web browser.

Node.js allows JavaScript to run outside the browser.

React development uses Node.js for:

- Running development tools
- Installing packages
- Running build tools
- Running development servers
- Managing project dependencies

React itself does not run because of Node.js.

Node.js is mainly used during development and build processes.

To check the installed Node.js version:

node -v

Example:

node -v

Output:

v20.19.0
`,

        example: `
node -v
`,

        output: `
v20.19.0
`
    },


    // ============================================================
    // 2. NPM
    // ============================================================

    {
        id: 2,
        module: "environment-setup",
        title: "npm",
        concept: "npm is the package manager commonly used with Node.js to install and manage JavaScript packages.",
        difficulty: "Easy",

        theory: `
npm stands for Node Package Manager.

It is installed along with Node.js.

npm is used to:

- Install packages
- Remove packages
- Update packages
- Manage dependencies
- Run project scripts

For example:

npm install react

This installs React into the project.

To check the npm version:

npm -v

npm uses package.json to understand the dependencies
and scripts of a project.
`,

        example: `
npm -v
`,

        output: `
10.9.4
`
    },


    // ============================================================
    // 3. VITE
    // ============================================================

    {
        id: 3,
        module: "environment-setup",
        title: "Vite",
        concept: "Vite is a modern frontend build tool and development server commonly used to create React applications.",
        difficulty: "Easy",

        theory: `
Vite is a frontend development tool.

It provides:

- Development server
- Fast development startup
- Hot Module Replacement
- Production build support
- React project templates

Vite is commonly used instead of older React project
setup tools.

A React project can be created using:

npm create vite@latest

Then select:

React

and:

JavaScript

Vite normally starts the development server using:

npm run dev
`,

        example: `
npm create vite@latest my-react-app

cd my-react-app

npm install

npm run dev
`,

        output: `
VITE development server starts.

Local:

http://localhost:5173/
`
    },


    // ============================================================
    // 4. CREATE REACT APP
    // ============================================================

    {
        id: 4,
        module: "environment-setup",
        title: "Create React App",
        concept: "Create React App was a traditional tool for setting up React applications with a predefined development configuration.",
        difficulty: "Easy",

        theory: `
Create React App, commonly called CRA, was a popular way
to create React applications.

The traditional command was:

npx create-react-app my-app

Then:

cd my-app

npm start

Create React App provided a predefined project setup.

However, for new projects, Vite is commonly preferred because
it provides a modern and fast development experience.

Important interview point:

Create React App and Vite are project setup/build tools.

They are not React itself.
`,

        example: `
npx create-react-app my-app

cd my-app

npm start
`,

        output: `
React application starts on the development server.
`
    },


    // ============================================================
    // 5. CREATING REACT PROJECT
    // ============================================================

    {
        id: 5,
        module: "environment-setup",
        title: "Creating React Project",
        concept: "A React project can be created using a project setup tool such as Vite.",
        difficulty: "Easy",

        theory: `
A React project can be created using Vite.

Step 1:

Create the project.

npm create vite@latest my-react-app

Step 2:

Move into the project.

cd my-react-app

Step 3:

Install dependencies.

npm install

Step 4:

Start the development server.

npm run dev

The basic flow is:

Create Project
      ↓
Install Dependencies
      ↓
Start Development Server
      ↓
Write React Code
      ↓
Build Application
`,

        example: `
npm create vite@latest my-react-app

cd my-react-app

npm install

npm run dev
`,

        output: `
VITE development server running.

Local: http://localhost:5173/
`
    },


    // ============================================================
    // 6. PROJECT STRUCTURE
    // ============================================================

    {
        id: 6,
        module: "environment-setup",
        title: "React Project Structure",
        concept: "A React project contains source code, dependencies, configuration files, and build-related files.",
        difficulty: "Easy",

        theory: `
A typical Vite React project looks like:

my-react-app
│
├── node_modules
│
├── public
│
├── src
│   ├── assets
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

Important folders and files:

src

Contains the main React source code.

public

Contains static public assets.

App.jsx

Usually contains the main application component.

main.jsx

Entry point where the React application is mounted.

index.html

The HTML document containing the root element.

package.json

Contains project metadata, dependencies, and scripts.

node_modules

Contains installed packages.

vite.config.js

Contains Vite configuration.
`,

        example: `
src/
    App.jsx
    main.jsx

App.jsx:

function App() {

    return (
        <h1>
            Hello React
        </h1>
    );

}

export default App;
`,

        output: `
Hello React
`
    },


    // ============================================================
    // 7. PACKAGE.JSON
    // ============================================================

    {
        id: 7,
        module: "environment-setup",
        title: "package.json",
        concept: "package.json is the main project configuration file that contains metadata, dependencies, and npm scripts.",
        difficulty: "Easy",

        theory: `
package.json is an important file in a Node.js and React project.

It contains information such as:

- Project name
- Project version
- Scripts
- Dependencies
- Development dependencies

Example:

"scripts": {
    "dev": "vite",
    "build": "vite build"
}

When we run:

npm run dev

npm looks at package.json and executes the dev script.

Dependencies describe packages required by the application.

For example:

"dependencies": {
    "react": "...",
    "react-dom": "..."
}
`,

        example: `
{
    "name": "my-react-app",

    "scripts": {
        "dev": "vite",
        "build": "vite build"
    },

    "dependencies": {
        "react": "^19.0.0",
        "react-dom": "^19.0.0"
    }
}
`,

        output: `
package.json manages project configuration,
dependencies, and npm scripts.
`
    },


    // ============================================================
    // 8. PACKAGE-LOCK.JSON
    // ============================================================

    {
        id: 8,
        module: "environment-setup",
        title: "package-lock.json",
        concept: "package-lock.json records the exact dependency versions and dependency tree installed for a project.",
        difficulty: "Easy",

        theory: `
package-lock.json is automatically generated by npm.

It records detailed information about installed packages.

It helps ensure that the same dependency versions can be
installed consistently.

For example:

Developer A
    ↓
npm install
    ↓
package-lock.json

Developer B
    ↓
npm install
    ↓
Same locked dependency versions

Important:

package.json describes the project's dependency requirements.

package-lock.json records the resolved dependency versions
and dependency tree.

Normally, package-lock.json should be committed to version control
for applications.
`,

        example: `
npm install
`,

        output: `
package-lock.json is created or updated automatically.
`
    },


    // ============================================================
    // 9. NODE_MODULES
    // ============================================================

    {
        id: 9,
        module: "environment-setup",
        title: "node_modules",
        concept: "node_modules is the directory where npm installs project dependencies and their dependencies.",
        difficulty: "Easy",

        theory: `
node_modules contains the packages installed for a project.

For example, after:

npm install

npm downloads the dependencies specified in package.json
and places them inside node_modules.

Example:

node_modules
    ├── react
    ├── react-dom
    ├── vite
    └── ...

The folder can become very large because dependencies can
have their own dependencies.

node_modules is normally not committed to Git.

It can be recreated using:

npm install

based on package.json and package-lock.json.
`,

        example: `
npm install
`,

        output: `
Dependencies are installed inside node_modules.
`
    },


    // ============================================================
    // 10. NPM INSTALL
    // ============================================================

    {
        id: 10,
        module: "environment-setup",
        title: "npm install",
        concept: "npm install installs the dependencies required by a project.",
        difficulty: "Easy",

        theory: `
npm install is one of the most commonly used npm commands.

When you run:

npm install

npm reads:

package.json

and:

package-lock.json

Then it installs the required dependencies into:

node_modules

You can also install a specific package.

Example:

npm install axios

This installs Axios and adds it to the project's dependencies.

The basic flow is:

package.json
      ↓
npm install
      ↓
node_modules
`,

        example: `
npm install

npm install axios
`,

        output: `
Packages are installed successfully.
`
    },


    // ============================================================
    // 11. NPM RUN DEV
    // ============================================================

    {
        id: 11,
        module: "environment-setup",
        title: "npm run dev",
        concept: "npm run dev executes the development script defined in package.json and usually starts the Vite development server.",
        difficulty: "Easy",

        theory: `
npm run dev is commonly used to start a React development server
in a Vite project.

The command looks at:

package.json

For example:

"scripts": {
    "dev": "vite"
}

When we execute:

npm run dev

npm executes:

vite

The Vite development server then starts the application.

Typical output:

VITE vX.X.X ready

Local:
http://localhost:5173/
`,

        example: `
npm run dev
`,

        output: `
VITE development server running.

Local: http://localhost:5173/
`
    },


    // ============================================================
    // 12. NPM RUN BUILD
    // ============================================================

    {
        id: 12,
        module: "environment-setup",
        title: "npm run build",
        concept: "npm run build creates an optimized production build of the React application.",
        difficulty: "Easy",

        theory: `
npm run build is used to create the production version
of the application.

In a Vite project, package.json commonly contains:

"scripts": {
    "dev": "vite",
    "build": "vite build"
}

When we execute:

npm run build

Vite:

- Processes the application
- Optimizes assets
- Bundles JavaScript and CSS
- Creates production-ready files

The output is normally generated inside:

dist/

The basic flow is:

React Source Code
        ↓
npm run build
        ↓
Vite Production Build
        ↓
dist/
`,

        example: `
npm run build
`,

        output: `
dist/
    ├── assets/
    └── index.html
`
    }

];


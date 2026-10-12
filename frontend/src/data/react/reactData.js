import { reactBasicsTopics } from "./reactBasics";
import { environmentSetupTopics } from "./environmentSetup";
import { jsxTopics } from "./jsx";
import { componentsTopics } from "./components";
import { propsTopics } from "./props";
import { stateTopics } from "./state";
import { eventsTopics } from "./events";
import { conditionalRenderingTopics } from "./conditionalRendering";
import { listsAndKeysTopics } from "./listsAndKeys";
import { formsTopics } from "./forms";

import { hooksTopics } from "./hooks";
import { useStateTopics } from "./useState";
import { useEffectTopics } from "./useEffect";
import { useRefTopics } from "./useRef";
import { useContextTopics } from "./useContext";
import { useReducerTopics } from "./useReducer";
import { customHooksTopics } from "./customHooks";

import { componentLifecycleTopics } from "./componentLifecycle";
import { reactRouterTopics } from "./reactRouter";
import { apiIntegrationTopics } from "./apiIntegration";
import { authenticationTopics } from "./authentication";

import { reduxTopics } from "./redux";
import { reduxToolkitTopics } from "./reduxToolkit";

import { performanceTopics } from "./performance";
import { errorHandlingTopics } from "./errorHandling";
import { reactAdvancedTopics } from "./reactAdvanced";
import { reactCssTopics } from "./reactCss";
import { projectArchitectureTopics } from "./projectArchitecture";
import { testingTopics } from "./testing";
import { deploymentTopics } from "./deployment";

import { realWorldProjectsTopics } from "./realWorldProjects";
import { interviewQuestionsTopics } from "./interviewQuestions";
import { codingProblemsTopics } from "./codingProblems";


export const reactModules = [

    // ============================================================
    // 1. REACT BASICS
    // ============================================================

    {
        id: "react-basics",
        title: "React Basics",
        description:
            "Learn the fundamentals of React, why React is used, its features and how React applications work.",

        topics: reactBasicsTopics
    },


    // ============================================================
    // 2. ENVIRONMENT SETUP
    // ============================================================

    {
        id: "environment-setup",
        title: "Environment Setup",
        description:
            "Learn how to install Node.js, npm, Vite and create and run a React application.",

        topics: environmentSetupTopics
    },


    // ============================================================
    // 3. JSX
    // ============================================================

    {
        id: "jsx",
        title: "JSX",
        description:
            "Learn JSX syntax, expressions, attributes, JavaScript inside JSX and JSX rules.",

        topics: jsxTopics
    },


    // ============================================================
    // 4. COMPONENTS
    // ============================================================

    {
        id: "components",
        title: "Components",
        description:
            "Learn functional components, reusable components, component structure and component composition.",

        topics: componentsTopics
    },


    // ============================================================
    // 5. PROPS
    // ============================================================

    {
        id: "props",
        title: "Props",
        description:
            "Learn how to pass data from parent components to child components using props.",

        topics: propsTopics
    },


    // ============================================================
    // 6. STATE
    // ============================================================

    {
        id: "state",
        title: "State",
        description:
            "Learn component state, state updates, state management and how state affects rendering.",

        topics: stateTopics
    },


    // ============================================================
    // 7. EVENTS
    // ============================================================

    {
        id: "events",
        title: "Events",
        description:
            "Learn how to handle click, change, submit and other user events in React.",

        topics: eventsTopics
    },


    // ============================================================
    // 8. CONDITIONAL RENDERING
    // ============================================================

    {
        id: "conditional-rendering",
        title: "Conditional Rendering",
        description:
            "Learn how to display different UI elements based on conditions in React.",

        topics: conditionalRenderingTopics
    },


    // ============================================================
    // 9. LISTS & KEYS
    // ============================================================

    {
        id: "lists-and-keys",
        title: "Lists & Keys",
        description:
            "Learn how to render lists using map(), why keys are required and how React uses keys.",

        topics: listsAndKeysTopics
    },


    // ============================================================
    // 10. FORMS
    // ============================================================

    {
        id: "forms",
        title: "Forms",
        description:
            "Learn controlled components, form inputs, validation and form submission in React.",

        topics: formsTopics
    },


    // ============================================================
    // 11. HOOKS
    // ============================================================

    {
        id: "hooks",
        title: "React Hooks",
        description:
            "Learn React Hooks and how Hooks allow functional components to use state and other React features.",

        topics: hooksTopics
    },


    // ============================================================
    // 12. useState
    // ============================================================

    {
        id: "use-state",
        title: "useState",
        description:
            "Learn how useState is used to create and update state inside functional components.",

        topics: useStateTopics
    },


    // ============================================================
    // 13. useEffect
    // ============================================================

    {
        id: "use-effect",
        title: "useEffect",
        description:
            "Learn side effects, API calls, dependency arrays and cleanup functions using useEffect.",

        topics: useEffectTopics
    },


    // ============================================================
    // 14. useRef
    // ============================================================

    {
        id: "use-ref",
        title: "useRef",
        description:
            "Learn how useRef stores mutable values and provides access to DOM elements.",

        topics: useRefTopics
    },


    // ============================================================
    // 15. useContext
    // ============================================================

    {
        id: "use-context",
        title: "useContext",
        description:
            "Learn how to share data between components without passing props through every level.",

        topics: useContextTopics
    },


    // ============================================================
    // 16. useReducer
    // ============================================================

    {
        id: "use-reducer",
        title: "useReducer",
        description:
            "Learn reducer-based state management for complex component state.",

        topics: useReducerTopics
    },


    // ============================================================
    // 17. CUSTOM HOOKS
    // ============================================================

    {
        id: "custom-hooks",
        title: "Custom Hooks",
        description:
            "Learn how to create reusable custom Hooks and share logic between React components.",

        topics: customHooksTopics
    },


    // ============================================================
    // 18. COMPONENT LIFECYCLE
    // ============================================================

    {
        id: "component-lifecycle",
        title: "Component Lifecycle",
        description:
            "Learn mounting, updating, unmounting and how React manages component lifecycle behavior.",

        topics: componentLifecycleTopics
    },


    // ============================================================
    // 19. REACT ROUTER
    // ============================================================

    {
        id: "react-router",
        title: "React Router",
        description:
            "Learn routing, routes, navigation, URL parameters, nested routes and protected routes.",

        topics: reactRouterTopics
    },


    // ============================================================
    // 20. API INTEGRATION
    // ============================================================

    {
        id: "api-integration",
        title: "API Integration",
        description:
            "Learn how React communicates with backend APIs using fetch, Axios and asynchronous operations.",

        topics: apiIntegrationTopics
    },


    // ============================================================
    // 21. AUTHENTICATION
    // ============================================================

    {
        id: "authentication",
        title: "Authentication",
        description:
            "Learn login, logout, JWT authentication, protected routes and authentication state in React.",

        topics: authenticationTopics
    },


    // ============================================================
    // 22. REDUX
    // ============================================================

    {
        id: "redux",
        title: "Redux",
        description:
            "Learn global state management using Redux, store, actions, reducers and dispatch.",

        topics: reduxTopics
    },


    // ============================================================
    // 23. REDUX TOOLKIT
    // ============================================================

    {
        id: "redux-toolkit",
        title: "Redux Toolkit",
        description:
            "Learn modern Redux using configureStore, createSlice, selectors and Redux Toolkit.",

        topics: reduxToolkitTopics
    },


    // ============================================================
    // 24. PERFORMANCE
    // ============================================================

    {
        id: "performance",
        title: "Performance Optimization",
        description:
            "Learn React performance optimization, memoization, lazy loading and unnecessary re-render prevention.",

        topics: performanceTopics
    },


    // ============================================================
    // 25. ERROR HANDLING
    // ============================================================

    {
        id: "error-handling",
        title: "Error Handling",
        description:
            "Learn error boundaries, API errors, loading states and handling errors in React applications.",

        topics: errorHandlingTopics
    },


    // ============================================================
    // 26. REACT ADVANCED
    // ============================================================

    {
        id: "react-advanced",
        title: "React Advanced",
        description:
            "Learn advanced React concepts, patterns and techniques used in production applications.",

        topics: reactAdvancedTopics
    },


    // ============================================================
    // 27. REACT CSS
    // ============================================================

    {
        id: "react-css",
        title: "React CSS",
        description:
            "Learn different approaches for styling React applications including CSS, modules and inline styles.",

        topics: reactCssTopics
    },


    // ============================================================
    // 28. PROJECT ARCHITECTURE
    // ============================================================

    {
        id: "project-architecture",
        title: "Project Architecture",
        description:
            "Learn how to structure React applications, organize components, pages, services, Redux and utilities.",

        topics: projectArchitectureTopics
    },


    // ============================================================
    // 29. TESTING
    // ============================================================

    {
        id: "testing",
        title: "Testing",
        description:
            "Learn how to test React components, user interactions and application behavior.",

        topics: testingTopics
    },


    // ============================================================
    // 30. DEPLOYMENT
    // ============================================================

    {
        id: "deployment",
        title: "Deployment",
        description:
            "Learn how to build and deploy React applications to production environments.",

        topics: deploymentTopics
    },


    // ============================================================
    // 31. REAL WORLD PROJECTS
    // ============================================================

    {
        id: "real-world-projects",
        title: "Real World Projects",
        description:
            "Practice React by building real-world applications using APIs, authentication, state management and reusable components.",

        topics: realWorldProjectsTopics
    },


    // ============================================================
    // 32. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: "interview-questions",
        title: "React Interview Questions",
        description:
            "Prepare for React interviews with basic, intermediate and advanced React interview questions.",

        topics: interviewQuestionsTopics
    },


    // ============================================================
    // 33. CODING PROBLEMS
    // ============================================================

    {
        id: "coding-problems",
        title: "React Coding Problems",
        description:
            "Practice React coding problems based on components, Hooks, state, APIs, forms and real-world scenarios.",

        topics: codingProblemsTopics
    }

];


console.log("REACT DATA:", reactModules);
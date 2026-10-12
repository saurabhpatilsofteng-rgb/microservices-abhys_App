export const cssModules = [

    {
        id: 1,
        slug: "css-fundamentals",
        title: "CSS Fundamentals",
        category: "CSS",
        description:
            "Learn the fundamentals of CSS, selectors, properties and the CSS cascade.",

        topics: [

            {
                id: 1,
                title: "What is CSS?",

                explanation:
                    "CSS stands for Cascading Style Sheets. It is used to control the presentation, layout and visual appearance of HTML documents.",

                importance:
                    "HTML provides structure, while CSS makes the application visually attractive, responsive and easier to use.",

                code:
`<!DOCTYPE html>

<html>

<head>

    <style>

        h1 {
            color: blue;
        }

        p {
            font-size: 18px;
        }

    </style>

</head>

<body>

    <h1>Hello CSS</h1>

    <p>
        CSS styles HTML elements.
    </p>

</body>

</html>`
            },

            {
                id: 2,
                title: "CSS Syntax",

                explanation:
                    "A CSS rule consists of a selector followed by declarations. Each declaration contains a property and value.",

                importance:
                    "Understanding CSS syntax is the foundation for writing styles.",

                code:
`selector {

    property: value;

}

p {

    color: red;
    font-size: 20px;

}`
            },

            {
                id: 3,
                title: "Inline CSS",

                explanation:
                    "Inline CSS is written directly inside an HTML element using the style attribute.",

                importance:
                    "It is useful for quick demonstrations but should generally be avoided for large applications.",

                code:
`<h1 style="color: blue;">
    Hello
</h1>`
            },

            {
                id: 4,
                title: "Internal CSS",

                explanation:
                    "Internal CSS is written inside a style element in the HTML document.",

                importance:
                    "It can be useful when styles are specific to a single HTML page.",

                code:
`<style>

    h1 {
        color: blue;
    }

    p {
        color: gray;
    }

</style>`
            },

            {
                id: 5,
                title: "External CSS",

                explanation:
                    "External CSS stores styles in a separate .css file and connects it to HTML using a link element.",

                importance:
                    "External stylesheets provide better separation of concerns, reuse and maintainability.",

                code:
`<link
    rel="stylesheet"
    href="style.css"
>`

            }

        ]
    },


    {
        id: 2,
        slug: "css-selectors",
        title: "CSS Selectors",
        category: "CSS",
        description:
            "Learn element, class, ID, attribute, pseudo-class and combinator selectors.",

        topics: [

            {
                id: 1,
                title: "Element Selector",

                explanation:
                    "An element selector selects HTML elements by their tag name.",

                importance:
                    "It is useful when all elements of a particular type need common styling.",

                code:
`p {

    color: blue;

}

h1 {

    font-size: 32px;

}`
            },

            {
                id: 2,
                title: "Class Selector",

                explanation:
                    "A class selector targets elements containing a specific class attribute.",

                importance:
                    "Classes are commonly used for reusable styles.",

                code:
`.card {

    padding: 20px;
    border: 1px solid black;

}

.button {

    padding: 10px 20px;

}`
            },

            {
                id: 3,
                title: "ID Selector",

                explanation:
                    "An ID selector targets an element using its unique id attribute.",

                importance:
                    "IDs can identify specific elements, although reusable styling is generally better handled with classes.",

                code:
`#header {

    background: black;
    color: white;

}`
            },

            {
                id: 4,
                title: "Universal Selector",

                explanation:
                    "The universal selector targets all elements.",

                importance:
                    "It is commonly used in CSS resets or global rules.",

                code:
`* {

    margin: 0;
    padding: 0;

}`
            },

            {
                id: 5,
                title: "Attribute Selector",

                explanation:
                    "Attribute selectors target elements based on their attributes.",

                importance:
                    "They are useful when styling elements according to attributes such as type, disabled or data attributes.",

                code:
`input[type="text"] {

    border: 1px solid gray;

}

input[disabled] {

    opacity: 0.5;

}`
            },

            {
                id: 6,
                title: "Descendant Selector",

                explanation:
                    "A descendant selector targets elements that exist inside another element.",

                importance:
                    "It allows styles to be scoped to a particular section of the document.",

                code:
`.card p {

    color: gray;

}`
            },

            {
                id: 7,
                title: "Child Selector",

                explanation:
                    "The child combinator selects elements that are direct children of another element.",

                importance:
                    "It provides more precise control than a descendant selector.",

                code:
`.menu > li {

    display: inline-block;

}`
            }

        ]
    },


    {
        id: 3,
        slug: "css-colors-backgrounds",
        title: "Colors & Backgrounds",
        category: "CSS",
        description:
            "Learn colors, backgrounds, gradients and transparency.",

        topics: [

            {
                id: 1,
                title: "Color",

                explanation:
                    "The color property controls the foreground text color of an element.",

                importance:
                    "Color is fundamental to visual hierarchy and UI design.",

                code:
`p {

    color: red;

}

.title {

    color: #333333;

}`
            },

            {
                id: 2,
                title: "Background Color",

                explanation:
                    "The background-color property sets the background color of an element.",

                importance:
                    "It is commonly used to create cards, sections, buttons and page backgrounds.",

                code:
`.card {

    background-color: white;

}

body {

    background-color: #f5f5f5;

}`
            },

            {
                id: 3,
                title: "Background Image",

                explanation:
                    "The background-image property places an image behind an element's content.",

                importance:
                    "Background images are useful for hero sections, decorative elements and visual layouts.",

                code:
`.hero {

    background-image:
        url("hero.jpg");

    background-size: cover;

    background-position: center;

}`
            },

            {
                id: 4,
                title: "Linear Gradient",

                explanation:
                    "A linear gradient creates a gradual transition between colors.",

                importance:
                    "Gradients are frequently used in modern interfaces and hero sections.",

                code:
`.hero {

    background:
        linear-gradient(
            90deg,
            blue,
            purple
        );

}`
            },

            {
                id: 5,
                title: "Opacity",

                explanation:
                    "The opacity property controls the transparency of an element.",

                importance:
                    "It can be useful for overlays, disabled states and visual effects.",

                code:
`.disabled {

    opacity: 0.5;

}`
            }

        ]
    },


    {
        id: 4,
        slug: "css-box-model",
        title: "CSS Box Model",
        category: "CSS",
        description:
            "Understand content, padding, border, margin and box sizing.",

        topics: [

            {
                id: 1,
                title: "Box Model",

                explanation:
                    "Every HTML element can be represented as a rectangular box consisting of content, padding, border and margin.",

                importance:
                    "Understanding the box model is essential for accurate layout and spacing.",

                code:
`.box {

    width: 200px;

    padding: 20px;

    border: 2px solid black;

    margin: 30px;

}`
            },

            {
                id: 2,
                title: "Padding",

                explanation:
                    "Padding creates space between an element's content and its border.",

                importance:
                    "Padding is commonly used to create internal spacing inside cards, buttons and containers.",

                code:
`.card {

    padding: 20px;

}`
            },

            {
                id: 3,
                title: "Margin",

                explanation:
                    "Margin creates space outside an element's border.",

                importance:
                    "Margin controls external spacing between elements.",

                code:
`.card {

    margin: 20px;

}`
            },

            {
                id: 4,
                title: "Border",

                explanation:
                    "The border surrounds the padding and content area of an element.",

                importance:
                    "Borders are commonly used for cards, inputs, tables and visual separation.",

                code:
`.card {

    border: 1px solid #ddd;

}`
            },

            {
                id: 5,
                title: "box-sizing",

                explanation:
                    "The box-sizing property controls how width and height calculations include padding and borders.",

                importance:
                    "Using border-box makes layouts easier to reason about.",

                code:
`* {

    box-sizing: border-box;

}

.card {

    width: 300px;

    padding: 20px;

    border: 2px solid black;

}`
            }

        ]
    },


    {
        id: 5,
        slug: "css-units",
        title: "CSS Units",
        category: "CSS",
        description:
            "Learn px, %, em, rem, vh, vw and other CSS measurement units.",

        topics: [

            {
                id: 1,
                title: "Pixels",

                explanation:
                    "The px unit represents a CSS pixel.",

                importance:
                    "Pixels are commonly used when a fixed measurement is appropriate.",

                code:
`.box {

    width: 300px;

    height: 200px;

}`
            },

            {
                id: 2,
                title: "Percentage",

                explanation:
                    "Percentages are generally relative to another dimension of the containing context.",

                importance:
                    "They are useful for fluid layouts.",

                code:
`.container {

    width: 80%;

}`
            },

            {
                id: 3,
                title: "em",

                explanation:
                    "The em unit is relative to the font size of the relevant element or inherited context depending on the property.",

                importance:
                    "It can be useful for component-relative sizing.",

                code:
`.button {

    font-size: 16px;

    padding: 1em 2em;

}`
            },

            {
                id: 4,
                title: "rem",

                explanation:
                    "The rem unit is relative to the root element's font size.",

                importance:
                    "rem is widely used for scalable typography and spacing.",

                code:
`html {

    font-size: 16px;

}

.title {

    font-size: 2rem;

}`
            },

            {
                id: 5,
                title: "Viewport Units",

                explanation:
                    "vh and vw are relative to the viewport dimensions.",

                importance:
                    "They are useful for full-screen sections and responsive layouts.",

                code:
`.hero {

    min-height: 100vh;

    width: 100vw;

}`
            }

        ]
    },


    {
        id: 6,
        slug: "css-display-position",
        title: "Display & Position",
        category: "CSS",
        description:
            "Learn display modes and CSS positioning.",

        topics: [

            {
                id: 1,
                title: "display block",

                explanation:
                    "Block-level elements normally occupy the available width and begin on a new line.",

                importance:
                    "Block layout is fundamental to page structure.",

                code:
`.box {

    display: block;

}`
            },

            {
                id: 2,
                title: "display inline",

                explanation:
                    "Inline elements participate in the inline flow and normally do not start on a new line.",

                importance:
                    "It is useful for text-level content and inline controls.",

                code:
`.text {

    display: inline;

}`
            },

            {
                id: 3,
                title: "display inline-block",

                explanation:
                    "Inline-block elements participate in inline flow while allowing width and height to be applied.",

                importance:
                    "It can be useful for compact navigation items and controls.",

                code:
`.item {

    display: inline-block;

    width: 150px;

}`
            },

            {
                id: 4,
                title: "display none",

                explanation:
                    "display:none removes the element from the layout.",

                importance:
                    "It is useful when an element should not participate in layout.",

                code:
`.hidden {

    display: none;

}`
            },

            {
                id: 5,
                title: "Position Relative",

                explanation:
                    "relative positioning keeps the element in normal flow while allowing offsets and positioning of descendants.",

                importance:
                    "It is frequently used as a positioning context for absolutely positioned children.",

                code:
`.card {

    position: relative;

}`
            },

            {
                id: 6,
                title: "Position Absolute",

                explanation:
                    "An absolutely positioned element is removed from normal flow and positioned relative to an appropriate containing block.",

                importance:
                    "It is useful for badges, overlays, icons and layered UI components.",

                code:
`.card {

    position: relative;

}

.badge {

    position: absolute;

    top: 10px;

    right: 10px;

}`
            },

            {
                id: 7,
                title: "Position Fixed",

                explanation:
                    "Fixed positioning places an element relative to the viewport.",

                importance:
                    "It is commonly used for fixed headers, floating buttons and overlays.",

                code:
`.header {

    position: fixed;

    top: 0;

    left: 0;

    width: 100%;

}`
            },

            {
                id: 8,
                title: "Position Sticky",

                explanation:
                    "Sticky positioning behaves like relatively positioned content until a scroll threshold is reached.",

                importance:
                    "It is useful for sticky sidebars, table headers and navigation.",

                code:
`.sidebar {

    position: sticky;

    top: 20px;

}`
            }

        ]
    },


    {
        id: 7,
        slug: "css-flexbox",
        title: "Flexbox",
        category: "CSS",
        description:
            "Master one-dimensional layouts using CSS Flexbox.",

        topics: [

            {
                id: 1,
                title: "What is Flexbox?",

                explanation:
                    "Flexbox is a CSS layout model designed for arranging elements along a single main axis.",

                importance:
                    "Flexbox is one of the most important CSS layout systems used in modern applications.",

                code:
`.container {

    display: flex;

}`
            },

            {
                id: 2,
                title: "flex-direction",

                explanation:
                    "flex-direction controls the main axis direction of a flex container.",

                importance:
                    "It determines whether children are arranged horizontally or vertically.",

                code:
`.container {

    display: flex;

    flex-direction: column;

}`
            },

            {
                id: 3,
                title: "justify-content",

                explanation:
                    "justify-content controls alignment along the main axis.",

                importance:
                    "It is commonly used to distribute space and align content.",

                code:
`.container {

    display: flex;

    justify-content:
        space-between;

}`
            },

            {
                id: 4,
                title: "align-items",

                explanation:
                    "align-items controls alignment of flex items along the cross axis.",

                importance:
                    "It is essential for vertical alignment in row-based layouts.",

                code:
`.container {

    display: flex;

    align-items: center;

}`
            },

            {
                id: 5,
                title: "gap",

                explanation:
                    "The gap property defines spacing between flex or grid items.",

                importance:
                    "It provides cleaner spacing without needing margins between child elements.",

                code:
`.container {

    display: flex;

    gap: 20px;

}`
            },

            {
                id: 6,
                title: "flex-wrap",

                explanation:
                    "flex-wrap controls whether flex items can move onto multiple lines.",

                importance:
                    "It is useful for responsive card and navigation layouts.",

                code:
`.container {

    display: flex;

    flex-wrap: wrap;

    gap: 20px;

}`
            }

        ]
    },


    {
        id: 8,
        slug: "css-grid",
        title: "CSS Grid",
        category: "CSS",
        description:
            "Learn two-dimensional layouts using CSS Grid.",

        topics: [

            {
                id: 1,
                title: "What is CSS Grid?",

                explanation:
                    "CSS Grid is a two-dimensional layout system that allows elements to be arranged into rows and columns.",

                importance:
                    "Grid is ideal for complex page layouts, dashboards and card systems.",

                code:
`.container {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;

}`
            },

            {
                id: 2,
                title: "grid-template-columns",

                explanation:
                    "This property defines the columns of a grid container.",

                importance:
                    "It controls the basic horizontal structure of a grid.",

                code:
`.container {

    display: grid;

    grid-template-columns:
        200px 1fr 200px;

}`
            },

            {
                id: 3,
                title: "grid-template-rows",

                explanation:
                    "This property defines grid row sizes.",

                importance:
                    "It is useful for structured dashboard and page layouts.",

                code:
`.container {

    display: grid;

    grid-template-rows:
        auto 1fr auto;

}`
            },

            {
                id: 4,
                title: "Grid Area",

                explanation:
                    "Grid items can be placed into named grid areas.",

                importance:
                    "Named areas make large layouts easier to understand and maintain.",

                code:
`.layout {

    display: grid;

    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";

}

.header {

    grid-area: header;

}

.sidebar {

    grid-area: sidebar;

}

.main {

    grid-area: main;

}

.footer {

    grid-area: footer;

}`
            }

        ]
    },


    {
        id: 9,
        slug: "css-responsive-design",
        title: "Responsive Design",
        category: "CSS",
        description:
            "Learn media queries and responsive layout techniques.",

        topics: [

            {
                id: 1,
                title: "Responsive Web Design",

                explanation:
                    "Responsive design allows a website to adapt to different screen sizes and devices.",

                importance:
                    "Modern web applications must work across desktop, tablet and mobile screens.",

                code:
`.container {

    width: 90%;

    max-width: 1200px;

    margin: auto;

}`
            },

            {
                id: 2,
                title: "Media Queries",

                explanation:
                    "Media queries apply CSS rules based on conditions such as viewport width.",

                importance:
                    "They are fundamental to responsive layouts.",

                code:
`@media (max-width: 768px) {

    .container {

        flex-direction: column;

    }

}`
            },

            {
                id: 3,
                title: "Mobile First",

                explanation:
                    "Mobile-first development starts with styles for smaller screens and progressively enhances them for larger screens.",

                importance:
                    "It encourages simpler responsive designs and prioritizes smaller screens.",

                code:
`.card {

    width: 100%;

}

@media (min-width: 768px) {

    .card {

        width: 50%;

    }

}`
            }

        ]
    },


    {
        id: 10,
        slug: "css-typography",
        title: "Typography",
        category: "CSS",
        description:
            "Learn fonts, text alignment, spacing and typography.",

        topics: [

            {
                id: 1,
                title: "font-family",

                explanation:
                    "The font-family property specifies the typeface used for text.",

                importance:
                    "Typography has a major impact on readability and application design.",

                code:
`body {

    font-family:
        Arial,
        sans-serif;

}`
            },

            {
                id: 2,
                title: "font-size",

                explanation:
                    "font-size controls the size of text.",

                importance:
                    "Correct sizing establishes visual hierarchy.",

                code:
`h1 {

    font-size: 2rem;

}

p {

    font-size: 1rem;

}`
            },

            {
                id: 3,
                title: "font-weight",

                explanation:
                    "font-weight controls the thickness of text.",

                importance:
                    "It is useful for headings, emphasis and visual hierarchy.",

                code:
`.title {

    font-weight: 700;

}`
            },

            {
                id: 4,
                title: "text-align",

                explanation:
                    "text-align controls horizontal text alignment.",

                importance:
                    "It is useful for headings, buttons and content sections.",

                code:
`.title {

    text-align: center;

}`
            },

            {
                id: 5,
                title: "line-height",

                explanation:
                    "line-height controls the height of text lines.",

                importance:
                    "Appropriate line height significantly improves readability.",

                code:
`p {

    line-height: 1.6;

}`
            }

        ]
    },


    {
        id: 11,
        slug: "css-transitions-animations",
        title: "Transitions & Animations",
        category: "CSS",
        description:
            "Learn CSS transitions, transforms and keyframe animations.",

        topics: [

            {
                id: 1,
                title: "Transition",

                explanation:
                    "CSS transitions animate changes between property values over a specified duration.",

                importance:
                    "Transitions provide smooth interactions and improve perceived UI quality.",

                code:
`.button {

    background: black;

    transition:
        background 0.3s ease;

}

.button:hover {

    background: gray;

}`
            },

            {
                id: 2,
                title: "Transform",

                explanation:
                    "The transform property changes the visual position, size, rotation or skew of an element.",

                importance:
                    "Transforms are useful for interactive effects and animations.",

                code:
`.card:hover {

    transform:
        translateY(-5px);

}`
            },

            {
                id: 3,
                title: "Keyframes",

                explanation:
                    "CSS keyframes define intermediate stages of an animation.",

                importance:
                    "Keyframes allow more complex animations than simple transitions.",

                code:
`@keyframes slide {

    from {

        transform:
            translateX(-100px);

    }

    to {

        transform:
            translateX(0);

    }

}

.box {

    animation:
        slide 0.5s ease;

}`
            }

        ]
    },


    {
        id: 12,
        slug: "css-specificity-cascade",
        title: "Cascade & Specificity",
        category: "CSS",
        description:
            "Understand how CSS decides which styles are applied.",

        topics: [

            {
                id: 1,
                title: "CSS Cascade",

                explanation:
                    "The cascade determines which declarations apply when multiple CSS rules target the same element.",

                importance:
                    "Understanding the cascade is essential for debugging CSS.",

                code:
`p {

    color: blue;

}

p {

    color: red;

}

/*
    Later declaration wins
    when other conditions
    are equivalent.
*/`
            },

            {
                id: 2,
                title: "Specificity",

                explanation:
                    "Specificity is the algorithm used to determine which competing selector has greater priority.",

                importance:
                    "It explains why some CSS rules override others.",

                code:
`p {

    color: blue;

}

.text {

    color: green;

}

#message {

    color: red;

}`
            },

            {
                id: 3,
                title: "!important",

                explanation:
                    "!important increases the priority of a declaration within the cascade.",

                importance:
                    "It should be used carefully because excessive use makes CSS harder to maintain.",

                code:
`.title {

    color: red !important;

}`
            }

        ]
    },


    {
        id: 13,
        slug: "css-interview-questions",
        title: "CSS Interview Questions",
        category: "CSS",
        description:
            "Important CSS interview concepts for frontend and full-stack developers.",

        topics: [

            {
                id: 1,
                title: "Flexbox vs Grid",

                explanation:
                    "Flexbox is primarily a one-dimensional layout system, while Grid is a two-dimensional layout system.",

                importance:
                    "This is one of the most common CSS layout interview questions.",

                code:
`Flexbox
    ↓
One dimension
    ↓
Row OR Column


Grid
    ↓
Two dimensions
    ↓
Rows AND Columns`
            },

            {
                id: 2,
                title: "position absolute vs fixed",

                explanation:
                    "Absolute positioning is generally relative to an appropriate containing block, while fixed positioning is generally relative to the viewport.",

                importance:
                    "Understanding positioning is essential for professional UI development.",

                code:
`.absolute {

    position: absolute;

}

.fixed {

    position: fixed;

}`
            },

            {
                id: 3,
                title: "margin vs padding",

                explanation:
                    "Margin creates space outside an element while padding creates space inside the element around its content.",

                importance:
                    "This is a fundamental CSS box-model interview question.",

                code:
`.card {

    margin: 20px;

    padding: 20px;

}`
            },

            {
                id: 4,
                title: "em vs rem",

                explanation:
                    "rem is relative to the root element's font size, while em is relative to the relevant element's font-size context.",

                importance:
                    "Understanding relative units is important for scalable responsive interfaces.",

                code:
`html {

    font-size: 16px;

}

.title {

    font-size: 2rem;

}

.button {

    font-size: 16px;

    padding: 1em;

}`
            },

            {
                id: 5,
                title: "What is CSS Specificity?",

                explanation:
                    "Specificity determines which competing CSS selector has priority when multiple rules apply to the same element.",

                importance:
                    "It is one of the most important concepts when debugging CSS.",

                code:
`/* Low */

p {
    color: blue;
}


/* Higher */

.text {
    color: green;
}


/* Higher */

#title {
    color: red;
}`
            },

            {
                id: 6,
                title: "What is Responsive Design?",

                explanation:
                    "Responsive design creates layouts that adapt to different screen sizes and devices.",

                importance:
                    "Almost every professional web application needs responsive behavior.",

                code:
`@media (max-width: 768px) {

    .sidebar {

        display: none;

    }

    .content {

        width: 100%;

    }

}`
            }

        ]
    }

];
export const htmlModules = [

    {
        id: 1,
        slug: "html-fundamentals",
        title: "HTML Fundamentals",
        category: "HTML",
        description:
            "Understand the fundamentals of HTML and how browsers interpret HTML documents.",

        topics: [

            {
                id: 1,
                title: "What is HTML?",

                explanation:
                    "HTML stands for HyperText Markup Language. It is the standard markup language used to structure content on web pages.",

                importance:
                    "HTML is the foundation of every web page. CSS controls presentation and JavaScript adds behavior, but HTML provides the document structure.",

                code:
`<!DOCTYPE html>

<html>

<head>
    <title>My Page</title>
</head>

<body>

    <h1>Hello World</h1>

    <p>
        Welcome to HTML.
    </p>

</body>

</html>`
            },

            {
                id: 2,
                title: "HTML Element",

                explanation:
                    "An HTML element generally consists of an opening tag, content and a closing tag.",

                importance:
                    "HTML pages are built by combining different elements such as headings, paragraphs, links, images and forms.",

                code:
`<p>
    Hello World
</p>

<h1>
    Welcome
</h1>`
            },

            {
                id: 3,
                title: "HTML Tag",

                explanation:
                    "HTML tags are markup keywords enclosed in angle brackets and are used to define elements.",

                importance:
                    "Understanding tags is fundamental to writing HTML.",

                code:
`<h1>Heading</h1>

<p>Paragraph</p>

<a href="/">Home</a>`
            },

            {
                id: 4,
                title: "HTML Attributes",

                explanation:
                    "Attributes provide additional information or configuration for HTML elements.",

                importance:
                    "Attributes are used for links, images, forms, IDs, CSS classes and many other HTML features.",

                code:
`<a
    href="https://example.com"
    target="_blank"
>
    Open Website
</a>

<img
    src="image.jpg"
    alt="Profile Image"
>`
            },

            {
                id: 5,
                title: "DOCTYPE",

                explanation:
                    "The DOCTYPE declaration tells the browser which HTML standard the document follows.",

                importance:
                    "HTML5 documents should start with the HTML5 DOCTYPE declaration.",

                code:
`<!DOCTYPE html>`
            }

        ]
    },


    {
        id: 2,
        slug: "html-document-structure",
        title: "HTML Document Structure",
        category: "HTML",
        description:
            "Learn the standard structure of an HTML document and the purpose of head and body.",

        topics: [

            {
                id: 1,
                title: "HTML Document Structure",

                explanation:
                    "An HTML document contains the document type declaration, html element, head section and body section.",

                importance:
                    "A correct document structure is required for maintainable and standards-compliant web pages.",

                code:
`<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <title>
        My Website
    </title>

</head>

<body>

    <h1>
        Welcome
    </h1>

</body>

</html>`
            },

            {
                id: 2,
                title: "html Element",

                explanation:
                    "The html element is the root element of an HTML document.",

                importance:
                    "All other HTML elements normally exist inside the html element.",

                code:
`<html>

    ...

</html>`
            },

            {
                id: 3,
                title: "head Element",

                explanation:
                    "The head element contains metadata and resources used by the browser and search engines.",

                importance:
                    "The head contains the title, metadata, stylesheets and other document-level information.",

                code:
`<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width,
                 initial-scale=1.0"
    >

    <title>
        My Website
    </title>

</head>`
            },

            {
                id: 4,
                title: "body Element",

                explanation:
                    "The body element contains the visible content of the web page.",

                importance:
                    "Headings, paragraphs, buttons, forms, images and other visible content are placed inside body.",

                code:
`<body>

    <h1>Welcome</h1>

    <p>
        This is my website.
    </p>

    <button>
        Click Me
    </button>

</body>`
            },

            {
                id: 5,
                title: "Meta Viewport",

                explanation:
                    "The viewport meta tag controls how a page is displayed on mobile devices.",

                importance:
                    "It is essential for responsive web development.",

                code:
`<meta
    name="viewport"
    content="width=device-width,
             initial-scale=1.0"
>`
            }

        ]
    },


    {
        id: 3,
        slug: "html-text-formatting",
        title: "Text & Formatting",
        category: "HTML",
        description:
            "Learn headings, paragraphs, emphasis and text formatting elements.",

        topics: [

            {
                id: 1,
                title: "Headings",

                explanation:
                    "HTML provides six heading levels from h1 to h6.",

                importance:
                    "Headings create a hierarchical structure for users, search engines and accessibility tools.",

                code:
`<h1>Main Heading</h1>

<h2>Section</h2>

<h3>Subsection</h3>

<h4>Heading 4</h4>

<h5>Heading 5</h5>

<h6>Heading 6</h6>`
            },

            {
                id: 2,
                title: "Paragraph",

                explanation:
                    "The p element represents a paragraph of text.",

                importance:
                    "Paragraphs provide semantic structure for textual content.",

                code:
`<p>
    HTML is used to structure
    web page content.
</p>`
            },

            {
                id: 3,
                title: "Strong and Bold",

                explanation:
                    "The strong element represents strong importance, while b is primarily a stylistic bolding element.",

                importance:
                    "Semantic HTML is preferred when the text has actual importance.",

                code:
`<strong>
    Important information
</strong>

<b>
    Bold text
</b>`
            },

            {
                id: 4,
                title: "Emphasis and Italic",

                explanation:
                    "The em element represents emphasis, while i is generally used for text that is stylistically offset.",

                importance:
                    "Semantic elements communicate meaning to browsers and assistive technologies.",

                code:
`<em>
    Important emphasis
</em>

<i>
    Italic text
</i>`
            },

            {
                id: 5,
                title: "Line Break and Horizontal Rule",

                explanation:
                    "The br element creates a line break and hr represents a thematic break.",

                importance:
                    "These elements are useful for structuring simple textual content.",

                code:
`Hello<br>
World

<hr>`
            }

        ]
    },


    {
        id: 4,
        slug: "html-links-navigation",
        title: "Links & Navigation",
        category: "HTML",
        description:
            "Learn hyperlinks, navigation and linking between pages.",

        topics: [

            {
                id: 1,
                title: "Anchor Tag",

                explanation:
                    "The a element creates hyperlinks to other pages, resources or locations.",

                importance:
                    "Links are fundamental to web navigation.",

                code:
`<a href="/about">
    About Us
</a>`
            },

            {
                id: 2,
                title: "External Link",

                explanation:
                    "An external link points to a resource on another website.",

                importance:
                    "External links are commonly used to reference documentation and other websites.",

                code:
`<a
    href="https://developer.mozilla.org"
>
    MDN
</a>`
            },

            {
                id: 3,
                title: "Target Attribute",

                explanation:
                    "The target attribute specifies where a linked resource should be opened.",

                importance:
                    "It can be used to open a link in a new browsing context.",

                code:
`<a
    href="https://example.com"
    target="_blank"
    rel="noopener noreferrer"
>
    Open
</a>`
            },

            {
                id: 4,
                title: "Navigation",

                explanation:
                    "The nav element represents a section containing navigation links.",

                importance:
                    "Semantic navigation improves accessibility and document structure.",

                code:
`<nav>

    <a href="/">Home</a>

    <a href="/about">About</a>

    <a href="/contact">Contact</a>

</nav>`
            }

        ]
    },


    {
        id: 5,
        slug: "html-images-multimedia",
        title: "Images & Multimedia",
        category: "HTML",
        description:
            "Learn how to add images, audio and video to HTML pages.",

        topics: [

            {
                id: 1,
                title: "Images",

                explanation:
                    "The img element embeds an image into a web page.",

                importance:
                    "Images are commonly used for content, branding and visual communication.",

                code:
`<img
    src="profile.jpg"
    alt="Profile photo"
    width="200"
>`
            },

            {
                id: 2,
                title: "alt Attribute",

                explanation:
                    "The alt attribute provides alternative text for an image.",

                importance:
                    "Alternative text is important for accessibility and when an image cannot be displayed.",

                code:
`<img
    src="logo.png"
    alt="Company Logo"
>`
            },

            {
                id: 3,
                title: "Audio",

                explanation:
                    "The audio element embeds audio content.",

                importance:
                    "It allows audio to be integrated without external plugins.",

                code:
`<audio controls>

    <source
        src="song.mp3"
        type="audio/mpeg"
    >

</audio>`
            },

            {
                id: 4,
                title: "Video",

                explanation:
                    "The video element embeds video content.",

                importance:
                    "Modern HTML provides native video playback capabilities.",

                code:
`<video
    width="500"
    controls
>

    <source
        src="video.mp4"
        type="video/mp4"
    >

</video>`
            },

            {
                id: 5,
                title: "iframe",

                explanation:
                    "The iframe element embeds another browsing context inside the current page.",

                importance:
                    "It can be used to embed external content such as maps or authorized web resources.",

                code:
`<iframe
    src="https://example.com"
    title="Example"
>
</iframe>`
            }

        ]
    },


    {
        id: 6,
        slug: "html-lists",
        title: "Lists",
        category: "HTML",
        description:
            "Learn ordered lists, unordered lists and description lists.",

        topics: [

            {
                id: 1,
                title: "Unordered List",

                explanation:
                    "The ul element represents an unordered list and li represents each list item.",

                importance:
                    "Unordered lists are useful when item ordering is not important.",

                code:
`<ul>

    <li>Java</li>

    <li>Spring Boot</li>

    <li>React</li>

</ul>`
            },

            {
                id: 2,
                title: "Ordered List",

                explanation:
                    "The ol element represents an ordered list.",

                importance:
                    "Ordered lists are useful when the sequence of items matters.",

                code:
`<ol>

    <li>Login</li>

    <li>Select Module</li>

    <li>Start Learning</li>

</ol>`
            },

            {
                id: 3,
                title: "Description List",

                explanation:
                    "A description list uses dl, dt and dd elements to represent terms and descriptions.",

                importance:
                    "It is useful for glossaries, definitions and metadata.",

                code:
`<dl>

    <dt>HTML</dt>

    <dd>
        HyperText Markup Language
    </dd>

    <dt>CSS</dt>

    <dd>
        Cascading Style Sheets
    </dd>

</dl>`
            }

        ]
    },


    {
        id: 7,
        slug: "html-tables",
        title: "Tables",
        category: "HTML",
        description:
            "Learn how to create structured tabular data using HTML.",

        topics: [

            {
                id: 1,
                title: "Basic Table",

                explanation:
                    "The table element represents tabular data using rows and cells.",

                importance:
                    "Tables are appropriate for genuinely tabular information such as reports and datasets.",

                code:
`<table>

    <tr>

        <th>Name</th>

        <th>Age</th>

    </tr>

    <tr>

        <td>Saurabh</td>

        <td>28</td>

    </tr>

</table>`
            },

            {
                id: 2,
                title: "thead, tbody and tfoot",

                explanation:
                    "These elements divide a table into header, body and footer sections.",

                importance:
                    "They improve table structure and make complex tables easier to understand.",

                code:
`<table>

    <thead>

        <tr>
            <th>Name</th>
            <th>Salary</th>
        </tr>

    </thead>

    <tbody>

        <tr>
            <td>John</td>
            <td>50000</td>
        </tr>

    </tbody>

    <tfoot>

        <tr>
            <td>Total</td>
            <td>50000</td>
        </tr>

    </tfoot>

</table>`
            },

            {
                id: 3,
                title: "colspan and rowspan",

                explanation:
                    "colspan allows a cell to span multiple columns and rowspan allows it to span multiple rows.",

                importance:
                    "They are useful when representing complex tabular structures.",

                code:
`<td colspan="2">
    Total
</td>

<td rowspan="2">
    Java
</td>`
            }

        ]
    },


    {
        id: 8,
        slug: "html-forms",
        title: "HTML Forms",
        category: "HTML",
        description:
            "Learn forms, inputs, validation and form controls.",

        topics: [

            {
                id: 1,
                title: "Form Element",

                explanation:
                    "The form element groups controls used to submit user-provided data.",

                importance:
                    "Forms are fundamental to login, registration, search and data-entry applications.",

                code:
`<form>

    <label>
        Name
    </label>

    <input
        type="text"
        name="name"
    >

    <button type="submit">
        Submit
    </button>

</form>`
            },

            {
                id: 2,
                title: "Input Types",

                explanation:
                    "HTML provides different input types for different kinds of user data.",

                importance:
                    "Using the appropriate input type improves validation and user experience.",

                code:
`<input type="text">

<input type="email">

<input type="password">

<input type="number">

<input type="date">

<input type="file">

<input type="checkbox">

<input type="radio">`
            },

            {
                id: 3,
                title: "Label",

                explanation:
                    "The label element represents a caption for a form control.",

                importance:
                    "Proper labels improve accessibility and make forms easier to use.",

                code:
`<label for="email">
    Email
</label>

<input
    id="email"
    type="email"
>`
            },

            {
                id: 4,
                title: "Select",

                explanation:
                    "The select element provides a dropdown control.",

                importance:
                    "It is useful when users need to select one or more values from a predefined set.",

                code:
`<select name="language">

    <option value="java">
        Java
    </option>

    <option value="python">
        Python
    </option>

    <option value="javascript">
        JavaScript
    </option>

</select>`
            },

            {
                id: 5,
                title: "Textarea",

                explanation:
                    "The textarea element allows users to enter multi-line text.",

                importance:
                    "It is useful for comments, descriptions and messages.",

                code:
`<textarea
    name="message"
    rows="5"
    cols="30"
>
</textarea>`
            },

            {
                id: 6,
                title: "HTML Form Validation",

                explanation:
                    "HTML provides built-in validation attributes such as required, minlength, maxlength, min, max and pattern.",

                importance:
                    "Native validation can prevent invalid data from being submitted before JavaScript or backend processing.",

                code:
`<input
    type="email"
    required
>

<input
    type="password"
    minlength="8"
    required
>

<input
    type="number"
    min="18"
    max="100"
>`
            }

        ]
    },


    {
        id: 9,
        slug: "semantic-html",
        title: "Semantic HTML",
        category: "HTML",
        description:
            "Learn semantic elements and how they improve document meaning.",

        topics: [

            {
                id: 1,
                title: "What is Semantic HTML?",

                explanation:
                    "Semantic HTML uses elements that clearly describe the meaning and purpose of their content.",

                importance:
                    "Semantic HTML improves accessibility, maintainability and search-engine understanding.",

                code:
`<header>
    Website Header
</header>

<nav>
    Navigation
</nav>

<main>

    <article>
        Article
    </article>

</main>

<footer>
    Footer
</footer>`
            },

            {
                id: 2,
                title: "header",

                explanation:
                    "The header element represents introductory content for a page or section.",

                importance:
                    "It provides meaningful document structure.",

                code:
`<header>

    <h1>
        My Website
    </h1>

</header>`
            },

            {
                id: 3,
                title: "main",

                explanation:
                    "The main element represents the dominant content of the document.",

                importance:
                    "It helps assistive technologies identify the primary content.",

                code:
`<main>

    <h1>
        Learning Dashboard
    </h1>

</main>`
            },

            {
                id: 4,
                title: "section",

                explanation:
                    "The section element represents a thematic grouping of content.",

                importance:
                    "It helps organize a document into meaningful sections.",

                code:
`<section>

    <h2>
        Java
    </h2>

    <p>
        Learn Core Java.
    </p>

</section>`
            },

            {
                id: 5,
                title: "article",

                explanation:
                    "The article element represents a self-contained piece of content.",

                importance:
                    "It is useful for blog posts, news articles and independent content.",

                code:
`<article>

    <h2>
        What is Java?
    </h2>

    <p>
        Java is a programming language.
    </p>

</article>`
            },

            {
                id: 6,
                title: "footer",

                explanation:
                    "The footer element represents footer information for a page or section.",

                importance:
                    "It provides semantic structure for copyright, navigation and related information.",

                code:
`<footer>

    <p>
        © 2026 My Website
    </p>

</footer>`
            }

        ]
    },


    {
        id: 10,
        slug: "html5-features",
        title: "HTML5 Features",
        category: "HTML",
        description:
            "Learn important features introduced and standardized with modern HTML.",

        topics: [

            {
                id: 1,
                title: "HTML5 Semantic Elements",

                explanation:
                    "Modern HTML includes semantic elements such as header, nav, main, section, article and footer.",

                importance:
                    "These elements improve document structure and accessibility.",

                code:
`<header></header>

<nav></nav>

<main></main>

<section></section>

<article></article>

<aside></aside>

<footer></footer>`
            },

            {
                id: 2,
                title: "Audio and Video",

                explanation:
                    "HTML provides native audio and video elements for multimedia content.",

                importance:
                    "Modern browsers can play multimedia without requiring browser plugins.",

                code:
`<video controls>
    <source src="video.mp4">
</video>

<audio controls>
    <source src="audio.mp3">
</audio>`
            },

            {
                id: 3,
                title: "Canvas",

                explanation:
                    "The canvas element provides a drawing surface that can be controlled using JavaScript.",

                importance:
                    "Canvas can be used for graphics, games, visualizations and custom drawing.",

                code:
`<canvas
    id="myCanvas"
    width="500"
    height="300"
>
</canvas>`
            },

            {
                id: 4,
                title: "Data Attributes",

                explanation:
                    "Custom data-* attributes allow developers to attach application-specific data to HTML elements.",

                importance:
                    "They are useful when JavaScript needs to associate metadata with DOM elements.",

                code:
`<button
    data-module="java"
    data-topic="oops"
>
    Open
</button>`
            }

        ]
    },


    {
        id: 11,
        slug: "html-accessibility",
        title: "HTML Accessibility",
        category: "HTML",
        description:
            "Learn the fundamentals of creating accessible HTML pages.",

        topics: [

            {
                id: 1,
                title: "Accessibility",

                explanation:
                    "Web accessibility means designing websites so that people with different abilities can use them effectively.",

                importance:
                    "Accessible HTML improves usability and allows assistive technologies to interpret content.",

                code:
`<button>
    Submit
</button>

<label for="email">
    Email
</label>

<input
    id="email"
    type="email"
>`
            },

            {
                id: 2,
                title: "alt Text",

                explanation:
                    "Alternative text describes meaningful images for users who cannot see them.",

                importance:
                    "It is important for screen readers and when images cannot be loaded.",

                code:
`<img
    src="java.png"
    alt="Java programming language logo"
>`
            },

            {
                id: 3,
                title: "Keyboard Accessibility",

                explanation:
                    "Interactive controls should be usable with a keyboard.",

                importance:
                    "Keyboard accessibility is an important part of accessible web applications.",

                code:
`<button>
    Login
</button>

<a href="/dashboard">
    Dashboard
</a>`
            },

            {
                id: 4,
                title: "Semantic Elements vs div",

                explanation:
                    "Semantic elements communicate meaning, while div is a generic container.",

                importance:
                    "Using semantic elements where appropriate improves accessibility and maintainability.",

                code:
`<!-- Better -->

<nav>
    ...
</nav>


<!-- Generic -->

<div>
    ...
</div>`
            }

        ]
    },


    {
        id: 12,
        slug: "html-seo",
        title: "HTML & SEO Basics",
        category: "HTML",
        description:
            "Learn basic HTML practices that help search engines understand web pages.",

        topics: [

            {
                id: 1,
                title: "Page Title",

                explanation:
                    "The title element defines the document title shown in browser tabs and used by search engines.",

                importance:
                    "A meaningful title helps users and search engines understand the page.",

                code:
`<title>
    Java Learning Dashboard
</title>`
            },

            {
                id: 2,
                title: "Meta Description",

                explanation:
                    "The meta description provides a concise description of a page.",

                importance:
                    "It can help search engines and users understand the content of a page.",

                code:
`<meta
    name="description"
    content="Learn Java, Spring Boot,
             React and DSA."
>`
            },

            {
                id: 3,
                title: "Heading Hierarchy",

                explanation:
                    "Heading elements should form a logical hierarchy that represents the structure of the content.",

                importance:
                    "Good heading structure improves readability and assists search engines and accessibility tools.",

                code:
`<h1>
    Java Programming
</h1>

<h2>
    OOP
</h2>

<h3>
    Inheritance
</h3>`
            }

        ]
    },


    {
        id: 13,
        slug: "html-interview",
        title: "HTML Interview Questions",
        category: "HTML",
        description:
            "Important HTML questions for frontend and full-stack developer interviews.",

        topics: [

            {
                id: 1,
                title: "HTML vs HTML5",

                explanation:
                    "HTML5 refers to the modern HTML standard with semantic elements, native multimedia and other modern web platform capabilities.",

                importance:
                    "This is a common frontend interview question.",

                code:
`HTML
 ↓
Basic markup

Modern HTML
 ↓
Semantic elements
 ↓
Audio / Video
 ↓
Canvas
 ↓
Better web platform APIs`
            },

            {
                id: 2,
                title: "div vs span",

                explanation:
                    "div is a generic block-level container, while span is a generic inline container.",

                importance:
                    "Understanding the difference is important when structuring and styling HTML.",

                code:
`<div>
    Block container
</div>

<span>
    Inline container
</span>`
            },

            {
                id: 3,
                title: "id vs class",

                explanation:
                    "An id identifies a particular element, while class is intended for grouping elements that share characteristics.",

                importance:
                    "This distinction is important for CSS, JavaScript and DOM manipulation.",

                code:
`<div id="header">
</div>

<div class="card">
</div>

<div class="card">
</div>`
            },

            {
                id: 4,
                title: "Block vs Inline Elements",

                explanation:
                    "Block elements normally participate in block layout while inline elements participate within text flow.",

                importance:
                    "Understanding layout behavior is important before learning CSS layout systems.",

                code:
`<div>
    Block
</div>

<span>
    Inline
</span>

<p>
    Block
</p>

<a>
    Inline
</a>`
            },

            {
                id: 5,
                title: "GET vs POST Forms",

                explanation:
                    "GET commonly sends form data as part of the URL, while POST sends the request data in the HTTP request body.",

                importance:
                    "This is important when building login, search and data-submission forms.",

                code:
`<form method="GET">
    ...
</form>

<form method="POST">
    ...
</form>`
            },

            {
                id: 6,
                title: "HTML Accessibility Interview Question",

                explanation:
                    "Accessible HTML uses semantic elements, proper labels, meaningful alternative text and keyboard-friendly controls.",

                importance:
                    "Accessibility is increasingly important in professional frontend development.",

                code:
`<label for="username">
    Username
</label>

<input
    id="username"
    type="text"
    required
>

<button>
    Login
</button>`
            }

        ]
    }

];
import { classObjectTopics } from "./classesObjects";
import { constructorsTopics } from "./constructors";
import { encapsulationTopics } from "./encapsulation";
import { inheritanceTopics } from "./inheritance";
import { polymorphismTopics } from "./polymorphism";
import { abstractionTopics } from "./abstraction";
import { interfacesTopics } from "./interfaces";

import { methodOverloadingTopics } from "./methodOverloading";
import { methodOverridingTopics } from "./methodOverriding";

import { associationTopics } from "./association";
import { aggregationTopics } from "./aggregation";
import { compositionTopics } from "./composition";
import { objectRelationshipsTopics } from "./objectRelationships";

import { superKeywordTopics } from "./superKeyword";
import { thisKeywordTopics } from "./thisKeyword";


export const oopsModules = [

    // ============================================================
    // 1. CLASSES & OBJECTS
    // ============================================================

    {
        id: "classes-objects",
        title: "Classes & Objects",
        description:
            "Learn classes, objects, fields, methods, object creation and real-world examples.",

        topics: classObjectTopics
    },


    // ============================================================
    // 2. CONSTRUCTORS
    // ============================================================

    {
        id: "constructors",
        title: "Constructors",
        description:
            "Learn default, no-argument, parameterized constructors and constructor chaining.",

        topics: constructorsTopics
    },


    // ============================================================
    // 3. ENCAPSULATION
    // ============================================================

    {
        id: "encapsulation",
        title: "Encapsulation",
        description:
            "Learn data hiding, private variables, getters, setters and validation.",

        topics: encapsulationTopics
    },


    // ============================================================
    // 4. INHERITANCE
    // ============================================================

    {
        id: "inheritance",
        title: "Inheritance",
        description:
            "Learn parent-child relationships, code reuse, extends and inheritance types.",

        topics: inheritanceTopics
    },


    // ============================================================
    // 5. POLYMORPHISM
    // ============================================================

    {
        id: "polymorphism",
        title: "Polymorphism",
        description:
            "Learn compile-time and runtime polymorphism, overloading and overriding.",

        topics: polymorphismTopics
    },


    // ============================================================
    // 6. ABSTRACTION
    // ============================================================

    {
        id: "abstraction",
        title: "Abstraction",
        description:
            "Learn abstract classes, abstract methods and interface-based abstraction.",

        topics: abstractionTopics
    },


    // ============================================================
    // 7. INTERFACES
    // ============================================================

    {
        id: "interfaces",
        title: "Interfaces",
        description:
            "Learn interfaces, implements, default methods, static methods and multiple interfaces.",

        topics: interfacesTopics
    },


    // ============================================================
    // 8. METHOD OVERLOADING
    // ============================================================

    {
        id: "method-overloading",
        title: "Method Overloading",
        description:
            "Learn compile-time polymorphism and different ways to overload methods.",

        topics: methodOverloadingTopics
    },


    // ============================================================
    // 9. METHOD OVERRIDING
    // ============================================================

    {
        id: "method-overriding",
        title: "Method Overriding",
        description:
            "Learn runtime polymorphism, method overriding and dynamic method dispatch.",

        topics: methodOverridingTopics
    },


    // ============================================================
    // 10. ASSOCIATION
    // ============================================================

    {
        id: "association",
        title: "Association",
        description:
            "Learn relationships between independent objects and classes.",

        topics: associationTopics
    },


    // ============================================================
    // 11. AGGREGATION
    // ============================================================

    {
        id: "aggregation",
        title: "Aggregation",
        description:
            "Learn HAS-A relationships where objects can exist independently.",

        topics: aggregationTopics
    },


    // ============================================================
    // 12. COMPOSITION
    // ============================================================

    {
        id: "composition",
        title: "Composition",
        description:
            "Learn strong HAS-A relationships and dependent object lifecycles.",

        topics: compositionTopics
    },


    // ============================================================
    // 13. OBJECT RELATIONSHIPS
    // ============================================================

    {
        id: "object-relationships",
        title: "Object Relationships",
        description:
            "Learn association, aggregation, composition, IS-A and HAS-A relationships.",

        topics: objectRelationshipsTopics
    },


    // ============================================================
    // 14. SUPER KEYWORD
    // ============================================================

    {
        id: "super-keyword",
        title: "super Keyword",
        description:
            "Learn how to use the super keyword to access parent class variables, methods and constructors.",

        topics: superKeywordTopics
    },


    // ============================================================
    // 15. THIS KEYWORD
    // ============================================================

    {
        id: "this-keyword",
        title: "this Keyword",
        description:
            "Learn how to use the this keyword to refer to the current object, variables, methods and constructors.",

        topics: thisKeywordTopics
    }

];


console.log("OOPS DATA:", oopsModules);
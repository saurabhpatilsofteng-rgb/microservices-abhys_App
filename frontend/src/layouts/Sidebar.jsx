import { Link } from "react-router-dom";

import {
    LayoutDashboard,
    Code2,
    Coffee,
    Braces,
    Binary,
    Star,
    BarChart3,
    Library,
    AlertTriangle,
    Layers,
    Zap,
    Database,
    Table2,
    Server,
    Globe,
    FileCode2,
    Leaf,
    Rocket,
    BookOpen,
    Shield,
    Cloud,
    Radio,
    FlaskConical,
    GitBranch,
    FileText,
    Palette,
    Terminal,
    Atom
} from "lucide-react";


function Sidebar() {

    return (

        <aside className="sidebar">

            {/* =====================================================
                LOGO
            ====================================================== */}

            <div className="logo">

                <Code2 size={28} />

                <span>
                    CodeLearn
                </span>

            </div>


            <div className="menu-section">

                {/* =================================================
                    MAIN MENU
                ================================================== */}

                <p className="menu-title">
                    MAIN MENU
                </p>


                <Link
                    to="/dashboard"
                    className="menu-item"
                >

                    <LayoutDashboard size={20} />

                    <span>
                        Dashboard
                    </span>

                </Link>


                {/* =================================================
                    LEARNING
                ================================================== */}

                <p className="menu-title">
                    LEARNING
                </p>


                {/* DSA */}

                <Link
                    to="/modules"
                    className="menu-item"
                >

                    <Binary size={20} />

                    <span>
                        DSA
                    </span>

                </Link>


                {/* Core Java */}

                <Link
                    to="/core-java"
                    className="menu-item"
                >

                    <Coffee size={20} />

                    <span>
                        Core Java
                    </span>

                </Link>


                {/* OOP */}

                <Link
                    to="/oops"
                    className="menu-item"
                >

                    <Braces size={20} />

                    <span>
                        OOP
                    </span>

                </Link>


                {/* Strings */}

                <Link
                    to="/strings"
                    className="menu-item"
                >

                    <Code2 size={20} />

                    <span>
                        Strings
                    </span>

                </Link>


                {/* Arrays */}

                <Link
                    to="/arrays"
                    className="menu-item"
                >

                    <Code2 size={20} />

                    <span>
                        Arrays
                    </span>

                </Link>


                {/* Collections */}

                <Link
                    to="/collections"
                    className="menu-item"
                >

                    <Library size={20} />

                    <span>
                        Collections
                    </span>

                </Link>


                {/* Exception Handling */}

                <Link
                    to="/exception-handling"
                    className="menu-item"
                >

                    <AlertTriangle size={20} />

                    <span>
                        Exception Handling
                    </span>

                </Link>


                {/* Multithreading */}

                <Link
                    to="/multithreading"
                    className="menu-item"
                >

                    <Layers size={20} />

                    <span>
                        Multithreading
                    </span>

                </Link>


                {/* Java 8 */}

                <Link
                    to="/java8"
                    className="menu-item"
                >

                    <Zap size={20} />

                    <span>
                        Java 8 Features
                    </span>

                </Link>


                {/* JDBC */}

                <Link
                    to="/jdbc"
                    className="menu-item"
                >

                    <Database size={20} />

                    <span>
                        JDBC
                    </span>

                </Link>


                {/* SQL */}

                <Link
                    to="/sql"
                    className="menu-item"
                >

                    <Table2 size={20} />

                    <span>
                        SQL
                    </span>

                </Link>


                {/* PostgreSQL */}

                <Link
                    to="/postgresql"
                    className="menu-item"
                >

                    <Server size={20} />

                    <span>
                        PostgreSQL
                    </span>

                </Link>


                {/* Servlet */}

                <Link
                    to="/servlet"
                    className="menu-item"
                >

                    <Globe size={20} />

                    <span>
                        Java Servlet
                    </span>

                </Link>


                {/* JSP */}

                <Link
                    to="/jsp"
                    className="menu-item"
                >

                    <FileCode2 size={20} />

                    <span>
                        JSP
                    </span>

                </Link>


                {/* Spring Core */}

                <Link
                    to="/spring-core"
                    className="menu-item"
                >

                    <Leaf size={20} />

                    <span>
                        Spring Core
                    </span>

                </Link>


                {/* Spring Boot */}

                <Link
                    to="/spring-boot"
                    className="menu-item"
                >

                    <Rocket size={20} />

                    <span>
                        Spring Boot
                    </span>

                </Link>


                {/* Hibernate / JPA */}

                <Link
                    to="/hibernate"
                    className="menu-item"
                >

                    <BookOpen size={20} />

                    <span>
                        Hibernate / JPA
                    </span>

                </Link>


                {/* Spring Security */}

                <Link
                    to="/security"
                    className="menu-item"
                >

                    <Shield size={20} />

                    <span>
                        Spring Security + JWT
                    </span>

                </Link>


                {/* Microservices */}

                <Link
                    to="/microservices"
                    className="menu-item"
                >

                    <Cloud size={20} />

                    <span>
                        Microservices
                    </span>

                </Link>


                {/* Redis */}

                <Link
                    to="/redis"
                    className="menu-item"
                >

                    <Zap size={20} />

                    <span>
                        Redis
                    </span>

                </Link>


                {/* Kafka */}

                <Link
                    to="/kafka"
                    className="menu-item"
                >

                    <Radio size={20} />

                    <span>
                        Kafka
                    </span>

                </Link>


                {/* Unit Testing */}

                <Link
                    to="/unit-testing"
                    className="menu-item"
                >

                    <FlaskConical size={20} />

                    <span>
                        Unit Testing
                    </span>

                </Link>


                {/* Git & Maven */}

                <Link
                    to="/git-maven"
                    className="menu-item"
                >

                    <GitBranch size={20} />

                    <span>
                        Git & Maven
                    </span>

                </Link>


                {/* HTML */}

                <Link
                    to="/html"
                    className="menu-item"
                >

                    <FileText size={20} />

                    <span>
                        HTML
                    </span>

                </Link>


                {/* CSS */}

                <Link
                    to="/css"
                    className="menu-item"
                >

                    <Palette size={20} />

                    <span>
                        CSS
                    </span>

                </Link>


                {/* JavaScript */}

                <Link
                    to="/javascript"
                    className="menu-item"
                >

                    <Terminal size={20} />

                    <span>
                        JavaScript
                    </span>

                </Link>


                {/* React */}

                <Link
                    to="/react"
                    className="menu-item"
                >

                    <Atom size={20} />

                    <span>
                        React
                    </span>

                </Link>


                {/* =================================================
                    PERSONAL
                ================================================== */}

                <p className="menu-title">
                    PERSONAL
                </p>


                {/* Progress */}

                <Link
                    to="/progress"
                    className="menu-item"
                >

                    <BarChart3 size={20} />

                    <span>
                        Progress
                    </span>

                </Link>


                {/* Favorites */}

                <Link
                    to="/favorites"
                    className="menu-item"
                >

                    <Star size={20} />

                    <span>
                        Favorites
                    </span>

                </Link>

            </div>

        </aside>

    );
}


export default Sidebar;
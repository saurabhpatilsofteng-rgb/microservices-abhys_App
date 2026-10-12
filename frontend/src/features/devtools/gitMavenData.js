export const gitMavenModules = [

    // =========================================================
    // GIT
    // =========================================================

    {
        id: 1,
        category: "Git",
        slug: "git-basics",
        title: "Git Basics",

        description:
            "Learn Git fundamentals, repositories, commits and version control.",

        topics: [

            {
                id: 1,
                title: "What is Git?",

                explanation:
                    "Git is a distributed version control system used to track changes in source code and collaborate with other developers.",

                importance:
                    "Git is an essential tool for Java, Spring Boot and full-stack development because it allows developers to track, review and restore code changes.",

                code: `Developer
    |
    ↓
Working Directory
    |
    ↓
Git
    |
    ↓
Repository`
            },

            {
                id: 2,
                title: "Git Repository",

                explanation:
                    "A Git repository contains the project's files and the complete history of tracked changes.",

                importance:
                    "The repository allows developers to maintain and share the history of a project.",

                code: `my-project/

.git/
src/
pom.xml
README.md`
            },

            {
                id: 3,
                title: "git init",

                explanation:
                    "git init initializes a new Git repository in the current directory.",

                importance:
                    "It is normally the first Git command used when converting an existing project into a Git repository.",

                code: `git init`
            },

            {
                id: 4,
                title: "git clone",

                explanation:
                    "git clone creates a local copy of an existing remote repository.",

                importance:
                    "Developers use clone when starting work on an existing project hosted on a remote Git server.",

                code: `git clone https://example.com/project.git`
            }

        ]
    },


    {
        id: 2,
        category: "Git",
        slug: "git-working-directory",
        title: "Git Working Directory",

        description:
            "Understand working directory, staging area and repository.",

        topics: [

            {
                id: 1,
                title: "Working Directory",

                explanation:
                    "The working directory contains the files you are currently modifying.",

                importance:
                    "Understanding the working directory is necessary for understanding how Git tracks changes.",

                code: `Working Directory

src/
pom.xml
README.md

       |
       ↓
     git add`
            },

            {
                id: 2,
                title: "Staging Area",

                explanation:
                    "The staging area contains changes that have been selected for the next commit.",

                importance:
                    "Git staging allows developers to choose exactly which changes should be included in a commit.",

                code: `Working Directory
       |
       | git add
       ↓
Staging Area
       |
       | git commit
       ↓
Repository`
            },

            {
                id: 3,
                title: "git status",

                explanation:
                    "git status shows the current state of the working directory and staging area.",

                importance:
                    "It is one of the most frequently used Git commands for understanding what has changed.",

                code: `git status`
            },

            {
                id: 4,
                title: "git add",

                explanation:
                    "git add moves changes from the working directory into the staging area.",

                importance:
                    "It prepares selected changes for the next commit.",

                code: `git add .

git add src/main/java/User.java`
            }

        ]
    },


    {
        id: 3,
        category: "Git",
        slug: "git-commit",
        title: "Git Commit",

        description:
            "Learn commits, commit messages and viewing project history.",

        topics: [

            {
                id: 1,
                title: "git commit",

                explanation:
                    "git commit saves staged changes into the local Git repository.",

                importance:
                    "Commits create checkpoints that allow developers to track project history.",

                code: `git add .

git commit -m "Add user registration"`
            },

            {
                id: 2,
                title: "Good Commit Message",

                explanation:
                    "A commit message should clearly describe the change introduced by the commit.",

                importance:
                    "Meaningful commit messages make project history easier to understand.",

                code: `git commit -m "Add JWT authentication"

git commit -m "Fix user login validation"

git commit -m "Add Kafka producer"`
            },

            {
                id: 3,
                title: "git log",

                explanation:
                    "git log displays the commit history of a repository.",

                importance:
                    "It helps developers understand previous changes and identify when a change was introduced.",

                code: `git log

git log --oneline`
            }

        ]
    },


    {
        id: 4,
        category: "Git",
        slug: "git-branches",
        title: "Git Branches",

        description:
            "Learn branches, creating branches and switching between branches.",

        topics: [

            {
                id: 1,
                title: "What is a Branch?",

                explanation:
                    "A branch is an independent line of development within a Git repository.",

                importance:
                    "Branches allow developers to work on features without directly modifying the main production branch.",

                code: `main
 |
 +── feature-login
 |
 +── feature-payment
 |
 └── bugfix-auth`
            },

            {
                id: 2,
                title: "git branch",

                explanation:
                    "git branch is used to create, list and manage branches.",

                importance:
                    "Branches are fundamental to collaborative Git workflows.",

                code: `git branch

git branch feature-login`
            },

            {
                id: 3,
                title: "git switch",

                explanation:
                    "git switch changes the current branch.",

                importance:
                    "It provides a clear command for moving between branches.",

                code: `git switch feature-login

git switch main`
            },

            {
                id: 4,
                title: "Create and Switch Branch",

                explanation:
                    "A branch can be created and checked out using a single command.",

                importance:
                    "This is commonly used when beginning a new feature.",

                code: `git switch -c feature-login`
            }

        ]
    },


    {
        id: 5,
        category: "Git",
        slug: "git-merge",
        title: "Git Merge",

        description:
            "Learn how branches are merged and how merge conflicts occur.",

        topics: [

            {
                id: 1,
                title: "git merge",

                explanation:
                    "git merge combines the changes from one branch into another branch.",

                importance:
                    "Merge is commonly used to integrate completed feature work into the main development branch.",

                code: `git switch main

git merge feature-login`
            },

            {
                id: 2,
                title: "Merge Conflict",

                explanation:
                    "A merge conflict occurs when Git cannot automatically determine which version of a change should be kept.",

                importance:
                    "Developers must understand conflicts when working with multiple branches.",

                code: `<<<<<<< HEAD
old code
=======
new code
>>>>>>> feature-login`
            },

            {
                id: 3,
                title: "Resolving Merge Conflict",

                explanation:
                    "A merge conflict is resolved by editing the affected files, staging the resolved files and completing the merge.",

                importance:
                    "Conflict resolution is a common real-world Git skill.",

                code: `1. Open conflicted file

2. Remove conflict markers

3. Keep correct code

4. git add .

5. git commit`
            }

        ]
    },


    {
        id: 6,
        category: "Git",
        slug: "git-remote-github",
        title: "Git Remote & GitHub",

        description:
            "Learn remote repositories, push, pull and fetch.",

        topics: [

            {
                id: 1,
                title: "Remote Repository",

                explanation:
                    "A remote repository is a Git repository hosted on another system or service.",

                importance:
                    "Remote repositories enable collaboration and backup of source code.",

                code: `Local Repository
       |
       | push
       ↓
Remote Repository`
            },

            {
                id: 2,
                title: "git remote",

                explanation:
                    "git remote manages connections to remote repositories.",

                importance:
                    "It allows local repositories to communicate with remote repositories.",

                code: `git remote -v

git remote add origin <repository-url>`
            },

            {
                id: 3,
                title: "git push",

                explanation:
                    "git push uploads local commits to a remote repository.",

                importance:
                    "Developers use push to share their changes with the team.",

                code: `git push origin main

git push -u origin feature-login`
            },

            {
                id: 4,
                title: "git pull",

                explanation:
                    "git pull retrieves changes from a remote repository and integrates them into the current branch.",

                importance:
                    "It keeps the local branch synchronized with the remote repository.",

                code: `git pull origin main`
            },

            {
                id: 5,
                title: "git fetch",

                explanation:
                    "git fetch downloads remote changes without automatically merging them into the current branch.",

                importance:
                    "It allows developers to inspect remote changes before integrating them.",

                code: `git fetch origin`
            }

        ]
    },


    {
        id: 7,
        category: "Git",
        slug: "git-reset-revert",
        title: "Git Reset & Revert",

        description:
            "Learn how to undo changes safely in Git.",

        topics: [

            {
                id: 1,
                title: "git restore",

                explanation:
                    "git restore can be used to discard working-directory changes or restore files from another state.",

                importance:
                    "It provides a clear way to restore files without creating a new commit.",

                code: `git restore User.java

git restore .`
            },

            {
                id: 2,
                title: "git reset",

                explanation:
                    "git reset moves the current branch pointer and can modify the staging area or working tree depending on the option used.",

                importance:
                    "It is powerful but should be used carefully, especially on shared branches.",

                code: `git reset --soft HEAD~1

git reset --mixed HEAD~1

git reset --hard HEAD~1`
            },

            {
                id: 3,
                title: "git revert",

                explanation:
                    "git revert creates a new commit that reverses the changes introduced by an earlier commit.",

                importance:
                    "It is generally safer than rewriting shared history.",

                code: `git revert <commit-id>`
            }

        ]
    },


    {
        id: 8,
        category: "Git",
        slug: "git-interview",
        title: "Git Interview Concepts",

        description:
            "Important Git concepts frequently asked in Java developer interviews.",

        topics: [

            {
                id: 1,
                title: "Git vs GitHub",

                explanation:
                    "Git is a version control system, while GitHub is a platform that hosts Git repositories and provides collaboration features.",

                importance:
                    "This is a common beginner and interview question.",

                code: `Git
 ↓
Version Control

GitHub
 ↓
Remote Hosting
 + Collaboration
 + Pull Requests
 + Issues`
            },

            {
                id: 2,
                title: "Merge vs Rebase",

                explanation:
                    "Merge combines histories and can create a merge commit, while rebase moves commits onto a new base and creates a linear-looking history.",

                importance:
                    "Understanding both is important when working with feature branches.",

                code: `Merge

A ── B ── C
      \\    /
       D ─ E


Rebase

A ── B ── C ── D' ── E'`
            },

            {
                id: 3,
                title: "HEAD",

                explanation:
                    "HEAD is a reference that identifies the currently checked-out commit or branch.",

                importance:
                    "HEAD is fundamental to understanding Git history and reset operations.",

                code: `main
 |
 A
 |
 B ← HEAD`
            }

        ]
    },


    // =========================================================
    // MAVEN
    // =========================================================

    {
        id: 9,
        category: "Maven",
        slug: "maven-introduction",
        title: "Maven Introduction",

        description:
            "Learn Apache Maven and dependency management for Java projects.",

        topics: [

            {
                id: 1,
                title: "What is Maven?",

                explanation:
                    "Apache Maven is a build automation and project management tool primarily used for Java applications.",

                importance:
                    "Maven manages dependencies, compilation, testing, packaging and project builds.",

                code: `Java Project
     |
     ↓
   Maven
     |
     ├── Compile
     ├── Test
     ├── Package
     └── Install`
            },

            {
                id: 2,
                title: "Why Maven?",

                explanation:
                    "Maven provides a standardized project structure and automates common build tasks.",

                importance:
                    "Spring Boot projects commonly use Maven for dependency and build management.",

                code: `Developer
    |
    ↓
pom.xml
    |
    ↓
Maven
    |
    ├── Dependencies
    ├── Build
    ├── Test
    └── Package`
            },

            {
                id: 3,
                title: "Maven Project Structure",

                explanation:
                    "Maven follows a standard directory structure for source code, resources and tests.",

                importance:
                    "The standard structure makes Java projects consistent across teams.",

                code: `project/
│
├── pom.xml
│
└── src/
    ├── main/
    │   ├── java/
    │   └── resources/
    │
    └── test/
        └── java/`
            }

        ]
    },


    {
        id: 10,
        category: "Maven",
        slug: "pom-xml",
        title: "pom.xml",

        description:
            "Understand Maven's Project Object Model and its important sections.",

        topics: [

            {
                id: 1,
                title: "What is pom.xml?",

                explanation:
                    "pom.xml is Maven's main project configuration file.",

                importance:
                    "It defines project metadata, dependencies, plugins and build configuration.",

                code: `<project>

    <groupId>
        com.example
    </groupId>

    <artifactId>
        demo
    </artifactId>

    <version>
        1.0.0
    </version>

</project>`
            },

            {
                id: 2,
                title: "groupId",

                explanation:
                    "groupId identifies the organization or group that owns the project.",

                importance:
                    "It helps uniquely identify Maven artifacts.",

                code: `<groupId>
    com.example
</groupId>`
            },

            {
                id: 3,
                title: "artifactId",

                explanation:
                    "artifactId identifies the project artifact.",

                importance:
                    "It becomes part of the generated artifact name.",

                code: `<artifactId>
    user-service
</artifactId>`
            },

            {
                id: 4,
                title: "version",

                explanation:
                    "version identifies the version of the project artifact.",

                importance:
                    "Versioning allows different releases of an artifact to coexist.",

                code: `<version>
    1.0.0
</version>`
            }

        ]
    },


    {
        id: 11,
        category: "Maven",
        slug: "maven-dependencies",
        title: "Maven Dependencies",

        description:
            "Learn how Maven downloads and manages external libraries.",

        topics: [

            {
                id: 1,
                title: "Dependency",

                explanation:
                    "A Maven dependency is an external library required by a project.",

                importance:
                    "Maven automatically resolves and downloads required libraries.",

                code: `<dependency>

    <groupId>
        org.springframework.boot
    </groupId>

    <artifactId>
        spring-boot-starter-web
    </artifactId>

</dependency>`
            },

            {
                id: 2,
                title: "Dependency Scope",

                explanation:
                    "Dependency scope controls when and where a dependency is available during the Maven build.",

                importance:
                    "Correct scopes prevent unnecessary dependencies from being included in the final application.",

                code: `compile
provided
runtime
test
system`
            },

            {
                id: 3,
                title: "Transitive Dependency",

                explanation:
                    "A transitive dependency is a dependency that Maven brings in because another dependency requires it.",

                importance:
                    "Maven's dependency resolution reduces the need to manually declare every required library.",

                code: `Your Application
       |
       ↓
Spring Boot
       |
       ↓
Library A
       |
       ↓
Library B`
            }

        ]
    },


    {
        id: 12,
        category: "Maven",
        slug: "maven-lifecycle",
        title: "Maven Build Lifecycle",

        description:
            "Learn Maven lifecycle phases and how Maven builds Java applications.",

        topics: [

            {
                id: 1,
                title: "Maven Lifecycle",

                explanation:
                    "Maven defines standard build lifecycles containing phases that perform common project operations.",

                importance:
                    "Understanding the lifecycle helps developers know what Maven commands actually do.",

                code: `validate
   ↓
compile
   ↓
test
   ↓
package
   ↓
verify
   ↓
install
   ↓
deploy`
            },

            {
                id: 2,
                title: "mvn clean",

                explanation:
                    "The clean lifecycle removes files generated by previous builds, usually the target directory.",

                importance:
                    "It helps ensure that a build starts from a clean state.",

                code: `mvn clean`
            },

            {
                id: 3,
                title: "mvn compile",

                explanation:
                    "The compile phase compiles the project's main source code.",

                importance:
                    "It verifies that the main Java source code can be compiled.",

                code: `mvn compile`
            },

            {
                id: 4,
                title: "mvn test",

                explanation:
                    "The test phase compiles and runs the project's tests.",

                importance:
                    "It is essential for verifying automated tests during the build.",

                code: `mvn test`
            },

            {
                id: 5,
                title: "mvn package",

                explanation:
                    "The package phase compiles, tests and packages the application into its configured artifact format.",

                importance:
                    "Spring Boot applications are commonly packaged as executable JAR files.",

                code: `mvn package

mvn package -DskipTests`
            },

            {
                id: 6,
                title: "mvn install",

                explanation:
                    "The install phase installs the built artifact into the local Maven repository.",

                importance:
                    "It allows other local Maven projects to use the artifact as a dependency.",

                code: `mvn install`
            }

        ]
    },


    {
        id: 13,
        category: "Maven",
        slug: "maven-plugins",
        title: "Maven Plugins",

        description:
            "Learn Maven plugins and the Spring Boot Maven plugin.",

        topics: [

            {
                id: 1,
                title: "What is Maven Plugin?",

                explanation:
                    "Maven plugins provide the actual implementation of build tasks.",

                importance:
                    "Maven itself coordinates the build while plugins perform tasks such as compilation, testing and packaging.",

                code: `Maven
  |
  +── Compiler Plugin
  |
  +── Surefire Plugin
  |
  +── Jar Plugin
  |
  └── Spring Boot Plugin`
            },

            {
                id: 2,
                title: "Maven Compiler Plugin",

                explanation:
                    "The Maven Compiler Plugin compiles Java source code.",

                importance:
                    "It controls Java compilation settings such as the source and target Java versions.",

                code: `<plugin>

    <artifactId>
        maven-compiler-plugin
    </artifactId>

</plugin>`
            },

            {
                id: 3,
                title: "Spring Boot Maven Plugin",

                explanation:
                    "The Spring Boot Maven Plugin provides Maven support for Spring Boot applications, including executable JAR packaging.",

                importance:
                    "It is commonly used to package and run Spring Boot applications.",

                code: `mvn spring-boot:run

mvn package`
            }

        ]
    },


    {
        id: 14,
        category: "Maven",
        slug: "maven-spring-boot",
        title: "Maven + Spring Boot",

        description:
            "Learn how Maven is used in Spring Boot projects.",

        topics: [

            {
                id: 1,
                title: "Spring Boot Starter",

                explanation:
                    "Spring Boot starters provide convenient dependency sets for common application features.",

                importance:
                    "They simplify dependency management in Spring Boot applications.",

                code: `<dependency>

    <groupId>
        org.springframework.boot
    </groupId>

    <artifactId>
        spring-boot-starter-web
    </artifactId>

</dependency>`
            },

            {
                id: 2,
                title: "Run Spring Boot with Maven",

                explanation:
                    "The Spring Boot Maven plugin can start a Spring Boot application directly from Maven.",

                importance:
                    "It is useful during development because the application can be started without manually running the generated JAR.",

                code: `mvn spring-boot:run`
            },

            {
                id: 3,
                title: "Build Spring Boot JAR",

                explanation:
                    "Maven can package a Spring Boot application as an executable JAR.",

                importance:
                    "The JAR can then be deployed to a server or containerized using Docker.",

                code: `mvn clean package

java -jar target/app.jar`
            }

        ]
    },


    {
        id: 15,
        category: "Maven",
        slug: "maven-docker",
        title: "Maven + Docker",

        description:
            "Understand how Maven builds are used when containerizing Spring Boot applications.",

        topics: [

            {
                id: 1,
                title: "Build JAR",

                explanation:
                    "Maven first packages the Spring Boot application into a JAR.",

                importance:
                    "The generated artifact can then be copied into a Docker image.",

                code: `mvn clean package -DskipTests

target/
└── app.jar`
            },

            {
                id: 2,
                title: "Dockerfile + Maven",

                explanation:
                    "A Dockerfile can copy the Maven-generated JAR into a Java runtime image.",

                importance:
                    "This is a common deployment approach for Spring Boot applications.",

                code: `FROM eclipse-temurin:21-jre

COPY target/app.jar app.jar

ENTRYPOINT [
    "java",
    "-jar",
    "app.jar"
]`
            },

            {
                id: 3,
                title: "Maven and Docker Compose",

                explanation:
                    "Maven builds the application artifact while Docker Compose can orchestrate the application and supporting services.",

                importance:
                    "This is especially useful for Spring Boot microservices using PostgreSQL, Redis and Kafka.",

                code: `Maven
  |
  ↓
Spring Boot JAR
  |
  ↓
Docker Image
  |
  ↓
Docker Compose
  |
  +── PostgreSQL
  +── Redis
  +── Kafka
  └── Spring Boot`
            }

        ]
    },


    {
        id: 16,
        category: "Git & Maven",
        slug: "git-maven-workflow",
        title: "Git + Maven Workflow",

        description:
            "Learn a practical Git and Maven workflow for Java developers.",

        topics: [

            {
                id: 1,
                title: "Developer Workflow",

                explanation:
                    "A typical Java developer workflow combines Git for source control and Maven for building and testing the application.",

                importance:
                    "Understanding this workflow is important for real-world development and CI/CD.",

                code: `Write Code
    |
    ↓
mvn test
    |
    ↓
git status
    |
    ↓
git add .
    |
    ↓
git commit
    |
    ↓
git push`
            },

            {
                id: 2,
                title: "Feature Branch Workflow",

                explanation:
                    "Developers commonly create a Git feature branch, implement changes, run Maven tests and push the branch for review.",

                importance:
                    "This workflow supports collaborative development and code review.",

                code: `git switch -c feature-login

      ↓

Write Code

      ↓

mvn test

      ↓

git add .

      ↓

git commit

      ↓

git push`
            },

            {
                id: 3,
                title: "Interview Question",

                explanation:
                    "A common interview question is: How do Git and Maven work together?",

                importance:
                    "A strong answer demonstrates understanding of both source control and build automation.",

                code: `Git
 ↓
Source Control

Maven
 ↓
Build + Dependencies + Tests

Together

Git → Code History
Maven → Build Process`
            }

        ]
    }

];
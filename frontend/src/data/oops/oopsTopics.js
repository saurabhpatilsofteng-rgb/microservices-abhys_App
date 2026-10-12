export const classObjectTopics = [

    {
        id: 1,

        module: "class-object",

        title: "Class and Object",

        difficulty: "Beginner",

        concept:
            "A class is a blueprint and an object is an instance of that class.",

        explanation: `
A class defines properties and behavior.

An object is created from a class.
        `,

        code: `
class Student {

    String name;

}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        student.name = "Saurabh";

        System.out.println(student.name);

    }

}
        `,

        output: `
Saurabh
        `
    }

];
export const relationshipsTopics = [

    {
        id: 1,
        title: "Association in Java",
        concept: "Association represents a relationship between two objects.",
        difficulty: "Easy",

        theory: `
Association means two independent objects are connected.

For example:

Student → Teacher
`,

        example: `
class Teacher {

    String name = "John";

}

class Student {

    String name = "Saurabh";

    Teacher teacher;

    Student(Teacher teacher) {

        this.teacher = teacher;

    }

    void display() {

        System.out.println(
            name + " learns from "
            + teacher.name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Teacher teacher = new Teacher();

        Student student =
            new Student(teacher);

        student.display();

    }
}
`,

        output: `
Saurabh learns from John
`
    }

];
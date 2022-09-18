let grade = "a";

switch (grade.toUpperCase()) {
    case "A":
        console.log("out Standing");
        break;
    case "B":
        console.log("Excellent");
        break;
    case "C":
        console.log("Met Expectation");
        break;
    case "D":
        console.log("Needs Improvement");
        break;
                
    default:
        console.log("Contact HR");
        break;
}
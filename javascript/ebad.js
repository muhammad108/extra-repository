
// function betaPaniLaaKarDo(liquid){
//     console.log(`yahaan sey utho aur ${liquid} waley cooler tak jao`)
//     console.log("pyar o muhabbat sey glass ko pakro aur uthao")
//     console.log("cooler ki tooti kholo aur glass ko neechey rakho")
//     console.log(`${liquid}bharney ka wait karo, jesay hi${liquid}end per puhnchey tooti band kardo`)
//     console.log(`sambhal kar${liquid}ka glass laao aur${liquid}de do`)
// }
// betaPaniLaaKarDo("pani")
// betaPaniLaaKarDo("applejuice")
// betaPaniLaaKarDo("cofee")
// betaPaniLaaKarDo("tea")
// betaPaniLaaKarDo("mosambijuice")
// betaPaniLaaKarDo("greentea")

// function additionForTwoNumber(val1, val2, val3) {
//     console.log(`menay yahaan in 2 numbers ko add kiya ${val1} aur ${val2} , result yeh aaya ${val1 + val2}`)
//     console.log("menay yahaan in 2 numbers ko add kiya " + val1 + " aur " + val2 + ", result yeh aaya" + (val1 + val2))
// }

//  additionForTwoNumber(15, 5)



//  function additionfortwonumber(val1, val2){
//   console.log(`yahan mene in 2 numbers ko add kiya ${val1} aur ${val2} , result ye aya ${val1 + val2}`)
//   }
//  additionfortwonumber(44, 20)


//    var friends = []

//    console.log(friends[4])
//    console.log(friends)

//    friends[0]= "muazzam"
//    console.log(friends)

//    friends[1]= "hammad"
//    console.log(friends)

//    friends[6]= "ebad"
//    console.log(friends)
  
//    friends[4]= "umair"
//    console.log(friends)


//  var students = ["asad", "ebad", "hammad", "hani"]
//  console.log(students)
//  var studentswithjamai  = students.splice()

//  console.log(studentswithjamai)
//  console.log(students)


// //  Adding in Start
//  var checkingAdditionInStart = students.unshift("Muhammad Javed")

// //  Removing from start
//  var checkingRemovingFromStart = students.shift()

// //  Adding in end
//  const additionFromEnd = students.push("Ibad")
 
// //  Removing from end
//  const removingFromEnd = students.pop()
// var students =["asad", "ebad", "saad", "fahad"]
// var askwhichstudentname =prompt("which student you want to call")

// if(students.includes(askwhichstudentname)>=0){
//     alert(`yes ${askwhichstudentname} is available at index number ${students.includes(askwhichstudentname)}`)
//     document.write (students(students.includes(askwhichstudentname)))
// }
// else{
//     alert(`No ${askwhichstudentname} is not available`)
    
    
// }

var myGymExercise = "Dumbler uthao aur neechey le kar jao"


// initialization  condition  increment
// for (let a = 1; a < 13; a++) {
//     console.log(myGymExercise + " " + a)
// }
// var bakeryItems = ["pastry", "bread", "jam", "colddrinks", "cake", "jelly", "juices"]

// var productToBuy = prompt("Which product you want to buy")


// //7

// var flag;

// var boxNumber;


// for (let a = 0; a < bakeryItems.length; a++) {
//     if (productToBuy === bakeryItems[a]) {
//         flag = true
//         boxNumber = a
//     }
// }

// if (flag) {
//     console.log(`Yes this product ${productToBuy} is available at box number ${boxNumber}`)
// } else {
//     alert("aagey chaley jao")
// }
    
    











// question 1
var number1 = prompt("Enter the number!");
if (number1 == null) {
    document.write(`Table of ${5}`);
    document.write(`<br>${5} x 1 = ${5 * 1}`);
    document.write(`</br>${5} x 2 = ${5 * 2}`);
    document.write(`</br>${5} x 3 = ${5 * 3}`);
    document.write(`</br>${5} x 4 = ${5 * 4}`);
    document.write(`</br>${5} x 5 = ${5 * 5}`);
    document.write(`</br>${5} x 6 = ${5 * 6}`);
    document.write(`</br>${5} x 7 = ${5 * 7}`);
    document.write(`</br>${5} x 8 = ${5 * 8}`);
    document.write(`</br>${5} x 9 = ${5 * 9}`);
    document.write(`</br>${5} x 10 = ${5 * 10}`);
} else {
    document.write(`Table of ${number1}`);
    document.write(`<br>${number1} x 1 = ${number1 * 1}`);
    document.write(`</br>${number1} x 2 = ${number1 * 2}`);
    document.write(`</br>${number1} x 3 = ${number1 * 3}`);
    document.write(`</br>${number1} x 4 = ${number1 * 4}`);
    document.write(`</br>${number1} x 5 = ${number1 * 5}`);
    document.write(`</br>${number1} x 6 = ${number1 * 6}`);
    document.write(`</br>${number1} x 7 = ${number1 * 7}`);
    document.write(`</br>${number1} x 8 = ${number1 * 8}`);
    document.write(`</br>${number1} x 9 = ${number1 * 9}`);
    document.write(`</br>${number1} x 10 = ${number1 * 10}`);
}
// question 2


// var subject1 = prompt("Enter subject 01:");
// var subject2 = prompt("Enter subject 02:");
// var subject3 = prompt("Enter subject 03:");
// var totalMarksOfSubjects = 100;
// var obtainedMarksSubject1 = prompt("Enter your obtained marks for subject 1: ");
// var obtainedMarksSubject2 = prompt("Enter your obtained marks for subject 2: ");
// var obtainedMarksSubject3 = prompt("Enter your obtained marks for subject 3: ");
// var percentageOfSubject1 = (obtainedMarksSubject1 / totalMarksOfSubjects) * 100;
// var percentageOfSubject2 = (obtainedMarksSubject2 / totalMarksOfSubjects) * 100;
// var percentageOfSubject3 = (obtainedMarksSubject3 / totalMarksOfSubjects) * 100;
// var totalMarks = totalMarksOfSubjects * 3;
// var totalObtainedMarks = (Number(obtainedMarksSubject1) + Number(obtainedMarksSubject2) + Number(obtainedMarksSubject3));
// var percentage = (totalObtainedMarks / totalMarks) * 100;
// document.getElementById("sub1").innerHTML = subject1;
// document.getElementById("sub2").innerHTML = subject2;
// document.getElementById("sub3").innerHTML = subject3;
// document.getElementById("obatinedMark1").innerHTML = obtainedMarksSubject1;
// document.getElementById("obatinedMark2").innerHTML = obtainedMarksSubject2;
// document.getElementById("obatinedMark3").innerHTML = obtainedMarksSubject3;
// document.getElementById("Percentage1").innerHTML = percentageOfSubject1 + "%";
// document.getElementById("Percentage2").innerHTML = percentageOfSubject2 + "%";
// document.getElementById("Percentage3").innerHTML = percentageOfSubject3 + "%";
// document.getElementById("obatinedMark").innerHTML = totalObtainedMarks;
// document.getElementById("Percentage").innerHTML = percentage + "%";


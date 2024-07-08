/* FadeIn Scroll */
$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.fade').each(function(i) {

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({ 'opacity': '1' }, 900);

      }

    });

  });

});

/* Note: I did not write the code above */


/* Coursework */

class Course {
  constructor(courseName, subject, courseNumber, semester) {
    this.courseName = courseName;
    this.subject = subject;
    this.courseNumber = courseNumber;
    this.semester = semester;
  }
}

var cs2110 = new Course("Object-Oriented Programming and Data Structures", "Computer Science", "CS 2110", "Fall 2021");

var fdsc1101 = new Course("Science and Technology of Foods", "Other", "FDSC 1101", "Fall 2021");

var math1910 = new Course("Calculus for Engineers", "Math", "MATH 1910", "Fall 2021");

var soc1110 = new Course("First-Year Writing Seminar: Writing Computers and Society", "Other", "SOC 1110", "Fall 2021");

var span2090 = new Course("Intermediate Spanish I (Composition and Conversation)", "Spanish", "SPAN 2090", "Fall 2021");

var cogst1101 = new Course("Introduction to Cognitive Science", "Other", "COGST 1101", "Spring 2022");

var cs2800 = new Course("Discrete Structures", "Computer Science", "CS 2800", "Spring 2022");

var math1920 = new Course("Multivariable Calculus for Engineers", "Math", "MATH 1920", "Spring 2022");

var psych1140 = new Course("First-Year Writing Seminar: Perception, Cognition & Development", "Other", "PSYCH 1140", "Spring 2022");

var span2095 = new Course("Intermediate Spanish II (Composition and Conversation)", "Spanish", "SPAN 2095", "Spring 2022");

var courseList = [cs2110, math1910,  span2090, soc1110, fdsc1101, cogst1101, cs2800, math1920, psych1140, span2095];

var subjects = [];

var subject = $(`.subject`);
var semester = $(`.semester`);
var box = $(`.placeHolder`);

semester.toggleClass("selected");
displaySubject(); // default behavior

subject.on("click", displaySubject);
semester.on("click", displaySemester);

function makeSubject() {

  // if semesterContainer exists, remove it
  var semesterContainer = $(`.semesterContainer`);
  if (semesterContainer.length !== 0) {
    semesterContainer.remove();
  }

  // create subjectContainer, add class name, and append to section
  var subjectContainer = document.createElement('div');
  subjectContainer.classList.add("subjectContainer");
  box.append(subjectContainer);

  // iterate through each course
  for (var i = 0; i < courseList.length; i++) {
    var currentSub = courseList[i].subject
    var subjectCard = document.getElementById(currentSub);

    // if card for given subject doesn't exist, create one and add title
    if (subjectCard === null) {
      subjectCard = document.createElement("div");
      subjectCard.setAttribute("id", currentSub);
      subjectCard.classList.add("courseGroup");
      subjectContainer.appendChild(subjectCard);

      var header = document.createElement("h6");
      header.textContent = currentSub;
      header.classList.add("subjectTitle");
      subjectCard.append(header);
    }

    // has course been added already? if not add details to card
    var classDiv = document.getElementById(courseList[i].courseNumber);
    if (classDiv === null) {
      classDiv = document.createElement("div");
      classDiv.classList.add("course");
      classDiv.setAttribute("id", courseList[i].courseNumber);

      var courseName = document.createElement("p");
      courseName.textContent = courseList[i].courseName;
      courseName.classList.add("courseDetails");
      var courseNum = document.createElement("p");
      courseNum.textContent = courseList[i].courseNumber;
      courseNum.classList.add("courseDetails");
  
      classDiv.append(courseNum);
      classDiv.append(courseName);
      subjectCard.append(classDiv);
    }
  }
}

function displaySubject() {
  subject.addClass("selected");
  semester.removeClass("selected");

  makeSubject();
}

function displaySemester() {
  subject.removeClass("selected");
  semester.addClass("selected");

  makeSemester();
}

function makeSemester() {

  // if subjectContainer exists, remove it
  var subjectContainer = $(`.subjectContainer`);
  if (subjectContainer.length !== 0) {
    subjectContainer.remove();
  }

  // create semesterContainer, add class name, and append to section
  var semesterContainer = document.createElement('div');
  semesterContainer.classList.add("semesterContainer");
  box.append(semesterContainer);

  // iterate through each course
  for (var i = 0; i < courseList.length; i++) {
    var currentSem = courseList[i].semester
    var semCard = document.getElementById(currentSem);

    // if card for given semester doesn't exist, create one and add title
    if (semCard === null) {
      semCard = document.createElement("div");
      semCard.setAttribute("id", currentSem);
      semCard.classList.add("courseGroup");
      semesterContainer.appendChild(semCard);

      var header = document.createElement("h6");
      header.textContent = currentSem;
      header.classList.add("semTitle");
      semCard.append(header);
    }

    var classDiv = document.getElementById(courseList[i].courseNumber);
    if (classDiv === null) {
      
    var classDiv = document.createElement("div");
    classDiv.classList.add("course");
    classDiv.setAttribute("id", courseList[i].courseNumber);

    var courseName = document.createElement("p");
    courseName.textContent = courseList[i].courseName;
    courseName.classList.add("courseDetails");
    var courseNum = document.createElement("p");
    courseNum.textContent = courseList[i].courseNumber;
    courseNum.classList.add("courseDetails");

    classDiv.append(courseNum);
    classDiv.append(courseName);
    semCard.append(classDiv);
    }
  }
}

class Skill {
  constructor(skill, type) {
    this.skill = skill;
    this.type = type;
  }
}

function highlightHard() {
  console.log("hi");
  var hardSkills = $(`.hard`);
  console.log(hardSkills);
  hardSkills.addClass("highlight");
}

function unhighlightHard() {
  var hardSkills = $(`.hard`);
  hardSkills.removeClass("highlight");
}

function highlightSoft() {
  var softSkills = $(`.soft`);
  softSkills.addClass("highlight");
}

function unhighlightSoft() {
  var softSkills = $(`.soft`);
  softSkills.removeClass("highlight");
}
  
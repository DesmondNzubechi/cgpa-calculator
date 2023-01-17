
//declaring variables
let course = document.querySelector('.course');
let grade = document.querySelector('.grade');
let unit = document.querySelector('.unit');
let submit = document.querySelector('.submit');
let courses = document.querySelector('.courses');
let addPoint = document.querySelector('.addPoint');
let totalPoint = document.querySelector('.totalPoint');
let totalUnit = document.querySelector('.totalUnit');
let cgpa = document.querySelector('.gp');
let clear = document.querySelector('.clear');

submit.addEventListener('click', () => {

    //declaring variable that holds the value of course
    let getCourseValue = course.value;

     //declaring variable that holds the value of selected credit unit
   let unity = unit.value; 

    //declaring variable that holds the value of selected grade
   let grady = grade.value;

   //checking if course, grade or unit value is not empty
  if (getCourseValue === '' && grady === 'SELECT' && unity === 'SELECT') {
    courses.innerHTML += '';
    alert('Comrade can you please input course name, select your grade and unit')
  } else if (getCourseValue === '' && grady === 'SELECT') {
    courses.innerHTML += '';
    alert('Kindly input course name and select course grade');
  } else if (getCourseValue === '' && unity === 'SELECT') {
    courses.innerHTML += '';
    alert('Kindly input course name and select course credit unit');
  } else if (grady === 'SELECT' && unity === 'SELECT') {
    courses.innerHTML += '';
    alert('Kindly select course grade and its credit unit');
  } else if (getCourseValue === '') {
    courses.innerHTML += '';
    alert('Kindly input course name');
  } else if (grady === 'SELECT') {
    courses.innerHTML += '';
    alert('Kindly select course grade');
  } else if (unity === 'SELECT') {
    courses.innerHTML += '';
    alert('Kindly select course credit unit');
  } else {
    courses.innerHTML += ` <div class="courseAdded">
    <div>
        <h5>${getCourseValue}</h5>
       
    </div>
    <div>
        <h5>${grady}</h5>
    </div>
    <div>
        <span class='creditpoint'>${unity}</span>
        <button type="button" class="del">X</button>
        
    </div>
   
   </div>
   `;
   //updating total point value
   let calcVal = unity * grady;
   let totalpointVal = totalPoint.innerText;
   let convToN = Number(totalpointVal);
   let getCalc = calcVal + convToN;
   totalPoint.innerText = getCalc;

   //updating total credit unit value
   let totalUnitInnertext = Number(totalUnit.innerText);
   let unityText = Number(unity)
   let sumup = totalUnitInnertext + unityText;
   totalUnit.innerText = sumup;

   //updating average cgpa value
let totalUnitToNumber = Number(totalUnit.innerText);
let totalPointToNumber = Number(totalPoint.innerText);
let averageGp =  totalPointToNumber / totalUnitToNumber
cgpa.innerText = averageGp;

//defaulting the value of course, grade and credit unit
course.value = '';
grade.value = 'SELECT';
unit.value = 'SELECT';

//displaying clear all button when course detail is added
clear.innerHTML = `  <button class="clearBtn">Clear All</button>`;
  };

  let del = document.querySelectorAll('.del');

  //adding event listener to delete button so that the parentElement of the buttont"s parent would be deleted any time it's clicked;
  del.forEach (del  => del.addEventListener('click', () => {
      del.parentElement.parentElement.remove();

      //updating the total unit value
      let getUnitVal = del.parentElement.children[0].innerText;
      let updateTotalUnit = totalUnit.innerText - getUnitVal;
      totalUnit.innerText = updateTotalUnit;

      //updating total point value
      let getPointVal = del.parentElement.parentElement.children[1].children[0].innerText;
      let finalUpdate = getUnitVal * getPointVal;
      let updateTotalPoint = totalPoint.innerText - finalUpdate;
      totalPoint.innerText = updateTotalPoint;

      //updating average cgpa value
      cgpa.innerText = updateTotalPoint / updateTotalUnit;
      if (cgpa.innerText === 'NAN') {
        cgpa.innerText = 0;
        clear.innerHTML = '';
      };

  }))
  ;

  //clearing the value of total unit, total point, average cgpa and innerHtml of course added when clear all button get clicked
  let clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', () => {
    totalPoint.innerText = 0;
    totalUnit.innerText = 0;
    courses.innerHTML = '';
    cgpa.innerText = 0;
    clear.innerHTML = '';
})
 
});






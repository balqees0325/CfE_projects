const school = {
  staffs:  [],
  students: [],

}
let student = school.students;
 
let staff = school.staffs;


function studentId() {
  let letters = "0123456789ABCDEF";
  let id = "SD"
  for (let i = 0; i < 9; i++){
  id +=letters[Math.floor(Math.random()*16)];
   }
    return id;
  }

  function clearField(){
    document.getElementById('name').value= "";
    document.getElementById('gender').value= "";
    document.getElementById('age').value= "";
    document.getElementById('tel').value= "";
    document.getElementById('address').value= "";
    document.getElementById('sClass').value = "";
    document.getElementById('email').value = "";
    document.getElementById('fees').value= "";

    document.getElementById('replace').value="";
    document.getElementById('stid').value="";
    document.getElementById('key').value="";
   
}

  function regStudent(){
    let stName = document.getElementById('name')
    let stAge = document.getElementById('age')
    let stGender = document.getElementById('gender')
    let stClass = document.getElementById('sClass')
    let stAddress = document.getElementById('address')
    let stEmail = document.getElementById('email')
    let stFees = document.getElementById('fees')
    let stPhone = document.getElementById('tel')
    FeesPaid = 0;
    student.push({
      Name:stName.value,
      Age: stAge.value,
      Gender: stGender.value,
      Class: stClass.value,
      Address: stAddress.value,
      Email: stEmail.value,
      Fees:stFees.value,
      FeesPaid: FeesPaid += parseInt(stFees.value),
      Phone: stPhone.value,
      ID: studentId()
})
console.log(student);
//document.getElementById('stid').innerHTML= 'Student ID is: ' + stid.value
    setTimeout(clearField,1000)
  };

  
//get student information
  function getStInfo(){
    let id=document.getElementById('stid').value
    let stu= school.students.find(student => student.ID == id);
    if (school.students.find(student => student.ID == id)){
        console.log(stu)
    }else {console.log("SORRY THE DATA SUPPLIED IS NOT A VALID STUDENT-ID")}    
}


// Modify student:
function modifyStInfo(){
  let keys = document.getElementById('key').value
  //console.log(keys);

  let repl = document.getElementById('replace').value
  //console.log(repl);

  let id=document.getElementById('Id').value
  //console.log(id);

  let stu= school.students.find(student => student.ID == id);
    if (school.students.find(student => student.ID == id)){     
      stu[keys]=repl; 
      console.log(stu) 
  }else{console.log("NOT A VALID STUDENT-ID")} 
 setTimeout(clearField,1000)
}
  
// Delete student: 
function deleteStAct(){
  let id=document.getElementById('delst').value
  student;
  let stu= school.students.find(student => student.ID == id);
    if (school.students.find(student => student.ID == id)){              
  let index= student.indexOf(stu);
  student.splice(index,1)
  console.log(student);
  }else{console.log("SORRY NOT A VALID STUDENT-ID")} 
  document.getElementById('delst').value="";
}

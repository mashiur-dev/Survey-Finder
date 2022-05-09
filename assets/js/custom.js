const slidePage = document.querySelector(".slide-page");
const inputGender = document.querySelector(".inputGender");
const nextBtnMale = document.querySelector(".nextbtnmale");
const nextBtnFemale = document.querySelector(".nextbtnfemale");
const nextBtnSec = document.querySelector(".next-1");
const nextBtnThird = document.querySelector(".next-2");
const submitBtn = document.querySelector(".submit");
let current = 1;

nextBtnMale.addEventListener("click", function(event){
  event.preventDefault();
  inputGender.value = this.dataset.gender;

  slidePage.style.marginLeft = "-25%";
  current += 1;
});
nextBtnFemale.addEventListener("click", function(event){
  event.preventDefault();
  inputGender.value = this.dataset.gender;
  slidePage.style.marginLeft = "-25%";
  current += 1;
});

nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  current += 1;
});

nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  current += 1;
});

submitBtn.addEventListener("click", function(){
  current += 1;
  setTimeout(function(){
		alert("Your Information Taken Successfully");
    location.reload();
    
		//to redirect to any external url
		//window.location.href = "http://www.google.com";
  },800);
});

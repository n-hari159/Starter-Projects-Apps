var currentTab=0;
showTab(currentTab);

function showTab(n){
    var x=document.getElementsByClassName("inner");
    x[n].style.display="block";
    
    if(n==0){
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
}

function nextPrev(n){
    var x = document.getElementsByClassName("inner");
    if (n == 1 && !validateForm()){
        alert("Kindly fill the required fields, Darling !!")
        return false;
    }
    x[currentTab].style.display="none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("wizard").submit();
        // return mailMe(this.form);
        return false;
    } 
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("inner");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
      if (y[i].value == "") {
        y[i].className += " invalid";
        valid = false;
      }
    }
    return valid;
}

// function mailMe(form){
//     Subject="Business Model Canvas";
//     CC= document.getElementById("cc").value;
//     location = "mailto:n.hari159@gmail.com?subject="+Subject+"&cc="+CC;
//     return true;
// }
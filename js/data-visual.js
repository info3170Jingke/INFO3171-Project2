var category = document.getElementById('satisfyCategory');
document.getElementById('checkin').style.display = "none";
document.getElementById('online').style.display = "none";
document.getElementById('gate').style.display = "none";
document.getElementById('onBoard').style.display = "none";
document.getElementById('baggage').style.display = "none";
document.getElementById('all').style.display = "block";
category.addEventListener("change", function(){
    var selectValue = document.getElementById('satisfyCategory').value;
    document.getElementById('all').style.display = "none";
    document.getElementById('checkin').style.display = "none";
    document.getElementById('online').style.display = "none";
    document.getElementById('gate').style.display = "none";
    document.getElementById('onBoard').style.display = "none";
    document.getElementById('baggage').style.display = "none";
    if(selectValue=="checkin"){
        document.getElementById('checkin').style.display = "block";
    }
    if(selectValue=="online"){
        document.getElementById('online').style.display = "block";
    }
    if(selectValue=="gate"){
        document.getElementById('gate').style.display = "block";
    }
    if(selectValue=="on-board"){
        document.getElementById('onBoard').style.display = "block";
    }
    if(selectValue=="baggage"){
        document.getElementById('baggage').style.display = "block";
    }
    else if (selectValue=="all"){
        document.getElementById('all').style.display = "block";
    }

})
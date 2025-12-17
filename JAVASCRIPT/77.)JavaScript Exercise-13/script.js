function createCard(title,cName,views,monthsOld,duration,thumbnail){
    let viewnumber
    if(views<100000){
        viewnumber=views/1000+"K";
    }
    else if(views>1000000){
        viewnumber=views/1000000+"M";
    }
    else{
        viewnumber=views/1000+"K"
    }
    let html=` <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>+${cName} . ${views} views . ${monthsOld} Months ago</p>
            </div>
        </div>`

document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}

createCard("Introduction to Backend | Sigma Web Dev video #2","CodeWithHarry",560000,7,"31:22","hqdefault.jpg")
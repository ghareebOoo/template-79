let allImage = document.querySelectorAll(".home-img");
let allH2 = document.querySelectorAll(".home-h2");
let allP = document.querySelectorAll(".home-p");
let angleLeft = document.querySelector(".angleLeft");
let angleRight = document.querySelector(".angleRight");


let currentIndex = 0;


allImage.forEach((image, index) => {
    if (index !== currentIndex) {
        image.style.display = "none";
    }
});

allH2.forEach((h2 , index) =>{
    if (index !== currentIndex) {
        h2.style.display = "none";
    }
})

allP.forEach((P , index) =>{
    if (index !== currentIndex) {
        P.style.display = "none";
    }
})


function showResult(index) {

    allImage.forEach((image) => {
        image.style.display = "none"; 
    });
    allImage[index].style.display = "block"; 

    allH2.forEach((h2) => {
        h2.style.display = "none"; 
    });
    allH2[index].style.display = "block"; 

    allP.forEach((p) => {
        p.style.display = "none"; 
    });
    allP[index].style.display = "block"; 
}

angleLeft.addEventListener("click" , function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = allImage.length - 1;
    }
    showResult(currentIndex);
})
angleRight.addEventListener("click" , function(){
    currentIndex++;
    if(currentIndex == allImage.length){
        currentIndex = 0;
    }
    showResult(currentIndex);
})

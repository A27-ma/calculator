gsap.from(".digit",{
    x: 1200,
    duration: 2,
    delay:0.5,
    rotate:360
})
gsap.from(".addition",{
    x: -1200,
    duration: 2,
    delay:0.5,
    rotate:360
})
gsap.from(".substraction",{
    x: -1200,
    duration: 2,
    delay:0.5,
    rotate:360
})
gsap.from(".multi",{
    y: 1200,
    duration: 2,
    delay:0.5,
    rotate:360
})
gsap.from(".division",{
    y: 1200,
    duration: 2,
    delay:0.5,
    rotate:360
})
gsap.from(".clear",{
    y: 1200,
    duration: 2,
    delay:0.5,
    rotate:360
})
gsap.from(".back",{
    y: 1200,
    duration: 2,
    delay:0.5,
    rotate:360
})
gsap.from(".equal",{
    x: -1200,
    duration: 2,
    delay:0.5,
    rotate:360
})


        

let string = "";
let button = document.querySelectorAll(".button");
Array.from(button).forEach((button) =>{
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector(".input-text").value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector(".input-text").value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
        }
        document.querySelector(".input-text").value = string;
    })
})



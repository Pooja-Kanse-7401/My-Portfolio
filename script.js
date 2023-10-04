function valueSetters(){
    gsap.set("#nav a",{y : "-100%", opacity: 0 })
    gsap.set("#home .parent .child", {y: "100%"}) 
}

function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        let parent = document.createElement("span")
        let child = document.createElement("span")

        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML = "";
        elem.appendChild(parent);

        
    });
}

function animationTL(){
    var tl = gsap.timeline();

tl
    .from("#front-page .child span",{
        x: 100,
        delay: 1,
        stagger: .2,
        duration: 2,
        ease: Power3.easeInOut
    })

    .to("#front-page .parent .child",{
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut
    })

    .to("#shade",{
        height: "100%",
        duration: 2,
        ease: Expo.easeInOut
    })

    .to("#home",{
        height: "100%",
        duration: 2,
        delay: -1.5,
        ease: Expo.easeInOut,

        onComplete: function(){
            animateHomePage();
        }
});

}

function animateHomePage(){
    var tl = gsap.timeline();

    tl
    .to("#nav a",{
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut
    })
    .to("#home .parent .child",{
        y: 0,
        stagger: .3,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    .to("#imgrig ",{
        delay: 3,
        rotate: 0,
        stagger: .01,
        duration: 1,
        ease: Expo.easeInOut,
        onComplete: function(){
            rotateCircle();
        }
    })
}

function rotateCircle(){
    gsap.to("#circle",{
        delay: 4,
        rotate: 0,
        ease: Expo.easeInOut,
        duration: 2
    })
}
function rotation(){
    var active = 3;
    var mncircles = document.querySelectorAll(".mncircle")
    var secs = document.querySelectorAll(".sec")
    var lable = document.querySelectorAll(".lable")
    gsap.to(mncircles[active-1],{
        opacity: .6
    })
    gsap.to(secs[active-1],{
        opacity: 1
    })
    gsap.to(lable,{
        opacity: 0.1
    })

    mncircles.forEach(function(val, index){
        val.addEventListener("click",function(){
            gsap.to("#circle .lable",{
                rotate:(3-(index+1))*10,
                ease:Expo.easeInOut,
                duration: 1
            })
            grayout();
            gsap.to(this, {
                opacity: .6
            })
            gsap.to(secs[index], {
                opacity: 1
            })
            gsap.to(lable[index], {
                opacity: 1
            })
        })
    })
    function grayout(){
        gsap.to(mncircles,{
            opacity: .08
        })
        gsap.to(secs,{
            opacity: .4
        })
        gsap.to(lable,{
            opacity: .1
        })
    }
}


var btn = document.getElementById("btn")
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var body = "name: "+ name + "<br/> email: " + email + "<br/> message: "+ message;

    Email.send({
        SecureToken : "ea955dba-7584-4d0e-87f0-d034eb1af85a",
        To : 'pdkanse7401@gmail.com',
        From : email,
        Subject : "contact message",
        Body : body
    }).then(
      message => alert(message)
    );
})


// function mouseFollower(){
//     var cr = document.querySelector("#cursor")
//     var blur = document.querySelector("#blur")
//     document.addEventListener("mousemove",function(dets){
//         cr.style.left = dets.x - 7 + "px"
//         cr.style.top = dets.y - 7 + "px"
//         blur.style.left = dets.x - 50 + "px"
//         blur.style.top = dets.y - 50 + "px"
//     })
// }


revealToSpan();
valueSetters();
animationTL();
rotation();
// mouseFollower();

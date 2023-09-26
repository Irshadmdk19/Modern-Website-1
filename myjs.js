const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// #First page animating
function firstPageAnim(){
    var t1=gsap.timeline()
    t1.from('.nav',{
        y:'-20',opacity:0, duration:1.5, ease: Expo.easeInOut
    })
    .to('.boundingelem',{
        y:0, duration:1.5, 
        stagger:0.2,
         ease: Expo.easeInOut
    })
    .from('.herofooter',{
        y:'-20',opacity:0, duration:1.5,
        delay:-1, ease: Expo.easeInOut
    })

}
firstPageAnim()
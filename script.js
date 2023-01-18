
//ScrollLottie (target: DOMElement string, 
//jsonPath: String, 
//duration: Number, 
//speed: "fast" | "medium" | "slow"
//)

//this has no duration and responds immediately to scroll
/* ScrollLottie({
 target: '#animationWindow',
 path: 'https://assets.codepen.io/35984/tapered_hello.json'
}) */

//this has a duration and animates the playhead on the Lottie animation for a smoother result
ScrollLottie({
    target: '#animationWindow',
    path: 'https://lottie.host/ee32daa6-baef-4459-8f13-de95ef6e0849/oHYKiMKGGU.json', 
    duration: 4, 
    speed: 'slow'
   });

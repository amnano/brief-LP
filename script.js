
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
    path: 'https://assets10.lottiefiles.com/packages/lf20_Xn0TxqtIyp.json', 
    duration: 4, 
    speed: 'medium'
   });

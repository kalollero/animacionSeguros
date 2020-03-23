// set letters
TweenMax.to('.letter', 0, {drawSVG:"0% 0%"})

// animate letters
var draw = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1});
    draw.add(TweenMax.staggerTo('.letter', 0.75, {drawSVG:"0 100%", ease:Expo.easeOut}, 0.12))
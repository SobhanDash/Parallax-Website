let controller = new ScrollMagic.Controller()
let timeline = new TimelineMax()

//using timeline we can chain multiple animations, and one animation occurs after the previous one.
//if we don't want that to happen we can give the duration of previous animation at the end of the current animation.
//to() -> goes from one after the other
//fromTo() -> goes backward to what to() does

timeline
	.to(".rock", 3, { y: -300 })
	.to(".girl", 3, { y: -200 }, "-=3")
	.fromTo(".bg1", 3, { y: -50 }, { y: 0, duration: 3 }, "-=3")
	.to(".content", 3, { top: "0%" }, "-=3")
	.fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 1 })
	.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 1 })

//hooks the animation to scroll
let scene = new ScrollMagic.Scene({
	triggerElement: "section",
	duration: "100%",
	triggerHook: 0,
})
	.setTween(timeline)
	.setPin("section")
	.addTo(controller)

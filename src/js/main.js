const tl = gsap.timeline()
.from("#foreground", {scale:2})
.to(".mask", {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, 0)

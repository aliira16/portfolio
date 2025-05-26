window.addEventListener("scroll", () => {
    let itech = document.getElementById('itechd');
    let getInTuchd = document.getElementById('getInTuchd');
    let scrollY = window.scrollY;
    let windowHeight = window.innerHeight;

    // Get the position of the middle section
    let middleSection = document.querySelector(".aboutUse");
    let middleTop = middleSection.offsetTop;
    let middleBottom = middleTop + middleSection.clientHeight;

    // Get the position of the last section
    let endSection = document.querySelector(".getInTuch");
    let endScroll = endSection.offsetTop - windowHeight / 2;

    // Determine the stopping position
    let stopScroll = middleTop - windowHeight / 2;

    // 1. Ensure initial state at the top
    if (scrollY === 0) {
        itech.style.opacity = "1";
        getInTuchd.style.opacity = "0";
    }

    // 2. Handle "itech" movement before stopping point
    if (scrollY < stopScroll) {
        itech.style.transform = `translate(-10%, calc(-30% + ${scrollY * 0.1}px))`;
    } else {
        itech.style.transform = `translate(-10%, calc(-30% + ${stopScroll * 0.1}px))`;
    }

    // 3. Hide "itech" in the middle of the page
    if (scrollY + windowHeight / 2 > middleTop && scrollY + windowHeight / 2 < middleBottom) {
        itech.style.opacity = "0";
    } else if (scrollY < middleTop) {
        itech.style.opacity = "1";  // Ensure itech is visible before the middle
    }

    // 4. Ensure "itech" disappears after middleBottom
    if (scrollY > middleBottom) {
        itech.style.opacity = "0";
    }

    // 5. Make "getInTuchd" visible at bottom
    if (scrollY > endScroll) {
        getInTuchd.style.opacity = "1";
        itech.style.opacity = "0";
    } else {
        getInTuchd.style.opacity = "0"; // Hide "getInTuchd" if not at the bottom
    }

    // 6. Ensure "itech" returns when scrolling back up
    if (scrollY < middleTop) {
        itech.style.opacity = "1";
        getInTuchd.style.opacity = "0";
    }

    let img1 = document.getElementById('cart1')
    cart1.style.transform =`translateY(${scrollY * -.5 + 450}px) `

    let img2 = document.getElementById('cart2')
    cart2.style.transform =`translateY(${scrollY * .1 + 75}px)`

    let img3 = document.getElementById('cart3')
    cart3.style.transform =`translateY(${scrollY * -.5 + 500}px)`

    let img4 = document.getElementById('cart4')
    cart4.style.transform =`translateY(${scrollY * .1 -140}px)`


    let newOpacity = scrollY * 0.001;

    if(newOpacity >= 0 && newOpacity <=1){
        cart1.style.opacity = newOpacity;
        cart2.style.opacity = newOpacity;
        cart3.style.opacity = newOpacity;
        cart4.style.opacity = newOpacity;
    }
});



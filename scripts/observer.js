const observer = () => {

    const masks = document.querySelectorAll('.mask');

    const animate = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log("intersect");
                entry.target.classList.toggle("animate");
                observer.unobserve(entry.target);
            }
        }
    )
    }, {
        threshold: 0.75
    }); 

    masks.forEach(mask => {
        animate.observe(mask);
    })

    }
export default observer;
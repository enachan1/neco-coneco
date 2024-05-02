const images = () => {
    const image = document.querySelectorAll(".img");

    image.forEach(images => {
        images.addEventListener("click", () => {
            console.log("clicked");
        })
    })
}

export default images
const userId = document.getElementById("profile-id");
const centeredId = document.getElementById("position");
const toggleId = document.getElementById("toggle-id");

const doCss = () => {
    //add multiple class to profile-d
    userId.classList.add("classOne", "classTwo", "classThird");
    centeredId.classList.remove("center");
    centeredId.innerText = "all styled removed";
    centeredId.innerHTML = `
        <h2>JS is awesome</h2>
        <h5>Let make something creative</h5>
    `

    toggleId.classList.toggle("toggleClass")
}
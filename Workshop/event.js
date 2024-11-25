let counter = 0





function clickInstructions(el) {
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle")
    counter += 1     
    //^incrementer ^
    console.log(counter)
    
    
    
    if(el == title) {
        console.log("title")
    } else if (el == subtitle) {
        console.log("subtitle clicked")
    let p = document.createElement("p");
    let firstText = document.createTextNode("The internet is made up of small and large. Deep and Shallow.");
    let secondText = document.createTextNode("An infinite reflection of our galaxy, The internet is infinite void of creation with endless realities. It is a grand Milky Way trapped into a grain of sand.");
    p.appendChild(firstText);
    p.appendChild(secondText)
    document.body.appendChild(p); let img = document.createElement("img");
    let imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image");
    imageWrapper.appendChild(img)
    img.src = "https://i.pinimg.com/474x/16/d0/53/16d053a2b99167df447a3ea390496eda.jpg";
    document.body.appendChild(img)
    const element = document.getElementById("newimg");
    if(counter > 5){
    img.src = "https://i.pinimg.com/enabled_lo_mid/474x/db/68/a7/db68a7b6200e79098e3675c60a3abfd6.jpg";
    }}
}

document.addEventListener("click", function(event) {
    clickInstructions(event.target)
});

    // if console.log returns 6 clicks change img to "newimg"



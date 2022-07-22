const sliderData = [

    {
    "image_src_mobile": "images/mobile-image-hero-1.jpg",
    "image_src_desktop": "images/desktop-image-hero-1.jpg",
    "hero_title": "Discover innovative ways to decorate",
    "hero_description": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    { 
    "image_src_mobile": "images/mobile-image-hero-2.jpg",
    "image_src_desktop": "images/desktop-image-hero-2.jpg",
    "hero_title": "We are available all across the globe",
    "hero_description": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
    "image_src_mobile": "images/mobile-image-hero-3.jpg",
    "image_src_desktop": "images/desktop-image-hero-3.jpg",
    "hero_title": "Manufactured with the best materials",
    "hero_description": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

function htmlSetter(counter){
        document.querySelector("#hero_image_mobile").src = `${sliderData[counter].image_src_mobile}`
        document.querySelector("#hero_image_desktop").src = `${sliderData[counter].image_src_desktop}`
        document.querySelector("#hero_title").textContent = `${sliderData[counter].hero_title}`
        document.querySelector("#hero_longtext").textContent = `${sliderData[counter].hero_description}`
}

const back_btn = document.getElementById('btn_backward')
const forward_btn = document.getElementById('btn_foward')

let counter = 0


back_btn.addEventListener("click", function(){
    
    if (counter > 0){
        counter -=1
        htmlSetter(counter)
    }
    else {
        counter = sliderData.length-1;
        htmlSetter(counter)    
    }
})


forward_btn.addEventListener("click", function(){
    console.log("forward clicked")

    if (counter < sliderData.length-1){
        counter +=1
        htmlSetter(counter)  
    }
    else {
        counter = 0
        htmlSetter(counter)      
    }
})


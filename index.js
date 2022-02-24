var carouselIndex = 0;  

OnCarouselChange(carouselIndex)

function OnCarouselChange(value) {
    UpdateCarousel(value);
}

function GetCarouselItems() {
    return document.getElementsByClassName('carousel-item');
}

function OnCarouselItemUpdate(index, hide = true) {
    var carousels = GetCarouselItems()
    var element = carousels[index];
    element.style.display = hide ? 'none' : 'block';
}


function UpdateCarousel(number) {
    var carousels = GetCarouselItems()
    var maxCarousels = carousels.length - 1

    carouselIndex += number

    if (carouselIndex > maxCarousels) 
        carouselIndex = 0;
    
    if (carouselIndex < 0)
        carouselIndex = maxCarousels

    for (let index = 0; index < carousels.length; index++)
        OnCarouselItemUpdate(index)

    OnCarouselItemUpdate(carouselIndex, false)
}
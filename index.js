var carouselIndex = 0;  

OnCarouselChange(carouselIndex)

function OnCarouselChange(value, throughButton = true) {
    UpdateCarousel(value, throughButton);
}

function GetCarouselItems() {
    return document.getElementsByClassName('carousel-img');
}

function GetThumbnailsItems() {
    return document.getElementsByClassName('carousel-thumbnail')
}

function OnThumbnailUpdate(index, selected = false) {
    var thumbnails = GetThumbnailsItems()
    var element = thumbnails[index]
    console.log(index)
    element.className = 'carousel-thumbnail '
    element.className += selected ? 'selected' : 'unselected'
}

function OnCarouselItemUpdate(index, hide = true) {
    var carousels = GetCarouselItems()
    var element = carousels[index];
    element.style.display = hide ? 'none' : 'block';
}


function UpdateCarousel(number, throughButton) {
    var carousels = GetCarouselItems()
    var thumbnails = GetThumbnailsItems()
    var maxCarousels = carousels.length - 1

    if(throughButton)
        carouselIndex += number
    else
        carouselIndex = number
    
    if (carouselIndex > maxCarousels) carouselIndex = 0;
    
    if (carouselIndex < 0) carouselIndex = maxCarousels

    for (let index = 0; index < carousels.length; index++) {
        OnCarouselItemUpdate(index)
        OnThumbnailUpdate(index)
    }   

    OnThumbnailUpdate(carouselIndex, true)  
    OnCarouselItemUpdate(carouselIndex, false)
}

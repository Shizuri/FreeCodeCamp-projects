const show = () => {
    let navElements = document.getElementsByClassName('nav-link')

    for(let i = 0; i < navElements.length; i++){
        console.log(navElements[i])
    }
}
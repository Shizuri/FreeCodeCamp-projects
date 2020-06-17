const show = () => {
    const navElements = document.getElementsByClassName('nav-link-mobile')
    // Get all the navigation links for mobile

    for (let i = 0; i < navElements.length; i++) {
        const navElementsStyle = getComputedStyle(navElements[i])
        // Get the computed values for the style. This is necessary when the style is in a .css file
        navElementsStyle.display === 'none' ? navElements[i].style.display = 'block' : navElements[i].style.display = 'none'
        // Toggle the diplay value
    }

    const mainNavElement = document.getElementById('navigation-popup')
    // Get the navigation element
    const mainNavElementStyle = getComputedStyle(mainNavElement)
    // Get its computed style
    mainNavElementStyle.color === 'rgb(0, 0, 0)' ? mainNavElement.style.color = 'blueviolet' : mainNavElement.style.color = 'black'
    // Toggle its color to show that it's enabled or disabled
}
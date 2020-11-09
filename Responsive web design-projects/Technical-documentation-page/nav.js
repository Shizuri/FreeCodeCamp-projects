const toggleNavMenu = () => {
    // Get all the navigation links for mobile
    const navElements = document.getElementsByClassName('nav-link-mobile')

    for (let i = 0; i < navElements.length; i++) {
        // Get the computed values for the style. This is necessary when the style is in a .css file
        const navElementsStyle = getComputedStyle(navElements[i])
        // Toggle the diplay value
        navElementsStyle.display === 'none' ? navElements[i].style.display = 'block' : navElements[i].style.display = 'none'
    }

    // Get the navigation element
    const mainNavElement = document.getElementById('navigation-popup')
    // Get its computed style
    const mainNavElementStyle = getComputedStyle(mainNavElement)
    // Toggle its color to show that it's enabled or disabled
    mainNavElementStyle.color === 'rgb(0, 0, 0)' ? mainNavElement.style.color = 'blueviolet' : mainNavElement.style.color = 'black'
}
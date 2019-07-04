export const setStyle = (el, styles) => {
    for (var property in styles)
        el.style[property] = styles[property];
}
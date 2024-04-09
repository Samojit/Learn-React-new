const mainContainer = document.getElementById('root');

const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank',
    },
    Children:"Click here to visit"
}


customReactBuilder(reactElement,mainContainer)


function customReactBuilder(reactElement,mainContainer) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children

    for(const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement);
}
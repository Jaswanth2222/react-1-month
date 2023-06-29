let topHeading = React.createElement('h1', {className:'heading'}, 'This is the Header Section');
let topData = React.createElement('p', {className : "data-heading"}, "The main goal of mine is to develop frontend  applictions using React and to become job ready react professional at any cost by the end of July");

let Header = React.createElement('div', {className : "mini-container"}, [topHeading, topData]);

let mainHeading = React.createElement('h1', {className:'heading'}, 'This is the Main Section');
let mainData = React.createElement('p', {className : "data-heading"}, "The main goal of mine is to develop frontend  applictions using React and to become job ready react professional at any cost by the end of July");

let Main = React.createElement('div', {className : "mini-container"}, [mainHeading, mainData]);

let footerHeading = React.createElement('h1', {className:'heading'}, 'This is the Footer Section');
let footerData = React.createElement('p', {className : 'data-heading'}, "The main goal of mine is to develop frontend  applictions using React and to become job ready react professional at any cost by the end of July");

let Footer = React.createElement('div', {className : "mini-container"}, [footerHeading, footerData]);

let mainContainer = React.createElement('div', {className : "container"}, [Header, Main, Footer]);

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(mainContainer);
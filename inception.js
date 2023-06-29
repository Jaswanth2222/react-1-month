// const heading = React.createElement('h1', { className: 'main-heading' }, 'Hello from React!');

const homeEle = React.createElement('a', { href: 'http://', className : "nav-item-styling" }, 'Home');
const coursesEle = React.createElement('a', { href: 'http://', className : "nav-item-styling" }, 'Courses');

const aboutEle = React.createElement('a', { href: 'http://', className : "nav-item-styling" }, 'About');

const contactEle = React.createElement('a', { href: 'http://', className : "nav-item-styling" }, 'Contact');    


const navbar = React.createElement('div', { className: 'navbar-styling' }, [homeEle, coursesEle, aboutEle, contactEle]);

const header = React.createElement('h1', { className: 'header-section' }, navbar);

const image = React.createElement('img', { className: 'image-styling', src: 'download.jfif' });
const mainSectionHeading = React.createElement('h1', { className: 'main-section-heading' }, 'The main goal of min eis to develop to React apllications and beocme master in ReactJs by start of August');

const main = React.createElement('div', { className: 'main-container' }, [image, mainSectionHeading]);


const footer = React.createElement('div', { className: 'footer-section' }, );

const container = React.createElement('div', { className: 'container-style' }, [header, main, footer]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
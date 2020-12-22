import imageOne from "../images/001/1.png";
import imageTwo from "../images/002/1.png";
import imageThree from "../images/003/1.png";
import imageFour from "../images/004/1.png";
import imageFive from "../images/005/1.png";

export const projectData = [
    {
        id: 1,
        title: 'E-Commerce',
        description: 'An online bike shop where you can select and buy products. Add it to cart, place an order and pay through Paypal. The goal of this project is to imitate e-commerce platform like Amazon.',
        image: imageOne,
        techStack: 'ReactJS, NodeJS, Express, MongoDB, Redux, Axios',
        link: 'https://premium-bikes.herokuapp.com/'
    },
    {
        id: 2,
        title: 'Record Management System',
        description: 'Applicable for small businesses to easily manage, store and retrieve data from their clients, employees, and other stakeholders. Other feature includes QR Code generator.',
        note: 'Author\'s Note: This is a free deployment by Heroku and installing add-ons like MySQL database needs additional requirements. Hence, the link below has no back-end functions.',
        image: imageTwo,
        techStack: 'HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, SQL',
        link: 'https://rms-qrcode.herokuapp.com/'
    },
    {
        id: 3,
        title: 'Business Landing Page',
        description: 'Templates for business landing pages. Fully responsive and with reusable components.',
        image: imageThree,
        techStack: 'HTML, Styled-Components, ReactJS, React-Scroll',
        link: 'https://homebuild.netlify.app/'
    },
    {
        id: 4,
        title: 'Logitech G502 Website Clone',
        description: 'Logitech landing page clone. Fully responsive and with reusable components.',
        image: imageFour,
        techStack: 'HTML, CSS, ReactJS, React-Scroll',
        link: 'https://logitech502.netlify.app/'
    },
    {
        id: 5,
        title: 'URL shortener',
        description: 'Free URL shortener to create the perfect short URLs for your business. It helps you shorten, create and share branded links with custom domains at scale.',
        image: imageFive,
        techStack: 'NodeJS, Express, MongoDB, EJS',
        link: 'https://c-url.herokuapp.com/'
    }
]
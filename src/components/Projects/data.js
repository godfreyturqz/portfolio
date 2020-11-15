import imageOne from "../images/001/1.png";
import imageTwo from "../images/002/1.png";

export const projectData = [
    {
        id: 1,
        title: 'E-Commerce',
        description: 'An online bike shop where you can select and buy products. Add it to cart, place an order and pay through Paypal. The goal of this project is to imitate e-commerce platform like Amazon.',
        image: imageOne,
        techStack: 'ReactJS, NodeJS, Express, MongoDB, Redux, Axios, Filebase64',
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
    }
]
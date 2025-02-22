import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
    )
    .then((response) => {
        toast.success('Successfully sent! I will get back to you soon.');

        setTimeout(() => {
            window.location.reload();
        }, 2000);
    })
    .catch((error) => {
        toast.error("Something went wrong. Please try again.");
    });
}

export default sendEmail;
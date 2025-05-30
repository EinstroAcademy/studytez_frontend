import emailjs from '@emailjs/browser';

const sendEmail = (templateParams) => {
    
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;
  emailjs.send('service_d9ix37m', 'template_qkhi04e', templateParams, '7W3aY78bbel6VE_VF')
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Failed to send email.', error);
    });
};

export default sendEmail;
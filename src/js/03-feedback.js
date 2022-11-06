import throttle from 'lodash.throttle';
const refs = {
    form: document.querySelector("form"),
    email: document.querySelector('[name="email"]'),
    messg: document.querySelector('[name="message"]'),
    submit: document.querySelector('[type="submit"]'),
    
};


refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputChange, 500));
onPageReset();



function onInputChange(e) {
     const input = {
        email: refs.email.value,
        message: refs.messg.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(input));
 
};

 function onFormSubmit(e) {
     e.preventDefault();
     const input = {
        email: refs.email.value,
        message: refs.messg.value,
    }
     console.log(input);
     e.currentTarget.reset();
     localStorage.removeItem("feedback-form-state");
     
};
 
   
function onPageReset() {
    const feedback = localStorage.getItem("feedback-form-state");
    if (feedback) {
        input = JSON.parse(feedback);
        refs.email.value = input.email;
        refs.messg.value = input.message;
    }
    
};


// import throttle from 'lodash.throttle';
// const refs = {
//     form: document.querySelector("form"),
//     email: document.querySelector('[name="email"]'),
//     messg: document.querySelector('[name="message"]'),
//     submit: document.querySelector('[type="submit"]'),
    
// };


// refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('input', onInputChange);
// refs.messg.addEventListener('input', onInputChange);
// onPageReset();



// function onInputChange(e) {
//      const input = {
//         email: refs.email.value,
//         message: refs.messg.value,
//     }
//     localStorage.setItem("feedback-form-state", JSON.stringify(input));
 
// };

//  function onFormSubmit(e) {
//      e.preventDefault();
//      const input = {
//         email: refs.email.value,
//         message: refs.messg.value,
//     }
//      console.log(input);
//      e.currentTarget.reset();
//      localStorage.removeItem("feedback-form-state");
     
// };
 
   
// function onPageReset() {
//     const inputLocalStorage = localStorage.getItem("feedback-form-state");
//     if (inputLocalStorage) {
//         savedInput = JSON.parse(inputLocalStorage);
//     refs.email.value = savedInput.email
//     refs.messg.value=savedInput.message
//     }
    
// };
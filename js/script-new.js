console.log('Init!');

// inputmask
const form = document.querySelector('.newsletter__form');

const validation = new JustValidate('.newsletter__form');

validation
  .addField('.newsletter__form-input', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Email must be',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Incorect Email',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });

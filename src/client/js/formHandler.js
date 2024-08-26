import { checkURL } from './checkURL';

function handleSubmit(event) {
  event.preventDefault();

  const formText = document.getElementById('name').value;

  if (checkURL(formText)) {
    console.log("::: Form Submitted :::");

    fetch('http://localhost:8000/sentiment', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: formText }),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById('results').innerHTML = `
          <p>Agreement: ${data.agreement}</p>
          <p>Confidence: ${data.confidence}</p>
          <p>Irony: ${data.irony}</p>
        `;
      })
      .catch((error) => console.error('Error:', error));
  } else {
    alert("Invalid URL. Please enter a valid URL.");
  }
}

export { handleSubmit };

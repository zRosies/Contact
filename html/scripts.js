document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  console.log(contactForm);

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const formDataObject = {};
    let _id = '';

    formData.forEach((value, key) => {
      if (key === 'id') {
        console.log(key);
        _id = value;
      } else {
        formDataObject[key] = value;
      }
    });

    if (_id === '') {
      try {
        const response = await fetch('https://contactapiupdated.onrender.com/contacts/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataObject),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Contact created:', data);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      try {
        console.log(_id);
        const response = await fetch(`http://localhost:7070/contacts/${_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataObject),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Contact updated:', data);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const deleteForm = document.getElementById('deleteForm');
    console.log(deleteForm);
  
    deleteForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      // Get the contact ID from the form input
      const contactId = document.getElementById('id').value;
      console.log(contactId)
  
      if (!contactId) {
        console.error('Contact ID is required.');
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:7070/contacts/${contactId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          console.log(`Contact with ID ${contactId} deleted successfully.`);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  });
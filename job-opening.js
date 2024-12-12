// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get the form and button elements
    const form = document.querySelector('form');
    const submitButton = document.querySelector('button[type="submit"]');
    
    // Add event listener to handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way
        
        // Get values from the form inputs
        const jobTitle = document.getElementById('jobTitle').value;
        const jobDescription = document.getElementById('jobDescription').value;
        const eligibility = document.getElementById('eligibility').value;
        const deadline = document.getElementById('deadline').value;

        // Validate the form inputs (simple validation for empty fields)
        if (!jobTitle || !jobDescription || !eligibility || !deadline) {
            alert('Please fill all the fields');
            return; // Stop the submission if fields are empty
        }

        // Simulate storing job opening data (in reality, this could be sent to a server)
        console.log('Job Opening Submitted:');
        console.log('Job Title:', jobTitle);
        console.log('Job Description:', jobDescription);
        console.log('Eligibility:', eligibility);
        console.log('Deadline:', deadline);

        // Show a success message to the user
        alert('Job opening added successfully!');

        // Reset the form fields
        form.reset();
    });
});

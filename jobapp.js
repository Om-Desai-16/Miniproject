document.getElementById("jobApplicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission refresh.

    // Get user inputs
    const cgpa = document.getElementById("cgpa").value;
    const skills = document.getElementById("skills").value;
    const domain = document.getElementById("domain").value;

    // Redirect to job listings page with user data as query parameters
    const queryString = `listings.html?cgpa=${encodeURIComponent(cgpa)}&skills=${encodeURIComponent(skills)}&domain=${encodeURIComponent(domain)}`;
    window.location.href = queryString;
});

document.getElementById("internshipForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user inputs
    const cgpa = parseFloat(document.getElementById("cgpa").value);
    const skills = document.getElementById("skills").value.split(",").map(skill => skill.trim());
    const domain = document.getElementById("domain").value;

    // Redirect to listings page with parameters
    window.location.href = `internship-listing.html?cgpa=${cgpa}&skills=${skills.join(",")}&domain=${domain}`;
});

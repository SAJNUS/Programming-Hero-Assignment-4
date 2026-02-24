const jobs = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "all"
    },
    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
        status: "all"
    },
    {
        id: 3,
        companyName: "TechStart Inc",
        position: "Full Stack Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$140,000 - $180,000",
        description: "Join our innovative team to build scalable web applications. Experience with Node.js, React, and cloud platforms required.",
        status: "all"
    },
    {
        id: 4,
        companyName: "Data Solutions Co",
        position: "Frontend Developer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Develop responsive user interfaces for enterprise data visualization tools. Strong JavaScript and CSS skills essential.",
        status: "all"
    },
    {
        id: 5,
        companyName: "Creative Studios",
        position: "UI/UX Designer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$95,000 - $135,000",
        description: "Design intuitive interfaces for mobile and web applications. Collaborate with development teams to bring designs to life.",
        status: "all"
    },
    {
        id: 6,
        companyName: "Cloud Systems Ltd",
        position: "DevOps Engineer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$125,000 - $165,000",
        description: "Manage cloud infrastructure and CI/CD pipelines. Experience with AWS, Docker, and Kubernetes preferred.",
        status: "all"
    },
    {
        id: 7,
        companyName: "Digital Marketing Pro",
        position: "WordPress Developer",
        location: "Remote",
        type: "Contract",
        salary: "$70,000 - $100,000",
        description: "Build and maintain WordPress sites for clients. Custom theme development and plugin integration experience needed.",
        status: "all"
    },
    {
        id: 8,
        companyName: "Game Dev Studio",
        position: "Unity Developer",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$100,000 - $140,000",
        description: "Create immersive gaming experiences using Unity. Work on cutting-edge VR and AR projects with a talented team.",
        status: "all"
    }
];

function handleStatusChange(jobId, newStatus) {
    const job = jobs.find(j => j.id === jobId);
    if (job) {
        job.status = newStatus;
        updateDashboard();
    }
}

function renderJobs() {
    const jobContainer = document.getElementById('job-container');
    
    jobContainer.innerHTML = '';
    
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.setAttribute('data-id', job.id);
        jobCard.setAttribute('data-status', job.status);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '🗑️';
        
        const companyName = document.createElement('h3');
        companyName.className = 'company-name';
        companyName.textContent = job.companyName;
        
        const jobTitle = document.createElement('p');
        jobTitle.className = 'job-title';
        jobTitle.textContent = job.position;
        
        const jobDetails = document.createElement('p');
        jobDetails.className = 'job-details';
        jobDetails.textContent = `${job.location} • ${job.type} • ${job.salary}`;
        
        const statusBadge = document.createElement('span');
        statusBadge.className = 'status-badge';
        statusBadge.textContent = 'NOT APPLIED';
        
        const jobDescription = document.createElement('p');
        jobDescription.className = 'job-description';
        jobDescription.textContent = job.description;
        
        const jobActions = document.createElement('div');
        jobActions.className = 'job-actions';
        
        const interviewBtn = document.createElement('button');
        interviewBtn.className = 'btn btn-interview';
        interviewBtn.textContent = 'INTERVIEW';
        interviewBtn.addEventListener('click', () => handleStatusChange(job.id, 'interview'));
        
        const rejectedBtn = document.createElement('button');
        rejectedBtn.className = 'btn btn-rejected';
        rejectedBtn.textContent = 'REJECTED';
        rejectedBtn.addEventListener('click', () => handleStatusChange(job.id, 'rejected'));
        
        jobActions.appendChild(interviewBtn);
        jobActions.appendChild(rejectedBtn);
        
        jobCard.appendChild(deleteBtn);
        jobCard.appendChild(companyName);
        jobCard.appendChild(jobTitle);
        jobCard.appendChild(jobDetails);
        jobCard.appendChild(statusBadge);
        jobCard.appendChild(jobDescription);
        jobCard.appendChild(jobActions);
        
        jobContainer.appendChild(jobCard);
    });
    
    updateDashboard();
}

function updateDashboard() {
    const totalCount = jobs.length;
    const interviewCount = jobs.filter(job => job.status === 'interview').length;
    const rejectedCount = jobs.filter(job => job.status === 'rejected').length;
    
    document.getElementById('total-count').textContent = totalCount;
    document.getElementById('job-count').textContent = `${totalCount} jobs`;
    document.querySelector('.stat-value.interview').textContent = interviewCount;
    document.querySelector('.stat-value.rejected').textContent = rejectedCount;
}

document.addEventListener('DOMContentLoaded', function() {
    renderJobs();
});

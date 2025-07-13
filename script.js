/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


  /*==================== sticky navbar ====================*/



  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
};


/*==================== scroll reveal ====================*/




/*==================== typed js ====================*/
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;

  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll('.points');
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add('marked')
  }
});

/*==================== ai ====================*/
// Toggle mobile menu
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Close navbar when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// Sticky navbar
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};


// projects----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with HTML, CSS, and JavaScript, featuring smooth animations and a clean design.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      links: {
        github: "https://github.com/BlackHacker111",
        live: "https://portfolio.example.com"
      }
    },
    {
      id: 2,
      title: "Chat Application",
      description: "Real-time chat application with features like message threading, user presence, and file sharing capabilities.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["HTML", "CSS", "JavaScript", "WebSockets"],
      links: {
        github: "https://github.com/BlackHacker111",
        live: "https://chat.example.com"
      }
    },
    {
      id: 3,
      title: "E-Commerce Website",
      description: "Full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["HTML", "CSS", "JavaScript", "API Integration"],
      links: {
        github: "https://github.com/BlackHacker111",
        live: "https://shop.example.com"
      }
    },
    {
      id: 4,
      title: "Interactive Web Application",
      description: "Interactive data visualization dashboard with customizable charts, filters, and real-time updates.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Data Visualization"],
      links: {
        github: "https://github.com/BlackHacker111",
        live: "https://app.example.com"
      }
    }
  ];

  // Render projects
  const projectsContainer = document.getElementById('projects-container');

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
        <div class="project-image-container">
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            class="project-image"
          />
          <div class="project-overlay">
            <div class="project-icon">
              ${project.icon}
            </div>
            <h3 class="project-title">${project.title}</h3>
          </div>
        </div>
        
        <div class="project-content">
          <p class="project-description">${project.description}</p>
          
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
          
          <div class="project-links">
            <div class="project-social">
              <a 
                href="${project.links.github}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link"
                aria-label="View GitHub repository"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a 
                href="${project.links.live}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link"
                aria-label="View live site"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
            
            <a 
              href="${project.links.live}" 
              class="view-project"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      `;

    projectsContainer.appendChild(projectCard);
  });

  // Add intersection observer for animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  // Apply initial styles and observe all cards
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    // Set initial styles for animation
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;

    // Observe the card
    observer.observe(card);
  });
});

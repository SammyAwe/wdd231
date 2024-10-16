document.addEventListener("DOMContentLoaded", () => {
     const lazyImages = document.querySelectorAll('.lazy'); 
     const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
             if (entry.isIntersecting) { 
                const img = entry.target; img.src = img.dataset.src; observer.unobserve(img); 
            } 
        }); 
    }); 
    lazyImages.forEach((img) => observer.observe(img));
    document.getElementById('lastModified').textContent = document.lastModified; 
}); 
const welcomeMessage = document.getElementById('welcomeMessage'); 
const lastVisit = localStorage.getItem('lastVisit'); 
const currentVisit = Date.now(); 
if (lastVisit) { 
    const daysSinceLastVisit = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24)); 
    if (daysSinceLastVisit < 1) 
        { welcomeMessage.textContent = "Back so soon! Awesome!"; 

        } else if (daysSinceLastVisit === 1) {
             welcomeMessage.textContent = `You last visited 1 day ago.`; 
            } else { welcomeMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`; 
        } } else { 
            welcomeMessage.textContent = "Welcome! Let us know if you have any questions."; 
        }
        localStorage.setItem('lastVisit', currentVisit);
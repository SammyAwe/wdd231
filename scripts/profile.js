document.getElementById('currentyear').textContent = new 
Date().getFullYear();

document.getElementById('lastModified').textContent += document.lastModified; 

const allBtn =
document.getElementById('allBtn');
const cseBtn = 
document.getElementById('cseBtn');
const wddBtn = 
document.getElementById('wddBtn');
const courses = 
document.querySelectorAll('.course');

allBtn.addEventListener('click', () => {
    courses.forEach(course => course.styles.display = 'block');
});

cseBtn.addEventListener('click', () => {
    courses.forEach(course => {
        if (course.dataset.course === 
 'CSE') {
                course.style.display = 
 'block';
        } else {
            course.style.display = 
 'none';
        }
     }); 
});

wddBtn.addEventListener('click', () => {
    courses.forEach(course => {
        if (course.dataset.course === 
'WDD' ) {
                course.style.display = 
'block';
        } else {
             course.style.display =
'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const calculateTotalCredits = () => {
        const courses = document.querySelectorAll('.course');
        let totalCredits = Array.from(courses).reduce((total, course) => {
            return total + parseInt(course.getAttribute('data-credits'), 10);
        }, 0);
document.getElementById('totalCredits').textContent = totalCredits;
    };
    calculateTotalCredits();
});
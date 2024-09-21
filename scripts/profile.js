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
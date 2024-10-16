window.addEventListener('load', function() {
    const timestampField = document.getElementById('timestamp');
    const currentDateTime = newDate().toLocaleString();
    timestampField.value = currentDateTime;
});
 document.getElementById('timestamp').value = new Date().toISOString(); 
 const modals = document.querySelectorAll('.modal'); 
 const closeButtons = document.querySelectorAll('.close'); 
 document.querySelectorAll('.membership-card a').forEach(link => { link.onclick = function(event) { event.preventDefault();
  const modalId = this.getAttribute('href'); 
  document.querySelector(modalId).style.display = 'block'; 
  }; 
  }); 
  closeButtons.forEach(button => { button.onclick = function() { 
    this.closest('.modal').style.display = 'none'; 
    }; 
    }); 
    window.onclick = function(event) 
    { if (event.target.classList.contains('modal')) { 
        event.target.style.display = 'none'; 
        } 
        }; 
    window.addEventListener('load', function() { 
    document.querySelectorAll('.membership-card').forEach(card => { 
    card.classList.add('loaded');
     }); 
 }); 
 const lastModified = document.lastModified;
 const formattedDate = new Date(lastModified).toLocaleString();
 document.getElementById('lastModifiedDisplay').textContent = `Last modified: ${formattedDate}`;
window.addEventListener('load', function() { 
    const urlParams = new URLSearchParams(window.location.search); 
    document.getElementById('firstNameDisplay').textContent = urlParams.get('firstName'); 
    document.getElementById('lastNameDisplay').textContent = urlParams.get('lastName'); 
    document.getElementById('emailDisplay').textContent = urlParams.get('email'); 
    document.getElementById('phoneDisplay').textContent = urlParams.get('phone'); 
    document.getElementById('organizationDisplay').textContent = urlParams.get('organization'); 
    document.getElementById('timestampDisplay').textContent = urlParams.get('timestamp'); 
    }); 

async function fetchMembers(viewType = 'grid') {
    try {
        const response = await fetch('scripts/members.json');
        const members = await response.json();
        displayMembers(members,'grid');
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

function displayMembers(members, viewType) {
    const container = document.getElementById('memberContainer');
    container.innerHTML = '';

    if (viewType === 'grid') {
        container.classList.remove('list-view');
        container.classList.add('grid-view');
        members.forEach(member =>
            {
                const card = `
                <div class="member-card">
                    <img src="images/${member.image}" alt="${member.name}">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>MembershipLevel: ${getMembershipLevel(member.membershipLevel)}</p>
                </div>`;
                container.innerHTML += card;
            }
        );
    } else if (viewType === 'list') {
        container.classList.remove('grid-view');
        container.classList.add('list-view');
        members.forEach(member => 
            {
                const listItem = ` 
                <div class="member-list-item">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                </div>`;
                container.innerHTML += listItem;
            }
        );
    }
}

function getMembershipLevel(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

document.getElementById('toggleView').addEventListener('click', function()
{
const currentView = this.getAttribute('data-view');
const newView = currentView === 'grid' ? 'list' : 'grid'; this.setAttribute('data-view', newView);
this.textContent = newView === 'grid' ? 'Switch to List View' : 'Switch to Grid View';
fetchMembers(newView);
});

window.onload = fetchMembers;
const lastModified = document.lastModified;
const formattedDate = new Date(lastModified).toLocaleString();
document.getElementById('lastModified').textContent = document.lastModified;
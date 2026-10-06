function renderClubs() {

    const container =
        document.getElementById(
            "clubsContainer"
        );

    if (!container) return;


    container.innerHTML = uniriseData.clubs.map(
        club => `

        <article class="club-card">

            <div class="club-cover">
                ${club.name.charAt(0)}
            </div>

            <div class="club-body">

                <div class="club-title">

                    <h3>${club.name}</h3>

                    ${club.verified
                        ? `<span class="verified">
                            ✓ Verified
                           </span>`
                        : ""}

                </div>


                <p class="club-tagline">
                    ${club.tagline}
                </p>


                <div class="club-meta">

                    <span>
                        ${club.category}
                    </span>

                    <span>
                        ${club.members} members
                    </span>

                </div>


                <button
                    class="secondary-btn"
                    onclick="openClub(${club.id})">

                    View Club

                </button>

            </div>

        </article>

    `).join("");

}


function openClub(id) {

    const club =
        uniriseData.clubs.find(
            item => item.id === id
        );

    if (!club) return;


    alert(

        `${club.name}\n\n` +

        `${club.tagline}\n\n` +

        `President/Leader: ${club.leader}\n` +

        `Members: ${club.members}\n\n` +

        `This verified club can publish events, ` +
        `recruitments and announcements.`

    );

}
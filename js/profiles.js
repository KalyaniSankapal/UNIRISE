function renderProfile() {

    const container =
        document.getElementById(
            "profileContainer"
        );

    if (!container) return;


    const user =
        uniriseData.currentUser;


    container.innerHTML = `

        <div class="profile-card">

            <div class="profile-cover"></div>


            <div class="profile-main">

                <div class="profile-avatar">
                    ${user.name.charAt(0)}
                </div>


                <h2>${user.name}</h2>

                <p>
                    ${user.year} •
                    ${user.department}
                </p>


                <div class="profile-tags">

                    ${user.skills.map(
                        skill =>
                        `<span>${skill}</span>`
                    ).join("")}

                </div>


                <div class="profile-actions">

                    <button
                        class="primary-btn">
                        Edit Profile
                    </button>

                    <button
                        class="secondary-btn">
                        Find Teammates
                    </button>

                </div>

            </div>

        </div>


        <div class="profile-section">

            <h3>Campus Connections</h3>

            <div class="connection-card">

                <div>
                    <strong>
                        Senior Mentors
                    </strong>

                    <p>
                        Connect with seniors who
                        have opted to mentor students.
                    </p>
                </div>

                <button
                    class="secondary-btn">
                    Explore
                </button>

            </div>


            <div class="connection-card">

                <div>
                    <strong>
                        Find Teammates
                    </strong>

                    <p>
                        Find students based on
                        skills and interests.
                    </p>
                </div>

                <button
                    class="secondary-btn">
                    Find
                </button>

            </div>

        </div>

    `;

}
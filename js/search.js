const searchInput =
    document.getElementById("globalSearch");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        handleSearch
    );

}


function handleSearch(event) {

    const query =
        event.target.value
            .toLowerCase()
            .trim();


    const results =
        document.getElementById(
            "searchResults"
        );

    const suggestions =
        document.getElementById(
            "aiSuggestions"
        );


    if (!query) {

        results.innerHTML = "";

        suggestions.innerHTML = `
            <div class="ai-box">

                <strong>
                    ✦ Campus AI Assistant
                </strong>

                <p>
                    Try asking:
                </p>

                <button>
                    Find upcoming hackathons
                </button>

                <button>
                    Find a frontend teammate
                </button>

                <button>
                    Find AI clubs
                </button>

                <button>
                    What did I miss?
                </button>

            </div>
        `;

        return;

    }


    suggestions.innerHTML = `
        <div class="ai-box">

            <strong>
                ✦ AI suggestion
            </strong>

            <p>
                Searching campus opportunities
                related to "${query}"...
            </p>

        </div>
    `;


    const postResults =
        uniriseData.posts.filter(
            post =>
                post.title
                    .toLowerCase()
                    .includes(query) ||

                post.description
                    .toLowerCase()
                    .includes(query) ||

                post.tags.some(
                    tag =>
                        tag.toLowerCase()
                            .includes(query)
                )
        );


    const clubResults =
        uniriseData.clubs.filter(
            club =>
                club.name
                    .toLowerCase()
                    .includes(query)
        );


    results.innerHTML = `

        <h3 class="search-heading">
            Opportunities
        </h3>

        ${postResults.map(
            post => `

            <div class="search-result">

                <span class="search-result-type">
                    ${post.type}
                </span>

                <strong>
                    ${post.title}
                </strong>

                <p>
                    ${post.description}
                </p>

            </div>

        `).join("")}


        <h3 class="search-heading">
            Clubs
        </h3>

        ${clubResults.map(
            club => `

            <div class="search-result">

                <span class="search-result-type">
                    CLUB
                </span>

                <strong>
                    ${club.name}
                </strong>

                <p>
                    ${club.tagline}
                </p>

            </div>

        `).join("")}

    `;

}
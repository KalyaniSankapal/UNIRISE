function renderFeed(category = "all") {

    const container =
        document.getElementById("feedContainer");

    if (!container) return;

    let posts = uniriseData.posts;

    if (category !== "all") {
        posts = posts.filter(
            post => post.type === category
        );
    }

    container.innerHTML = "";

    if (posts.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>No posts yet</h3>
                <p>New campus opportunities will appear here.</p>
            </div>
        `;

        return;
    }


    posts.forEach(post => {

        const card = document.createElement("article");

        card.className = "post-card";

        card.innerHTML = `

            <div class="post-top">

                <div class="avatar">
                    ${post.author.charAt(0)}
                </div>

                <div>
                    <strong>${post.author}</strong>

                    <div class="post-meta">
                        ${post.authorType}
                        ${post.authorType === "club"
                            ? " ✓"
                            : ""}
                    </div>
                </div>

                <span class="post-type">
                    ${post.type}
                </span>

            </div>


            <h3>${post.title}</h3>

            <p>${post.description}</p>


            <div class="post-info">

                <span>📅 ${post.date}</span>

                <span>📍 ${post.location}</span>

            </div>


            <div class="tag-list">

                ${post.tags.map(tag =>
                    `<span>#${tag}</span>`
                ).join("")}

            </div>


            <div class="post-actions">

                <button
                    class="secondary-btn"
                    onclick="viewPost(${post.id})">
                    View Details
                </button>

                <button
                    class="primary-btn"
                    onclick="postAction('${post.link}')">
                    ${post.action}
                </button>

            </div>
        `;

        container.appendChild(card);

    });

}


function viewPost(id) {

    const post =
        uniriseData.posts.find(
            item => item.id === id
        );

    if (!post) return;

    alert(
        `${post.title}\n\n` +
        `${post.description}\n\n` +
        `Date: ${post.date}\n` +
        `Location: ${post.location}`
    );

}


function postAction(link) {

    if (link && link !== "#") {
        window.open(link, "_blank");
    } else {

        alert(
            "Registration/Application link will open here."
        );

    }

}


function createNewPost(post) {

    const newPost = {

        id: Date.now(),

        author:
            uniriseData.currentUser.name,

        authorType:
            uniriseData.currentUser.role,

        title: post.title,

        description:
            post.description,

        type: post.type,

        date: "Posted just now",

        location: "Campus",

        tags: [post.type],

        action:
            post.type === "internship"
                ? "Apply Now"
                : "View Details",

        link: post.link

    };


    uniriseData.posts.unshift(newPost);

    localStorage.setItem(
        "unirisePosts",
        JSON.stringify(uniriseData.posts)
    );

    renderFeed("all");

}
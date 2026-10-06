function renderCommunication(type = "open") {

    const container =
        document.getElementById(
            "communicationContainer"
        );

    if (!container) return;


    if (type === "open") {

        container.innerHTML = `

            <div class="chat-panel">

                <div class="chat-header">
                    <div class="avatar">U</div>

                    <div>
                        <strong>Open Campus</strong>
                        <small>
                            Public campus conversation
                        </small>
                    </div>
                </div>


                <div class="messages">

                    <div class="message received">

                        <strong>Ananya</strong>

                        Does anyone have teammates
                        for the AI hackathon?

                        <span>10:32 AM</span>

                    </div>


                    <div class="message sent">

                        I am looking for a
                        frontend teammate too!

                        <span>10:35 AM</span>

                    </div>


                    <div class="message received">

                        Let's connect after class.

                        <span>10:36 AM</span>

                    </div>

                </div>


                <div class="message-input">

                    <input
                        placeholder="Write a message..."
                    >

                    <button>➤</button>

                </div>

            </div>

        `;

        return;
    }


    if (type === "groups") {

        container.innerHTML = `

            <div class="conversation-list">

                ${uniriseData.groups.map(group => `

                    <div class="conversation">

                        <div class="avatar">
                            ${group.name.charAt(0)}
                        </div>

                        <div>

                            <strong>
                                ${group.name}
                            </strong>

                            <small>
                                ${group.members} members
                            </small>

                        </div>

                    </div>

                `).join("")}

            </div>

        `;

        return;
    }


    container.innerHTML = `

        <div class="conversation-list">

            <div class="conversation">

                <div class="avatar">A</div>

                <div>

                    <strong>Ananya Rao</strong>

                    <small>
                        AI Club President
                    </small>

                </div>

            </div>


            <div class="conversation">

                <div class="avatar">R</div>

                <div>

                    <strong>Rahul Patil</strong>

                    <small>
                        Robotics Club
                    </small>

                </div>

            </div>

        </div>

    `;

}


document.addEventListener(
    "click",
    event => {

        const tab =
            event.target.closest(
                ".communication-tab"
            );

        if (!tab) return;

        document
            .querySelectorAll(
                ".communication-tab"
            )
            .forEach(item =>
                item.classList.remove("active")
            );

        tab.classList.add("active");

        renderCommunication(
            tab.dataset.chatType
        );

    }
);
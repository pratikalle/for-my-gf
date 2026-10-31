
const smileButton = document.getElementById("smileButton");
const jokeButton = document.getElementById("jokeButton");
const messageBox = document.getElementById("messageBox");

smileButton.addEventListener("click", async function () {

    messageBox.textContent = "Finding a little happiness for you... 💗";

    try {
        const response = await fetch("/get-message");

        if (!response.ok) {
            throw new Error("Could not fetch message");
        }

        const data = await response.json();

        messageBox.textContent = data.message;

    } catch (error) {
        messageBox.textContent = "Sending you a big hug! ❤️";
        console.error(error);
    }

});

jokeButton.addEventListener("click", async function () {

    messageBox.textContent = "Thinking of a terrible joke... 😂";

    try {
        const response = await fetch("/get-joke");

        if (!response.ok) {
            throw new Error("Could not fetch joke");
        }

        const data = await response.json();

        messageBox.textContent = data.joke;

    } catch (error) {
        messageBox.textContent = "Why are you so cute? That's the joke! ❤️";
        console.error(error);
    }

});

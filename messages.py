import random

messages = [
    "You're my favourite notification. ❤️",
    "If being cute was a crime, you'd be serving a lifetime sentence.",
    "I hope your smile stays forever. 😊",
    "You are someone's favourite person. Mine, obviously!",
    "Sending you unlimited virtual hugs. 🤗",
    "You're prettier than my entire phone gallery.",
    "I don't need Google. I already found what I was searching for. ❤️",
    "Reminder: You are loved, appreciated and slightly annoying. 😂",
    "If I could give you one thing, it would be the ability to see yourself through my eyes.",
    "You make ordinary days feel special."
]

jokes = [
    "Why did the teddy bear say no to dessert? Because it was stuffed! 😂",
    "Are you a magician? Because whenever I see you, everyone else disappears.",
    "What did one volcano say to the other? I lava you! 🌋",
    "Why can't you trust stairs? They're always up to something!",
    "Are you Wi-Fi? Because I'm feeling a connection."
]

def get_random_message():
    return random.choice(messages)

def get_random_joke():
    return random.choice(jokes)
    
import AccentTester from "./../../Assets/Previews/AccentTester.png";
import TypingTester from "./../../Assets/Previews/TypingTester.png";
import ReactionTester from "./../../Assets/Previews/ReactionTester.png";
import CameraTester from "./../../Assets/Previews/CameraTester.png";

export default [
    {
        id: 1,
        name: "Accent tester",
        description: "Let's check your knowlage of russian accents",
        to: "/AccentTester/",
        thumbnail: AccentTester
    },
    {
        id: 2,
        name: "Typing tester",
        description: "Application for testing your typing speed. Supports custom texts",
        to: "/TypingTester/",
        thumbnail: TypingTester
    },
    {
        id: 3,
        name: "Camera tester",
        description: "Check your camera (or use it as a mirror)",
        to: "/CameraTester/",
        thumbnail: CameraTester
    },
    {
        id: 4,
        name: "Reaction tester",
        description: "Reaction testing app ¯\\_(ツ)_/¯",
        to: "/ReactionTester/",
        thumbnail: ReactionTester
    }
]
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Tetiana Krupchan",
    role: "QA Engineer",
    company: "Dialog",
    content: "I believe, you are doing a great job! When I'm getting a new story into testing, you have mostly all the answers to my tricky questions and - moreover - the app then behaves as you described :). \n" +
        "Sometimes I look through the PRs to see what unit tests we have for the current feature, and I see a good coverage there. And I have a feeling that current features get much less TBs/ticket re-openings than we had last year, thus I'm more confident in the quality of our app.",
  },
  {
    id: 2,
    name: "Jorien van Rijswijk",
    role: "UX designer",
    company: "Dialog",
    content: "I really enjoyed working together during the hackaton and I think you were a great asset to that team. That came with results as well, because we won 🔥\n" +
        "I noticed that at the start you were not a fan of the change from requirements to acceptance criteria. I thought it was good that you communicated that, but it could have been brought a little more subtle I think. Afterwards I think you embraced it more and I saw that you felt more ownership to think along about the features from a user perspective. I think that is very positive and I only saw that happening more and more. 😊",
  },
  {
    id: 3,
    name: "Nicole Boer",
    role: "Product Manager",
    company: "Dialog",
    content: "Hi! I've really noticed how much you've grown over the past few months. You consistently hit your sprint goals and communicate proactively when issues come up, which really helps everything run smoothly.\n" +
        "\n" +
        "I also really appreciate your input on the AI project. I love how quickly things come together. One area I think you could make an even bigger impact is taking a bit more ownership during the sessions to shape the final product. I believe that could really help push the quality even further.\n" +
        "\n" +
        "I've also seen you pairing up with Vitor, and that collaboration seems to be working really well, definitely keep that going! Let's keep up the great work!\"",
  },
  {
    id: 4,
    name: "Mariia Aletdinova",
    role: "QA Engineer",
    company: "Dialog",
    content: "you're doing an good job on the frontend stuff. I've noticed that your attention to detail is really solid. From a testing perspective, it honestly makes my life easier because I rarely find any TB's in your work (which is rare, by the way!) and happy flow is always works",
  },
  {
    id: 5,
    name: "Duarte Vital",
    role: "Backend Developer",
    company: "Dialog",
    content: "Been a pleasure working in AI features with Tatiana. Brainstorming and implementing these feature went pretty smoothly thanks to our consistent teamwork.",
  },
  {
    id: 6,
    name: "Vítor Ferreira",
    role: "Frontend Developer",
    company: "Dialog",
    content: "Great work with the ai feature, looks awesome visually, and I like how the code looks, very easy to work with, simple to read.",
  },
  {
    id: 7,
    name: "Mikuláš van der Horst",
    role: "Fullstack Developer",
    company: "Dialog",
    content: "Hey good luck,\n" +
        "Just wanted to leave some comments, it took some time but I feel like you have made giant leaps in your coding ability since you started at dialog. I think you are improving well towards being a good developer.",
  },
  {
    id: 8,
    name: "Sander Weerdenburg",
    role: "Backend Developer",
    company: "Dialog",
    content: "Good job on bugging me about required backend work for your frontend tickets!",
  },
    {id: 9,
    name: "Jesse Buitenhuis",
    role: "Team lead",
    company: "Dialog",
    content: "I wanted to start with a big compliment. I'm so impressed by your attitude and progress over the last two months! We've had some discussions at the end of August which were not easy, but I'm so happy we (Dialog) are keep working together in the next years! You really listened to the feedback we gave you around contributing more visible towards the company goals & values. Almost every day I see you're contributing, taking initiative and collaborating. Not only within the entire product team, but also outside of it. This is not only coming from me, I also know Ruben sees and experiences this as well.\n" +
        "\n" +
        "One tip: keep being open and honest to the team and especially Anke/Ruben - also when you're not happy with anything. There's room for that and it will only help you and them to grow faster.\n" +
        "\n" +
        "As a developer, you've really grown to the medior role (now updated in Dialog 😎). You are taking on more responsibility, you're open to learning new things and have adopted the new Angular framework and way of working right away. There's ofcourse still room for improvement - how can we improve our frontend code so it becomes easier/faster to make changes? By having some clear ideas around this you can put these on the team agenda / backlog and help the team forward. Tip: use your future new frontend colleague(s) and/or tech lead to discuss this question and learn from them (or inspire them!).\n" +
        "\n" +
        "As a team player you communicate well about progress and obstacles. I got this feedback explicitly from Nicole when she left, she found it very easy to work with you as a product owner. There's still some room for improvement in taking initiative for improvements - for instance during retro's you are usually quite brief, even though I'm sure you must have things that you would like to have improved.\n" +
        "\n" +
        "Lastly - you are an early adopter of AI within the team and are using it quite a lot for coding and technical plans. (And maybe some lines in this evaluation? 😇). Keep it up, and also inspire those around you. Show what you achieve and what helps you!\n" +
        "\n" +
        "I'll keep an eye on the team and I'm looking forward to see you grow even more in the next few years. Have fun!",}
];

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
];

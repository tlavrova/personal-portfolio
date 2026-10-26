export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

// Order matters: only the first 6 are shown before "View more", so the strongest go first.
// Long feedback is trimmed to verbatim excerpts ("…" marks a cut).
export const testimonialsData: Testimonial[] = [
  {
    id: 5,
    name: "Duarte Vital",
    role: "Software Developer",
    company: "Visma Dialog",
    content: "I had the pleasure of working with Tatiana at Dialog. Tatiana is a reliable frontend developer. When something was assigned, I knew it would get done, and done well.\n" +
        "What stood out most was how Tatiana adopted AI-driven development. Some people avoid these tools and others lean on them too much. Tatiana found the balance. AI sped up the work, and the code that shipped was still clean, tested and maintainable.\n" +
        "Any team would be lucky to have Tatiana, and I'd happily work together again.",
  },
  {
    id: 14,
    name: "Martin Campagnoli",
    role: "Senior Frontend Developer",
    company: "Visma Dialog",
    content: "I worked with Tatiana until recently, and I can recommend her as a front-end developer without hesitation. She is highly focused, technically knowledgeable, and delivers quality work. What sets her apart is how well she responds to feedback: she picks it up quickly, applies it thoughtfully, and keeps raising the bar for herself. She's a genuinely great teammate who collaborates easily and makes the people around her better. Her eagerness to learn means she grows fast in any environment. Any team would be lucky to have her, and I'm confident she'll be a strong asset wherever she goes next.",
  },
  {
    id: 16,
    name: "Marco Kamplhuis",
    role: "Backend Developer",
    company: "Visma Dialog",
    content: "I've had the pleasure of working together with Tatiana for roughly 2.5 years. In that time, I've seen her grow from a good developer to a truly outstanding developer. She considers both the fine details and the bigger picture of the tasks she works on, takes ownership of her work and always delivers quality. Being responsible for several Angular version upgrades & migrations of old code, she ensures that the latest standards & best practices are implemented. On a personal level she is kind, honest and never afraid to help out. I learned a lot from her, and I know that any team would be lucky to have her.",
  },
  {
    id: 2,
    name: "Jorien van Rijswijk",
    role: "UX Research & Design",
    company: "Visma Dialog",
    content: "I worked closely with Tatiana for almost 4.5 years, with me as PO and designer. She is a skilled, driven frontend developer who turns ideas into polished, working UI, with a sharp eye for detail and design system quality. A highlight was our hackathon on AI in our product: she was a great asset, which contributed to our team winning. In our process we moved from detailed requirements to acceptance criteria, she was honest about her doubts, then took real ownership and thought along from a user perspective. I saw that grow over time and it makes her a really versatile and valuable developer.",
  },
  {
    id: 15,
    name: "Corne van den Boogert",
    role: "UX/Product Designer",
    company: "Visma Dialog",
    content: "Nobody has made as much progress in six months as Tatiana. I fondly remember delivering my first Design System component when I started at Dialog. She looked at it and said, “That’s so sophisticated!” She doesn’t just inspire the people around her with her humor; she also delivers in high volume with an eye for detail.\n" +
        "\n" +
        "Whenever we worked on different parts of the product, Tatiana was my first review buddy. She has a sharp eye for detail and instantly spots when something is missing from my work.\n" +
        "\n" +
        "Tatiana isn’t afraid to ask the right questions, whether of colleagues or managers. She’s motivated and works hard to get things delivered. She challenged everyone on the product team to deliver high-quality front-end work, and she succeeded.",
  },
  {
    id: 13,
    name: "Mary Wolf",
    role: "Product Owner",
    company: "Visma Dialog",
    content: "I had the pleasure of working with Tatiana at Dialog, where she was a Frontend Engineer growing into a more senior role and expanding her expertise into backend development. Although our collaboration was short, her growth was clearly visible, and her drive and ambition stood out to me.\n" +
        "Tatiana was part of a small team that kicked off the rebuild of one of our modules. There she covered the full scope of full-stack development and worked extensively with AI in her workflow.\n" +
        "\n" +
        "What I value most is her honesty and openness in giving feedback. She knows when to look at things critically and when to raise an issue while staying fully committed to the team’s shared goals.\n" +
        "I can wholeheartedly recommend her to any team.",
  },
  {
    id: 4,
    name: "Mariia Aletdinova",
    role: "QA Engineer",
    company: "Visma Dialog",
    content: "I've noticed that your attention to detail is really solid. From a testing perspective, it honestly makes my life easier because I rarely find any TB's in your work (which is rare, by the way!)",
  },
  {
    id: 1,
    name: "Tetiana Krupchan",
    role: "QA Engineer",
    company: "Visma Dialog",
    content: "When I'm getting a new story into testing, you have mostly all the answers to my tricky questions and - moreover - the app then behaves as you described … I'm more confident in the quality of our app.",
  },
  {
    id: 9,
    name: "Jesse Buitenhuis",
    role: "Team lead",
    company: "Visma Dialog",
    content: "I'm so impressed by your attitude and progress … Almost every day I see you're contributing, taking initiative and collaborating. Not only within the entire product team, but also outside of it. … you're open to learning new things and have adopted the new Angular framework and way of working right away. … you are an early adopter of AI within the team and are using it quite a lot for coding and technical plans.",
  },
  {
    id: 11,
    name: "Mittch van Vliet",
    role: "Product Manager",
    company: "Visma Dialog",
    content: "It's a pleasure working with you. Over the last few months I've noticed you speaking up a lot more. You're asking the right questions, so please keep that up. We need more of that to move faster while keeping an eye on quality.",
  },
  {
    id: 10,
    name: "Łukasz Ambryszewski",
    role: "Backend Developer",
    company: "Visma Dialog",
    content: "I really like how you treat FE and try to make it much better environment. You've done already a lot of hard work with migrating stores and updating Angular. … continue pushing boy scouting rules on reviews … this is really a great rule which you and Martin implemented and you should stick to it.",
  },
  {
    id: 3,
    name: "Nicole Boer",
    role: "Product Manager",
    company: "Visma Dialog",
    content: "You consistently hit your sprint goals and communicate proactively when issues come up, which really helps everything run smoothly. … I love how quickly things come together.",
  },
  {
    id: 6,
    name: "Vítor Ferreira",
    role: "Frontend Developer",
    company: "Visma Dialog",
    content: "Great work with the ai feature, looks awesome visually, and I like how the code looks, very easy to work with, simple to read.",
  },
];

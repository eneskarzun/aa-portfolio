import { About, Blog, Certificate, Home, Newsletter, Person, Social, Portfolio } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aswar",
  lastName: "Anas",
  name: `Aswar Anas`,
  role: "Flutter Developer | Software Engineer",
  avatar: "/images/avatar.JPG",
  email: "aswaranasmyid@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>More discussion with {person.name}</>,
  description: <>Feel free to contact me, I will be a great partner for the success of your business on the technology side, thank you. Have a nice day.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/aswarunnas/?utm_medium=copy_link",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aswar-anas-09b290175/",
  },
  {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.me/6282114821678",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my portfolio as a ${person.role}`,
  headline: <>Aswar Anas</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Flutter Developer</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Software Engineer
        </Text>
      </Row>
    ),
    href: "/portfolio",
  },
  subline: (
    <>
      Hi, I am a Software Engineer with 6+ years experience, specializing in Web App Development, Desktop Development, and Mobile Development using Dart and Flutter, and also Back-End Development using JavaScript and Node.js
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/6282114821678",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        My Expertise:
        <br />
        - Building custom web, desktop, mobile apps: Java, Dart, Flutter.
        <br />
        - Backend: JavaScript, Node.js, Hapi.js, Express.js.
        <br />
        - Database: MongoDB, PostgreSQL, SQLite, MySQL.
        <br />
        - Cloud services: Firebase, AWS, GCP, and others.
        <br />
        - Tools: GIT, GitHub, SSH, VS Code, CI/CD, JWT.
        <br />
        - Other knowledges: Clean Architecture, Test-driven development (TDD).
      </>
    ),
  },
  portfolio: {
    display: true, // set to false to hide this section
    title: "Work Experiences",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Kastamonu Üniversitesi, Turkey",
        description: <>Bachelor's Degree - Computer Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "",
        description: (
          <></>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const portfolio: Portfolio = {
  path: "/portfolio",
  label: "Portfolio",
  title: `Portfolio – ${person.name}`,
  description: `Development by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /portfolio routes
};

const certificate: Certificate = {
  path: "/certificate",
  label: "Certificate",
  title: `Photo certificate – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/certificate/flutter-cert.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/backend-cert.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/google-cert.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/android-cert.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/machine-cert.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/certificate/bdd-cert.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, portfolio, certificate };

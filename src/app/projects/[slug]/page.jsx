import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    id: 1,
    slug: "sport-nest",
    name: "Sport Nest",
    image: "/sportnest.jpg",
    description:
      "A modern car rental platform with booking system and authentication.",
    tech: ["Next.js", "MongoDB", "Express.js"],
    live: "https://sport-nest-ten.vercel.app/",
    github: "https://github.com/nusrat62/sport-nest",
    challenges: ["JWT auth", "Booking system", "State management"],
    future: ["Payment system", "Admin panel"],
  },
  {
    id: 2,
    slug: "qurbani-hat",
    name: "Qurbani Hat",
    image: "/qurbaniHat.jpg",
    description:
      "Full-stack tile gallery app with authentication and profile system.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    live: "https://a8-qurbani-hat.vercel.app/",
    github: "https://github.com/nusrat62/A8-qurbani-hat",
    challenges: ["Auth flow", "Protected routes"],
    future: ["AI features", "Comments system"],
  },
  {
    id: 3,
    slug: "keenkeeper",
    name: "KeenKeeper",
    image: "/keenkeeper.jpg",
    description:
      "Friendship tracker with analytics dashboard.",
    tech: ["Next.js", "Recharts", "Tailwind"],
    live: "https://b13-a7-keen-keeper-ytpl.vercel.app/",
    github: "https://github.com/nusrat62/B13-A7-keen-keeper",
    challenges: ["Chart data sync"],
    future: ["Realtime updates"],
  },
];

export default async function Page({ params }) {
  const { slug } = await params; // ✅ FIX HERE

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="bg-slate-950 text-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-5 lg:px-10">

        <h1 className="text-4xl font-bold mb-6">
          {project.name}
        </h1>

        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <p className="text-slate-300 mb-8">
          {project.description}
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-slate-800 px-3 py-1 rounded-full text-sky-400 text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-2">
          Challenges
        </h2>

        <ul className="list-disc list-inside text-slate-300 mb-8">
          {project.challenges.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">
          Future Plans
        </h2>

        <ul className="list-disc list-inside text-slate-300 mb-10">
          {project.future.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Link
            href={project.live}
            target="_blank"
            className="bg-sky-500 px-5 py-2 rounded-xl"
          >
            Live
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="border border-sky-500 px-5 py-2 rounded-xl"
          >
            GitHub
          </Link>
        </div>

      </div>
    </section>
  );
}
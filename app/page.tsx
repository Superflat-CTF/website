import Image from "next/image";
import { Github, Twitter, Flag, LucideProps } from "lucide-react";
import * as react from "react";

import ctftimeLogo from "../public/ctftime-logo.svg";

const iconMap: Record<
  string,
  react.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>
  >
> = {
  github: Github,
  twitter: Twitter,
  ctftime: Flag,
};

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen text-white p-8">
      {/* Header Section */}
      <header className="text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/superflat-logo-round.svg"
            width={660}
            height={660}
            alt="Superflat logo"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold">WE ARE SUPERFLAT</h1>
        <p className="text-lg mt-2">
          <a
            href="https://ctftime.org/team/274071"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-110"
          >
            {/* CTFtime */}
            <Image
              src={ctftimeLogo}
              alt="CTFtime logo"
              height={30}
              className="inline-block"
            />
          </a>
        </p>
        <p className="text-lg mt-2">
          Dutch CTF team, affiliated with{" "}
          <a href="https://challengethecyber.nl" className="underline">
            Challenge the Cyber
          </a>
        </p>
      </header>

      {/* Team Section */}
      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[#359DD7] p-6 rounded-lg shadow-lg">
            {/* User Avatar */}
            <div className="flex items-center mb-4">
              <img
                src={member.avatar}
                alt={`${member.name}'s avatar`}
                className="rounded-full"
                width={80}
                height={80}
              />
              <h2 className="text-xl font-semibold ml-4">{member.name}</h2>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap mt-2 gap-2">
              {member.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`rounded-full shadow px-3 py-1 text-sm ${
                    skillColors[skill] || "bg-gray-600"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex mt-4">
              {Object.entries(member.socials).map(([key, value], i) => {
                const Icon = iconMap[key];
                return (
                  <a
                    key={i}
                    href={value}
                    className="mr-2 p-2 bg-blue-600 hover:bg-blue-500 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={key}
                  >
                    {Icon ? <Icon size={20} color="white" /> : key}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

type Skill = keyof typeof skillColors;

const skillColors = {
  web: "bg-green-500",
  pwn: "bg-red-500",
  rev: "bg-blue-500",
  "more rev": "bg-purple-500",
  "more web": "bg-yellow-500",
  crypto: "bg-orange-500",
  blockchain: "bg-teal-500",
  misc: "bg-fuchsia-500",
  forensics: "bg-lime-600",
};

// Team Data
const teamMembers: Array<{
  name: string;
  avatar: string;
  skills: Skill[];
  socials: Record<string, string>;
}> = [
  {
    name: "0xJJ8",
    avatar:
      "https://cdn.discordapp.com/avatars/726347933389422614/bc4d1409ed7fa3daa556272ef7f131bf.webp?size=160",
    skills: ["web", "pwn"],
    socials: {
      github: "https://github.com/JJ-8/",
      ctftime: "https://ctftime.org/user/96432",
    },
  },
  {
    name: "rdjgr",
    avatar:
      "https://cdn.discordapp.com/avatars/283322613500215306/f9ae6104ef701b740bab423327df5eda.webp?size=160",
    skills: ["pwn", "rev"],
    socials: {
      github: "https://github.com/RickdeJager",
      twitter: "https://twitter.com/rdjgr",
      ctftime: "https://ctftime.org/user/89503",
    },
  },
  {
    name: "oboembus",
    avatar:
      "https://cdn.discordapp.com/avatars/402119314645319691/b05a3cc1182858ad230f3f645f1511f9.webp?size=160",
    skills: ["blockchain", "pwn"],
    socials: { ctftime: "https://ctftime.org/user/127676" },
  },
  {
    name: "molenzwiebel",
    avatar:
      "https://cdn.discordapp.com/avatars/86540964021161984/a_9ef0f4a8f6f6156b7f9ef3303e1c3e35.webp?size=160",
    skills: ["rev", "more rev"],
    socials: {
      github: "https://github.com/molenzwiebel",
      ctftime: "https://ctftime.org/user/111929",
    },
  },
  {
    name: "j0r1an",
    avatar:
      "https://cdn.discordapp.com/avatars/298743112421867521/38a4846f13d3eafdfc0c33b5b0209370.webp?size=160",
    skills: ["web", "more web", "crypto"],
    socials: {
      github: "https://github.com/JorianWoltjer",
      ctftime: "https://ctftime.org/user/83640",
    },
  },
  {
    name: "TechnologicNick",
    avatar:
      "https://cdn.discordapp.com/avatars/254340017575559178/88947140f708cde0d598e450fa5089da.webp?size=160",
    skills: ["web", "misc"],
    socials: {
      github: "https://github.com/TechnologicNick",
      ctftime: "https://ctftime.org/user/148047",
    },
  },
  {
    name: "delta6862",
    avatar:
      "https://cdn.discordapp.com/avatars/407861521645830144/33b5bb361c2e922795ac32c3b8424040.webp?size=160",
    skills: ["web"],
    socials: {
      github: "https://github.com/delta6862",
    },
  },
  {
    name: "yannik9647",
    avatar:
      "https://cdn.discordapp.com/avatars/186572995848830987/b55c0d4e7bfd792edf0689f83a25d8ea.webp?size=160",
    skills: ["rev", "crypto"],
    socials: {
      github: "https://github.com/kinnay",
    },
  },
  {
    name: "perschrijver",
    avatar:
      "https://cdn.discordapp.com/avatars/267344345949011968/90603ffa05bfc87a335b562804fb90fd.webp?size=160",
    skills: ["crypto"],
    socials: {
      github: "https://github.com/PerSchrijver",
      ctftime: "https://ctftime.org/user/148032",
    },
  },
  {
    name: "m4rk8662",
    avatar:
      "https://cdn.discordapp.com/avatars/673887126458466314/08e818464c860cf704f820cdbee33f1f.webp?size=160",
    skills: ["rev", "forensics"],
    socials: {
      github: "https://github.com/markfijneman",
      ctftime: "https://ctftime.org/user/138561",
    },
  },
];

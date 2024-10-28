import Placeholder1 from "@/assets/nerd-heroes/collection.jpeg";
import Placeholder2 from "@/assets/nerd-heroes/2.jpeg";
import Placeholder3 from "@/assets/nerd-heroes/3.jpeg";
import Placeholder4 from "@/assets/nerd-heroes/4.jpeg";
import Placeholder5 from "@/assets/nerd-heroes/5.jpeg";

export const config: Config = {
  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com/luisvid",
    discord: "https://discord.com",
    homepage: "luisvid.dev.ar",
  },

  defaultCollection: {
    name: "Nerd Heroes",
    description: "Celebrating the power of intellect, each unique Nerd Hero combines tech, wit, and charm in a colorful, cartoon-style NFT collection.",
    image: Placeholder2,
  },

  ourStory: {
    title: "Our Story",
    subTitle: "Nerd Heroes",
    description:
      "Celebrating the power of intellect, each unique Nerd Hero combines tech, wit, and charm in a colorful, cartoon-style NFT collection.",
    discordLink: "https://discord.com",
    images: [Placeholder2, Placeholder3, Placeholder4],
  },

  ourTeam: {
    title: "Our Team",
    members: [
      {
        name: "Luisvid",
        role: "NFT Chef",
        img: Placeholder1,
        socials: {
          twitter: "https://twitter.com/luisvid",
        },
      },
    ],
  },

  faqs: {
    title: "F.A.Q.",

    questions: [
      {
        title: "Id Quis Mollit Est",
        description:
          "Exercitation tempor id ex aute duis laboris dolore est elit fugiat consequat exercitation ullamco. Labore sint laborum anim sunt labore commodo proident adipisicing minim eu duis velit. Est ipsum nisi labore ullamco velit laborum qui in. Fugiat cillum tempor proident occaecat do ipsum Lorem eu labore duis do ex anim. Ullamco incididunt irure officia ex reprehenderit. Voluptate tempor reprehenderit elit exercitation consequat labore ipsum duis reprehenderit. Ex qui aliqua ex aute sunt.",
      },
      {
        title: "Magna Nostrud Eu Nostrud Occaecat",
        description:
          "Et aute duis culpa anim sint pariatur ipsum et irure aliquip eu velit. Aliquip Lorem nostrud adipisicing deserunt sit ut aliqua enim amet velit fugiat cillum quis ut. Tempor consequat adipisicing laborum ut ipsum ut elit ad amet qui Lorem ea commodo culpa. Commodo adipisicing sit sint aute deserunt. Proident enim proident labore. Aliquip minim aliqua proident mollit fugiat ipsum qui duis deserunt ea duis. Deserunt anim incididunt irure commodo sint adipisicing magna dolor excepteur.",
      },
      {
        title: "In Amet Mollit Tempor Dolor Consequat Commodo",
        description:
          "Fugiat fugiat dolor id aute labore esse incididunt. Reprehenderit nostrud ad elit enim occaecat. Sunt non ex veniam officia dolore deserunt consequat. Excepteur voluptate cillum fugiat reprehenderit consequat eu eu amet dolor enim tempor.",
      },
    ],
  },

  nftBanner: [Placeholder2, Placeholder3, Placeholder4, Placeholder5],
};

export interface Config {
  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultCollection?: {
    name: string;
    description: string;
    image: string;
  };

  ourTeam?: {
    title: string;
    members: Array<ConfigTeamMember>;
  };

  ourStory?: {
    title: string;
    subTitle: string;
    description: string;
    discordLink: string;
    images?: Array<string>;
  };

  faqs?: {
    title: string;
    questions: Array<{
      title: string;
      description: string;
    }>;
  };

  nftBanner?: Array<string>;
}

export interface ConfigTeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    twitter?: string;
    discord?: string;
  };
}

const createEpisodes = (episodes) =>
  episodes.map(([title, description, duration], index) => ({
    number: String(index + 1).padStart(2, "0"),
    title,
    description,
    duration,
    video: {
      src: "/videos/example.mp4",
      poster: `/video-posters/${(index % 5) + 1}.jpg`,
    },
  }));

const seasonItems = [
  {
    title: "Season 01",
    subtitle: "9 Episodes",
    episodes: createEpisodes([
      [
        "The Signal in the Static",
        "A late-night radio operator hears a distress call that no one else can detect. By morning, the voice has vanished from every recording.",
        "46 min",
      ],
      [
        "A Map with No Roads",
        "Mara finds a hand-drawn map hidden inside her father's old compass. Its final mark points to a place missing from every modern chart.",
        "51 min",
      ],
      [
        "The Quiet Platform",
        "A deserted train station appears for one minute each night. Theo steps aboard and returns carrying a newspaper dated twenty years ahead.",
        "43 min",
      ],
      [
        "Borrowed Time",
        "The town's clocks stop at the same moment, but one clockmaker keeps counting. His extra minutes reveal a visitor hiding between the hours.",
        "55 min",
      ],
      [
        "Beneath the Glasshouse",
        "Strange lights bloom under an abandoned greenhouse. The team discovers a living network beneath the roots—and something trying to reach the surface.",
        "48 min",
      ],
      [
        "The Names We Forgot",
        "People across town begin forgetting the same three names. Lina searches the library archives before the last written record disappears.",
        "50 min",
      ],
      [
        "A Door in the Rain",
        "During a summer storm, a blue door appears in the alley behind the cinema. On the other side, the rain is falling upward.",
        "44 min",
      ],
      [
        "The Last Broadcast",
        "The mysterious radio signal returns with a warning meant for tomorrow. The friends race to decode it before the town's power goes dark.",
        "58 min",
      ],
      [
        "Where the Light Ends",
        "The group follows the signal to the old observatory and finds a way through. One of them must decide whether to close it forever.",
        "62 min",
      ],
    ]),
  },
  {
    title: "Season 02",
    subtitle: "5 Episodes",
    episodes: createEpisodes([
      [
        "After the Silence",
        "Months after the observatory went dark, a familiar tone returns through the town's emergency speakers. This time, it answers when spoken to.",
        "49 min",
      ],
      [
        "The House on Alder Street",
        "A new family moves into a house that has stood empty for decades. Their daughter sketches places she has never visited.",
        "53 min",
      ],
      [
        "Under the Old Bridge",
        "A missing hiker's camera turns up beneath the river bridge, still recording. The final minutes show the river flowing toward the sky.",
        "47 min",
      ],
      [
        "The Other Side of Morning",
        "Mara wakes to a town where every detail is almost right. To find her way home, she must locate the one person who remembers both worlds.",
        "57 min",
      ],
      [
        "A Promise in the Dark",
        "The friends reunite at the observatory for one last attempt to seal the passage. The signal offers them a bargain they cannot ignore.",
        "64 min",
      ],
    ]),
  },
  {
    title: "Season 03",
    subtitle: "7 Episodes",
    episodes: createEpisodes([
      [
        "The Unmarked Package",
        "A package arrives at the station with no address and a ticking sound inside. Theo recognizes the handwriting on its note.",
        "45 min",
      ],
      [
        "Voices in the Pines",
        "A camping trip takes a turn when the forest begins repeating conversations from the group's past. One voice belongs to someone still missing.",
        "50 min",
      ],
      [
        "The Midnight Archive",
        "Lina discovers a hidden room beneath the library, filled with books that describe events before they happen. A new page appears each night.",
        "52 min",
      ],
      [
        "Seven Minutes Below",
        "A cave expedition reveals a pocket of time that resets every seven minutes. The team has to solve its puzzle before the entrance collapses.",
        "48 min",
      ],
      [
        "The Keeper's Key",
        "The old clockmaker leaves Mara a brass key and a final set of instructions. Every lock it opens leads to a different version of the town.",
        "56 min",
      ],
      [
        "A Sky Full of Signals",
        "Lights appear above the hills in patterns matching the radio code. For the first time, the signal seems to be coming from overhead.",
        "54 min",
      ],
      [
        "The Long Way Home",
        "With the passage widening, the friends follow its trail through places they thought they had left behind. Their choices decide who gets through.",
        "61 min",
      ],
    ]),
  },
];

const withBasePaths = (items) =>
  items.map((season) => ({
    ...season,
    episodes: season.episodes.map((episode) => ({
      ...episode,
      video: {
        ...episode.video,
        src: episode.video.src.startsWith("/")
          ? `${import.meta.env.BASE_URL}${episode.video.src.slice(1)}`
          : episode.video.src,
        poster: episode.video.poster.startsWith("/")
          ? `${import.meta.env.BASE_URL}${episode.video.poster.slice(1)}`
          : episode.video.poster,
      },
    })),
  }));

export default withBasePaths(seasonItems);

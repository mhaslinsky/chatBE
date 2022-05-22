import Namespace from "../classes/NameSpace";
import Room from "../classes/Room";

let namespaces: Namespace[] = [];

let wikiNs = new Namespace(
  0,
  "Warcraft",
  "https://upload.wikimedia.org/wikipedia/commons/e/eb/WoW_icon.svg",
  "/warcraft"
);
let mozNs = new Namespace(
  1,
  "Memes",
  "https://upload.wikimedia.org/wikipedia/commons/8/83/Noto_Emoji_Pie_1f60e.svg",
  "/memes"
);
let linuxNs = new Namespace(
  2,
  "Politics",
  "https://www.svgrepo.com/show/293777/politics.svg",
  "/politics"
);

wikiNs.addRoom(new Room(0, "General", false, "Warcraft"));
wikiNs.addRoom(new Room(1, "Theorycrafting", false, "Warcraft"));
wikiNs.addRoom(new Room(2, "News", false, "Warcraft"));

mozNs.addRoom(new Room(0, "General", false, "Memes"));
mozNs.addRoom(new Room(1, "Fresh Memes", false, "Memes"));
mozNs.addRoom(new Room(2, "Old", false, "Memes"));
mozNs.addRoom(new Room(3, "Rehab", false, "Memes"));

linuxNs.addRoom(new Room(0, "Breaking", false, "Politics"));
linuxNs.addRoom(new Room(1, "Dems", false, "Politics"));
linuxNs.addRoom(new Room(2, "GOP", false, "Politics"));

namespaces.push(wikiNs, mozNs, linuxNs);

export default namespaces;

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

wikiNs.addRoom(new Room(0, "General", false, "Wiki"));
wikiNs.addRoom(new Room(1, "Theorycrafting", false, "Wiki"));
wikiNs.addRoom(new Room(2, "News", false, "Wiki"));

mozNs.addRoom(new Room(0, "General", false, "Mozilla"));
mozNs.addRoom(new Room(1, "Fresh Memes", false, "Mozilla"));
mozNs.addRoom(new Room(2, "Old", false, "Mozilla"));
mozNs.addRoom(new Room(3, "Rehab", false, "Mozilla"));

linuxNs.addRoom(new Room(0, "Breaking", false, "Linux"));
linuxNs.addRoom(new Room(0, "Dems", false, "Linux"));
linuxNs.addRoom(new Room(0, "GOP", false, "Linux"));

namespaces.push(wikiNs, mozNs, linuxNs);

export default namespaces;

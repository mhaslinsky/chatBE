import Namespace from "../classes/NameSpace";
import Room from "../classes/Room";

let namespaces: Namespace[] = [];

let wikiNs = new Namespace(
  0,
  "Wiki",
  "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tango_style_Wikipedia_Icon.svg",
  "/wiki"
);
let mozNs = new Namespace(
  1,
  "Mozilla",
  "https://upload.wikimedia.org/wikipedia/commons/7/76/Mozilla_Firefox_logo_2013.svg",
  "/mozilla"
);
let linuxNs = new Namespace(
  2,
  "Linux",
  "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
  "/linux"
);

wikiNs.addRoom(new Room(0, "New Articles", false, "Wiki"));
wikiNs.addRoom(new Room(1, "Editors", false, "Wiki"));
wikiNs.addRoom(new Room(2, "Other", false, "Wiki"));

mozNs.addRoom(new Room(0, "Firefox", false, "Mozilla"));
mozNs.addRoom(new Room(1, "SeaMonkey", false, "Mozilla"));
mozNs.addRoom(new Room(2, "SpiderMonkey", false, "Mozilla"));
mozNs.addRoom(new Room(3, "Rust", false, "Mozilla"));

linuxNs.addRoom(new Room(0, "Debian", false, "Linux"));
linuxNs.addRoom(new Room(0, "Red Hat", false, "Linux"));
linuxNs.addRoom(new Room(0, "MacOS", false, "Linux"));

namespaces.push(wikiNs, mozNs, linuxNs);

export default namespaces;

export default class Room {
  roomId: number;
  roomTitle: string;
  privateRoom: boolean;
  history: any[];
  namespace?: string;
  constructor(
    roomId: number,
    roomTitle: string,
    privateRoom = false,
    namespace?: string
  ) {
    this.roomId = roomId;
    this.roomTitle = roomTitle;
    this.privateRoom = privateRoom;
    this.history = [];
    this.namespace = namespace;
  }
  addMessage(message: string) {
    this.history.push(message);
  }
  clearHistory() {
    this.history = [];
  }
}

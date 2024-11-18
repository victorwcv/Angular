interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author:string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015
  }
}

const {details:{ author: value }} = audioPlayer;

console.log(value);

// ----------------------------------------------------------------------------

type Characters = string[];

const characters: Characters = [
  "Trunks",
  "Goku",
  "Vegueta",
]

const [,,vegueta] = characters

console.log(vegueta);

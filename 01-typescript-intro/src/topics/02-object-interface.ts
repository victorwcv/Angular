const skills: string[] = ["bash", "counter", "healing"];

console.log(skills)


interface Character {
  name: string;
  hp: number;
  skills: string[];
  homeTown?: string;
}


const strider: Character = {
  name: 'strider',
  hp: 180,
  skills: ['bash', 'counter']
}

console.table(strider)
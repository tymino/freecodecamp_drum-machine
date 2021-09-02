interface IBank {
  keyCode: number;
  keyTrigger: string;
  id: string;
  url: string;
}

interface IData {
  title: string;
  bank: IBank[];
}

interface IAudio {
  title: string;
  audio: HTMLAudioElement;
}

export type { IBank, IData, IAudio };

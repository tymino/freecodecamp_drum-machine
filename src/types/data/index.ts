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

export type { IBank, IData };

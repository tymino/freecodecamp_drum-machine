import { IOptionsAction } from '../actions/options';
import { IBank, IDrumsAction } from '../actions/drums';

interface IButtonProps {
  bank: IBank;
  togglePower: boolean;
  volume: number;
  dispatch: React.Dispatch<IDrumsAction | IOptionsAction>;
}

interface IToggleProps {
  name: string;
  checked: boolean;
  dispatch: React.Dispatch<IOptionsAction>;
  action: () => IOptionsAction;
}

interface IDisplayProps {
  display: string;
  dispatch: React.Dispatch<IOptionsAction>;
}

interface IRangeProps {
  volume: number;
  dispatch: React.Dispatch<IOptionsAction>;
}

export type { IButtonProps, IToggleProps, IDisplayProps, IRangeProps };

import { IDrumsAction } from '../../types/actions/drums';
import { ActionNameForDrums } from '../../types/enums/index';

const setDrums = (): IDrumsAction => ({
  type: ActionNameForDrums.SET_DRUMS,
});

export { setDrums };

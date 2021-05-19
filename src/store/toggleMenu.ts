export const CHANGE_TOGGLE = "service/CHANGE_TOGGLE" as const;

export const changeToggle = () => ({ type: CHANGE_TOGGLE });

type ToggleAction = ReturnType<typeof changeToggle>;

interface IMenuState {
  isToggle: boolean;
}

const initialState: IMenuState = {
  isToggle: false,
};

export default function toggle(
  state: IMenuState = initialState,
  action: ToggleAction
): IMenuState {
  switch (action.type) {
    case CHANGE_TOGGLE:
      return { isToggle: !state.isToggle };

    default:
      return state;
  }
}

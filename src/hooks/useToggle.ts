import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function useToggle() {
  const toggleMenu = useSelector((state: RootState) => state.toggleMenu);
  return toggleMenu;
}

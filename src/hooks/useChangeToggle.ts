import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { changeToggle } from "../store/toggleMenu";

export default function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(changeToggle()), [dispatch]);
}

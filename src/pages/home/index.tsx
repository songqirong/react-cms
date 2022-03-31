import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { insert_count } from "src/store/home/reducer";

export const HomePage: FC = () => {
  const dispatch = useDispatch();
  const count: any = useSelector((state: RootState) => state.home.count_box.count);
  const insert_count_handle = () => {
    dispatch(insert_count())
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={ insert_count_handle }>
        增加
      </button>
    </div>
  )
}
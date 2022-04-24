import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from 'src/components/Page';
import { RootState } from 'src/store';
import { insert_count } from 'src/store/home/reducer';
import { Button } from 'antd';

export const HomePage: FC = () => {
  const dispatch = useDispatch();
  const count: any = useSelector((state: RootState) => state.home.count_box.count);
  const insert_count_handle = () => {
    dispatch(insert_count());
  };
  return (
    <Page title='home' description='homepage'>
      <div>{count}</div>
      <Button onClick={ insert_count_handle } type="primary">
        增加
      </Button>
    </Page>
  );
};

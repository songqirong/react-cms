import { Empty } from 'antd';
import React, { FC } from 'react';
import { Page } from 'src/components/Page';
import './index.scss';

export const PageNotFound: FC = (props) => {
  const pageNotFoundText = '404 - Page Not Found';
  return <Page title={pageNotFoundText} description={pageNotFoundText} keywords={pageNotFoundText}>
    <div className='page_not_found'>
      <Empty description={pageNotFoundText} />
    </div>
  </Page>;
};

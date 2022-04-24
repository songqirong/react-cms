import React, { FC, ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { app } from 'src/common/constants';
import { LayoutContainer } from '../LayoutContainer';
import './index.scss';
interface IProps{
  description: string;
  elements?: ReactNode;
  keywords?: string;
  title: string;
}

export const Page: FC<IProps> = (props) => {
  const { description, keywords, elements, title, children } = props;
  return (
    <HelmetProvider>
      <Helmet defaultTitle={app.name} titleTemplate={`${app.name} | %s`} >
        <meta name='description' content={description} />
        {keywords && <meta name='keywords' content={keywords} />}
        <title>{title}</title>
        {elements}
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

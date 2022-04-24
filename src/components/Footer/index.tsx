import React, { FC } from 'react';
import { app } from 'src/common/constants';
import { LayoutContainer } from '../LayoutContainer';

export const Footer = () => <div>
  Copyright &#xA9; {`${new Date().getFullYear()} ${app.name}`}
</div>;

import React, { FC } from 'react';
interface IProps{
  Tag?: keyof JSX.IntrinsicElements;
  role?: string;
  className?: string;
}

export const LayoutContainer: FC<IProps> = (props) => {
  const { Tag = 'div', children, role, className } = props;
  return (
    <Tag role={ role } className={className}>
      { children }
    </Tag>
  );
};

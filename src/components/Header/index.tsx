import { Col, Row } from 'antd';
import React, { FC } from 'react';
export const Header: FC = (props) => (
  <Row gutter={24}>
    <Col offset={18} span={4}>
      { props.children }
    </Col>
  </Row>
);

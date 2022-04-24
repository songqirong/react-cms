import React, { Component, ErrorInfo, ReactNode } from 'react';
import { LayoutContainer } from '../LayoutContainer';

interface IProps{
  children: ReactNode
}

interface IState{
  hasError: boolean
}

export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, 'error');
    console.log(errorInfo, 'errorInfo');
  }

  static getDrivedStateFromError(error: Error) {
    console.log(error, 'from error');
    return {
      hasError: true,
    };
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    return (
      hasError ? <LayoutContainer role="alert">
        <p> There was an error </p>
      </LayoutContainer> : children
    );
  }
}

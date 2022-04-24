import React, { FC, Suspense } from 'react';
import { ErrorBoundary } from '../ErrorBoundary';
import { Loading } from '../Loading';

export const ErrorBoundarySuspense: FC = (props) => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>{props.children}</Suspense>
  </ErrorBoundary>
);

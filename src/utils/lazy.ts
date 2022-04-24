import { lazy, FC, LazyExoticComponent } from 'react';

interface IProps{
  name: string;
  importer: Promise<Record<string, FC>>
}

export const LazyComponent = (name: string, importer: Promise<Record<string, any>>): LazyExoticComponent<FC> => lazy(async() => {
  const component = await importer;
  return { default: component[name] };
});

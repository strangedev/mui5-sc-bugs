import { Theme } from '@material-ui/core';
import { withTheme } from '@material-ui/styled-engine';
import { FunctionComponent, ReactElement } from 'react';

const WithTheme: FunctionComponent<{ theme: Theme }> = function ({ theme }): ReactElement {
  return (
    <span>Here&apos;s a color for you: { theme.custom.pink }</span>
  );
};

const WrappedWithTheme = withTheme(WithTheme);

export {
  WrappedWithTheme as WithTheme
}
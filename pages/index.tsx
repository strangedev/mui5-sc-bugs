import { Fragment } from 'react';
import { PinkText } from '../src/components/PinkText'
import { WithTheme } from '../src/components/WithTheme';

export default function Home() {
  return (
    <Fragment>
      <WithTheme/>
      <PinkText>I&apos;m pink!</PinkText>
    </Fragment>
  )
}

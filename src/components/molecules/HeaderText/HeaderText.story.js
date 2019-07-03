import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';


import HeaderText from './HeaderText';

storiesOf('HeaderText', module)
  .add('show HeaderText', () => <HeaderText/>)


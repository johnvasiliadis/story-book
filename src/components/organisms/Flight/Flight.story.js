import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';


import { Button, Welcome } from '@storybook/react/demo';
import Flight from './Flight';

storiesOf('Flight', module)
  .add('show Flight List', () => <Flight />)


import React from 'react';

import {
  storiesOf,
  addParameters, addDecorator
} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {
  withKnobs,
  text,
  boolean,
  number
} from '@storybook/addon-knobs';
import {
  withA11y
} from '@storybook/addon-a11y';


import { Button, Welcome } from '@storybook/react/demo';

//agregamos el componente que deseamo agregarle la historia
import Tabs from '../Tabs';

addDecorator(withKnobs);
addDecorator(withA11y);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
storiesOf('Tabs', module)
  .add('two tabs', () => (
    <Tabs tabsId = "First-Tab-Example" >
      < div tabId = "Tab-1"
      label = {
        text('Tab Name1', 'Tab 1')
      } >
      {text('Tab Content 1','tab content 1')}
      </div>
      <div tabId = "Tab2" label = "Tab 2" >
        tab content 2
      </div>
    </Tabs>
  ),
  { notes: 'tabs con solo dos pestañas'})
  .add('three tabs', () =>
     (
      <Tabs tabsId = "First-Tab-Example" >
        <div tabId = "Tab-1" label = "Tab 1" >
          tab content 1
        </div>
        <div tabId = "Tab2" label = "Tab 2" >
          tab content 2
        </div>
        <div tabId = "Tab3" label = "Tab 3 with title bigger" >
          tab content 3
        </div>
      </Tabs>
    ),
    { notes: 'tabs con solo 3 pestañas'}
  );

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

//agregamos el componente que deseamo agregarle la historia
import Tabs from '../Tabs';

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
  .add('two tabs', () => { return (
    <Tabs tabsId = "First-Tab-Example" >
      <div tabId = "Tab-1" label = "Tab 1" >
      tab content 1
      </div>
      <div tabId = "Tab2" label = "Tab 2" >
        tab content 2
      </div>
    </Tabs>
  )})
  .add('three tabs', () => {
    return (
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
    )
  });

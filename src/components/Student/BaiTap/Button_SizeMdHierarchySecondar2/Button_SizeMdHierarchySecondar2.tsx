import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Plus } from '../Plus/Plus.js';
import classes from './Button_SizeMdHierarchySecondar2.module.css';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
    plus?: string;
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 3287:427323 */
export const Button_SizeMdHierarchySecondar2: FC<Props> = memo(function Button_SizeMdHierarchySecondar2(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Plus className={props.classes?.plus || ''} classes={{ icon: props.classes?.icon || '' }} />
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Button CTA</div>}
    </button>
  );
});

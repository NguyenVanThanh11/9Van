import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Plus } from '../Plus/Plus.js';
import classes from './Button_SizeMdHierarchySecondar2.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 3287:427323 */
export const Button_SizeMdHierarchySecondar2: FC<Props> = memo(function Button_SizeMdHierarchySecondar2(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <Plus />
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Button CTA</div>}
    </button>
  );
});

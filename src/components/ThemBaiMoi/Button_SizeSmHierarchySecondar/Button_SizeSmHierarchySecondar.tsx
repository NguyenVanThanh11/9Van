import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_SizeSmHierarchySecondar.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 3287:429435 */
export const Button_SizeSmHierarchySecondar: FC<Props> = memo(function Button_SizeSmHierarchySecondar(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Button CTA</div>}
    </button>
  );
});

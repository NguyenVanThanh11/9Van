import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_TabButtonBase_CurrentTrueSize.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1118:69552 */
export const _TabButtonBase_CurrentTrueSize: FC<Props> = memo(function _TabButtonBase_CurrentTrueSize(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>My details</div>}
    </button>
  );
});

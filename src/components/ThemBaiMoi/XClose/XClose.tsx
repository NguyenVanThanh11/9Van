import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './XClose.module.css';
import { XCloseIcon } from './XCloseIcon.js';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:405165 */
export const XClose: FC<Props> = memo(function XClose(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icon || ''} ${classes.icon}`}>
        {props.swap?.icon || <XCloseIcon className={classes.icon2} />}
      </div>
    </div>
  );
});

import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CheckCircle.module.css';
import { CheckCircleIcon } from './CheckCircleIcon.js';

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
/* @figmaId 3463:404967 */
export const CheckCircle: FC<Props> = memo(function CheckCircle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icon || ''} ${classes.icon}`}>
        {props.swap?.icon || <CheckCircleIcon className={classes.icon2} />}
      </div>
    </div>
  );
});

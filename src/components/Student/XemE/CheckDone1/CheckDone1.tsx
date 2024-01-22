import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CheckDone1.module.css';
import { CheckDone1Icon } from './CheckDone1Icon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:404973 */
export const CheckDone1: FC<Props> = memo(function CheckDone1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <CheckDone1Icon className={classes.icon2} />}</div>
    </div>
  );
});

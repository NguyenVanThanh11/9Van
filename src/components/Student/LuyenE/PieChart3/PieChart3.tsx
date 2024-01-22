import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './PieChart3.module.css';
import { PieChart3Icon } from './PieChart3Icon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:403971 */
export const PieChart3: FC<Props> = memo(function PieChart3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <PieChart3Icon className={classes.icon2} />}</div>
    </div>
  );
});

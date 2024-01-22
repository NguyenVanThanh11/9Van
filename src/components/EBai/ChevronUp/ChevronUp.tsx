import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ChevronUp.module.css';
import { ChevronUpIcon } from './ChevronUpIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:404557 */
export const ChevronUp: FC<Props> = memo(function ChevronUp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <ChevronUpIcon className={classes.icon2} />}</div>
    </div>
  );
});

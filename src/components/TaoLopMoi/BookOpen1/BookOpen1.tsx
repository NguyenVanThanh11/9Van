import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BookOpen1.module.css';
import { BookOpen1Icon } from './BookOpen1Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:404150 */
export const BookOpen1: FC<Props> = memo(function BookOpen1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <BookOpen1Icon className={classes.icon2} />}</div>
    </div>
  );
});

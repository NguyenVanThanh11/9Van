import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Adjuster_TypeWidth.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 6078:63643 */
export const Adjuster_TypeWidth: FC<Props> = memo(function Adjuster_TypeWidth(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ignore}></div>
      <div className={classes.ignore2}></div>
    </div>
  );
});

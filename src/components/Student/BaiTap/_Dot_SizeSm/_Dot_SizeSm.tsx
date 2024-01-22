import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_Dot_SizeSm.module.css';
import { DotIcon } from './DotIcon.js';

interface Props {
  className?: string;
  classes?: {
    dot?: string;
    root?: string;
  };
}
/* @figmaId 1046:12311 */
export const _Dot_SizeSm: FC<Props> = memo(function _Dot_SizeSm(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.dot || ''} ${classes.dot}`}>
        <DotIcon className={classes.icon} />
      </div>
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_VideoProgress_PlayingFalse.module.css';
import { PlayIcon } from './PlayIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1113:1512 */
export const _VideoProgress_PlayingFalse: FC<Props> = memo(function _VideoProgress_PlayingFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.background}></div>
      <div className={classes.buffering}>
        <div className={classes.bufferingProgress}></div>
      </div>
      <div className={classes.progressLine}></div>
      <div className={classes.play}>
        <PlayIcon className={classes.icon} />
      </div>
    </div>
  );
});

import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar_SizeMdPlaceholderFalseT2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 19:1256 */
export const Avatar_SizeMdPlaceholderFalseT2: FC<Props> = memo(function Avatar_SizeMdPlaceholderFalseT2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>OR</div>}
    </div>
  );
});

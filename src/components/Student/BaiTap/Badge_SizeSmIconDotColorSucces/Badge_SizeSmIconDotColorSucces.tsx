import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _Dot_SizeSm } from '../_Dot_SizeSm/_Dot_SizeSm.js';
import classes from './Badge_SizeSmIconDotColorSucces.module.css';

interface Props {
  className?: string;
  classes?: {
    dot?: string;
    _Dot?: string;
    root?: string;
  };
  hide?: {
    _Dot?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1046:4845 */
export const Badge_SizeSmIconDotColorSucces: FC<Props> = memo(function Badge_SizeSmIconDotColorSucces(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?._Dot && (
        <_Dot_SizeSm className={props.classes?._Dot || ''} classes={{ dot: props.classes?.dot || '' }} />
      )}
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Label</div>}
    </div>
  );
});

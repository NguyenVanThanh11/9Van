import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Badge_SizeSmIconFalseColorGray.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1046:4173 */
export const Badge_SizeSmIconFalseColorGray: FC<Props> = memo(function Badge_SizeSmIconFalseColorGray(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Label</div>}
    </div>
  );
});

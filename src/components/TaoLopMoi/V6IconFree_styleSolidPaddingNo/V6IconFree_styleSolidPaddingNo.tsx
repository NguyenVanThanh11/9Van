import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './V6IconFree_styleSolidPaddingNo.module.css';

interface Props {
  className?: string;
  text?: {
    icon?: ReactNode;
  };
}
/* @figmaId 5971:27654 */
export const V6IconFree_styleSolidPaddingNo: FC<Props> = memo(function V6IconFree_styleSolidPaddingNo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.icon != null ? props.text?.icon : <div className={classes.icon}>smile</div>}
    </div>
  );
});

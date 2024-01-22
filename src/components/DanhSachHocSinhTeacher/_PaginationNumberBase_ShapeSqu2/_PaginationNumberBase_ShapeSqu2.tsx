import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_PaginationNumberBase_ShapeSqu2.module.css';

interface Props {
  className?: string;
  text?: {
    number?: ReactNode;
  };
}
/* @figmaId 1114:68173 */
export const _PaginationNumberBase_ShapeSqu2: FC<Props> = memo(function _PaginationNumberBase_ShapeSqu2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.content}>
        {props.text?.number != null ? props.text?.number : <div className={classes.number}>1</div>}
      </div>
    </div>
  );
});

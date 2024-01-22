import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_PaginationNumberBase_ShapeSqu2.module.css';

interface Props {
  className?: string;
  classes?: {
    content?: string;
    root?: string;
  };
  text?: {
    number?: ReactNode;
  };
}
/* @figmaId 1114:68173 */
export const _PaginationNumberBase_ShapeSqu2: FC<Props> = memo(function _PaginationNumberBase_ShapeSqu2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.content || ''} ${classes.content}`}>
        {props.text?.number != null ? props.text?.number : <div className={classes.number}>1</div>}
      </div>
    </div>
  );
});

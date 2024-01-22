import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_PaginationNumberBase_ShapeSqu.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1114:68175 */
export const _PaginationNumberBase_ShapeSqu: FC<Props> = memo(function _PaginationNumberBase_ShapeSqu(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.content}>
        <div className={classes.number}>1</div>
      </div>
    </div>
  );
});

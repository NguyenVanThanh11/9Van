import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _PaginationNumberBase_ShapeSqu2 } from '../_PaginationNumberBase_ShapeSqu2/_PaginationNumberBase_ShapeSqu2.js';
import { _PaginationNumberBase_ShapeSqu } from '../_PaginationNumberBase_ShapeSqu/_PaginationNumberBase_ShapeSqu.js';
import { Button_SizeSmHierarchySecondar } from '../Button_SizeSmHierarchySecondar/Button_SizeSmHierarchySecondar.js';
import classes from './Pagination_TypeCardDefaultShap.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
    text2?: ReactNode;
  };
}
/* @figmaId 226:158 */
export const Pagination_TypeCardDefaultShap: FC<Props> = memo(function Pagination_TypeCardDefaultShap(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Button_SizeSmHierarchySecondar
        text={{
          text: props.text?.text || <div className={classes.text}>Previous</div>,
        }}
      />
      <div className={classes.paginationNumbers}>
        <_PaginationNumberBase_ShapeSqu />
        <_PaginationNumberBase_ShapeSqu2
          text={{
            number: <div className={classes.number}>2</div>,
          }}
        />
        <_PaginationNumberBase_ShapeSqu2
          text={{
            number: <div className={classes.number2}>3</div>,
          }}
        />
        <_PaginationNumberBase_ShapeSqu2
          text={{
            number: <div className={classes.number3}>...</div>,
          }}
        />
        <_PaginationNumberBase_ShapeSqu2
          text={{
            number: <div className={classes.number4}>8</div>,
          }}
        />
        <_PaginationNumberBase_ShapeSqu2
          text={{
            number: <div className={classes.number5}>9</div>,
          }}
        />
        <_PaginationNumberBase_ShapeSqu2
          text={{
            number: <div className={classes.number6}>10</div>,
          }}
        />
      </div>
      <Button_SizeSmHierarchySecondar
        text={{
          text: props.text?.text2 || <div className={classes.text2}>Next</div>,
        }}
      />
    </div>
  );
});

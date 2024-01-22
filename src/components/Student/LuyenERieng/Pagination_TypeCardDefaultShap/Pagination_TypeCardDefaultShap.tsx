import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _PaginationNumberBase_ShapeSqu2 } from '../_PaginationNumberBase_ShapeSqu2/_PaginationNumberBase_ShapeSqu2.js';
import { _PaginationNumberBase_ShapeSqu } from '../_PaginationNumberBase_ShapeSqu/_PaginationNumberBase_ShapeSqu.js';
import { Button_SizeSmHierarchySecondar } from '../Button_SizeSmHierarchySecondar/Button_SizeSmHierarchySecondar.js';
import classes from './Pagination_TypeCardDefaultShap.module.css';

interface Props {
  className?: string;
  classes?: {
    button?: string;
    content?: string;
    _PaginationNumberBase?: string;
    content2?: string;
    _PaginationNumberBase2?: string;
    content3?: string;
    _PaginationNumberBase3?: string;
    content4?: string;
    _PaginationNumberBase4?: string;
    content5?: string;
    _PaginationNumberBase5?: string;
    content6?: string;
    _PaginationNumberBase6?: string;
    content7?: string;
    _PaginationNumberBase7?: string;
    paginationNumbers?: string;
    button2?: string;
    root?: string;
  };
  text?: {
    text?: ReactNode;
    text2?: ReactNode;
  };
}
/* @figmaId 226:158 */
export const Pagination_TypeCardDefaultShap: FC<Props> = memo(function Pagination_TypeCardDefaultShap(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Button_SizeSmHierarchySecondar
        className={props.classes?.button || ''}
        text={{
          text: props.text?.text || <div className={classes.text}>Previous</div>,
        }}
      />
      <div className={`${props.classes?.paginationNumbers || ''} ${classes.paginationNumbers}`}>
        <_PaginationNumberBase_ShapeSqu
          className={props.classes?._PaginationNumberBase || ''}
          classes={{ content: props.classes?.content || '' }}
        />
        <_PaginationNumberBase_ShapeSqu2
          className={props.classes?._PaginationNumberBase2 || ''}
          classes={{ content: props.classes?.content2 || '' }}
          text={{
            number: <div className={classes.number}>2</div>,
          }}
        />
        <_PaginationNumberBase_ShapeSqu2
          className={props.classes?._PaginationNumberBase3 || ''}
          classes={{ content: props.classes?.content3 || '' }}
          text={{
            number: <div className={classes.number2}>3</div>,
          }}
        />
        <_PaginationNumberBase_ShapeSqu2
          className={props.classes?._PaginationNumberBase4 || ''}
          classes={{ content: props.classes?.content4 || '' }}
          text={{
            number: <div className={classes.number3}>...</div>,
          }}
        />
        <_PaginationNumberBase_ShapeSqu2
          className={props.classes?._PaginationNumberBase5 || ''}
          classes={{ content: props.classes?.content5 || '' }}
          text={{
            number: <div className={classes.number4}>8</div>,
          }}
        />
        <_PaginationNumberBase_ShapeSqu2
          className={props.classes?._PaginationNumberBase6 || ''}
          classes={{ content: props.classes?.content6 || '' }}
          text={{
            number: <div className={classes.number5}>9</div>,
          }}
        />
        <_PaginationNumberBase_ShapeSqu2
          className={props.classes?._PaginationNumberBase7 || ''}
          classes={{ content: props.classes?.content7 || '' }}
          text={{
            number: <div className={classes.number6}>10</div>,
          }}
        />
      </div>
      <Button_SizeSmHierarchySecondar
        className={props.classes?.button2 || ''}
        text={{
          text: props.text?.text2 || <div className={classes.text2}>Next</div>,
        }}
      />
    </div>
  );
});

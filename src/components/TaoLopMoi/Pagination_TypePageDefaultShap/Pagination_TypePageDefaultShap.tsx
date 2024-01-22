import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ArrowLeft } from '../ArrowLeft/ArrowLeft.js';
import { ArrowRight } from '../ArrowRight/ArrowRight.js';
import { Button_SizeSmHierarchySecondar } from '../Button_SizeSmHierarchySecondar/Button_SizeSmHierarchySecondar.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { ArrowRightIcon } from './ArrowRightIcon.js';
import classes from './Pagination_TypePageDefaultShap.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    details?: ReactNode;
  };
}
/* @figmaId 226:413 */
export const Pagination_TypePageDefaultShap: FC<Props> = memo(function Pagination_TypePageDefaultShap(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Button_SizeSmHierarchySecondar
        swap={{
          placeholder: (
            <ArrowLeft
              className={classes.arrowLeft}
              swap={{
                icon: <ArrowLeftIcon className={classes.icon} />,
              }}
            />
          ),
        }}
      />
      {props.text?.details != null ? (
        props.text?.details
      ) : (
        <div className={classes.details}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Page </span>
            <span className={classes.label2}>1</span>
            <span className={classes.label3}> of </span>
            <span className={classes.label4}>10</span>
          </p>
        </div>
      )}
      <Button_SizeSmHierarchySecondar
        swap={{
          placeholder: (
            <ArrowRight
              className={classes.arrowRight}
              swap={{
                icon: <ArrowRightIcon className={classes.icon2} />,
              }}
            />
          ),
        }}
      />
    </div>
  );
});

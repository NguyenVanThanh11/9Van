import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { V6IconFree_styleSolidPaddingNo } from '../V6IconFree_styleSolidPaddingNo/V6IconFree_styleSolidPaddingNo.js';
import classes from './InfoProduct_typeCard.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    icon?: ReactNode;
    lesson6?: ReactNode;
  };
}
/* @figmaId 5971:27683 */
export const InfoProduct_typeCard: FC<Props> = memo(function InfoProduct_typeCard(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <V6IconFree_styleSolidPaddingNo
        text={{
          icon: props.text?.icon || <div className={classes.icon}></div>,
        }}
      />
      {props.text?.lesson6 != null ? props.text?.lesson6 : <div className={classes.lesson6}>Lesson : 6</div>}
    </div>
  );
});

import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconVariant3 } from '../IconVariant3/IconVariant3.js';
import classes from './Button_SizeLgHierarchySecondar.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    icon?: string;
    iconVariant3?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 3287:427851 */
export const Button_SizeLgHierarchySecondar: FC<Props> = memo(function Button_SizeLgHierarchySecondar(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <IconVariant3 className={props.classes?.iconVariant3 || ''} classes={{ icon: props.classes?.icon || '' }} />
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Button CTA</div>}
    </button>
  );
});

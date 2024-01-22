import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_SizeLgHierarchyPrimaryI } from '../Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import { Button_SizeLgHierarchySecondar } from '../Button_SizeLgHierarchySecondar/Button_SizeLgHierarchySecondar.js';
import classes from './_ModalActions_TypeHorizontalFi.module.css';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
    iconVariant3?: string;
    button?: string;
    button2?: string;
    root?: string;
  };
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
  };
}
/* @figmaId 1104:365 */
export const _ModalActions_TypeHorizontalFi: FC<Props> = memo(function _ModalActions_TypeHorizontalFi(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Button_SizeLgHierarchySecondar
        className={`${props.classes?.button || ''} ${classes.button}`}
        classes={{ icon: props.classes?.icon || '', iconVariant3: props.classes?.iconVariant3 || '' }}
        text={{
          text: <div className={classes.text}>Cancel</div>,
        }}
      />
      <Button_SizeLgHierarchyPrimaryI
        className={`${props.classes?.button2 || ''} ${classes.button2}`}
        hide={{
          placeholder: true,
          placeholder2: true,
        }}
        text={{
          text: <div className={classes.text2}>Confirm</div>,
        }}
      />
    </div>
  );
});

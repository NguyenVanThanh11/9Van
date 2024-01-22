import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _NavItemBase_CurrentFalseColor3 } from '../_NavItemBase_CurrentFalseColor3/_NavItemBase_CurrentFalseColor3.js';
import classes from './_NavItemDropdownBase_OpenFalse.module.css';

interface Props {
  className?: string;
  classes?: {
    _NavItemBase?: string;
    root?: string;
  };
  hide?: {
    _Dot?: boolean;
    badge?: boolean;
    barChart1?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1152:90365 */
export const _NavItemDropdownBase_OpenFalse: FC<Props> = memo(function _NavItemDropdownBase_OpenFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_NavItemBase_CurrentFalseColor3
        className={`${props.classes?._NavItemBase || ''} ${classes._NavItemBase}`}
        hide={{
          _Dot: true,
          badge: true,
          barChart1: props.hide?.barChart1,
        }}
        text={{
          text: props.text?.text,
        }}
      />
    </div>
  );
});

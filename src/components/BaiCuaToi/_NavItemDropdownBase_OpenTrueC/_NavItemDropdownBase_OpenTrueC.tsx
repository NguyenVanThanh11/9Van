import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _NavItemBase_CurrentFalseColor2 } from '../_NavItemBase_CurrentFalseColor2/_NavItemBase_CurrentFalseColor2.js';
import { _NavItemBase_CurrentTrueColorG } from '../_NavItemBase_CurrentTrueColorG/_NavItemBase_CurrentTrueColorG.js';
import { ChevronUp } from '../ChevronUp/ChevronUp.js';
import classes from './_NavItemDropdownBase_OpenTrueC.module.css';
import { ChevronUpIcon } from './ChevronUpIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    _Dot?: boolean;
    badge?: boolean;
    _Dot2?: boolean;
    barChart1?: boolean;
    badge2?: boolean;
    chevronDown?: boolean;
    _Dot3?: boolean;
    barChart12?: boolean;
    badge3?: boolean;
    chevronDown2?: boolean;
    _Dot4?: boolean;
    barChart13?: boolean;
    badge4?: boolean;
    chevronDown3?: boolean;
    _Dot5?: boolean;
    barChart14?: boolean;
    badge5?: boolean;
    chevronDown4?: boolean;
    menu?: boolean;
  };
}
/* @figmaId 1153:91434 */
export const _NavItemDropdownBase_OpenTrueC: FC<Props> = memo(function _NavItemDropdownBase_OpenTrueC(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_NavItemBase_CurrentTrueColorG
        swap={{
          chevronDown: (
            <ChevronUp
              className={classes.chevronUp}
              swap={{
                icon: <ChevronUpIcon className={classes.icon} />,
              }}
            />
          ),
        }}
        hide={{
          _Dot: true,
          badge: true,
        }}
      />
      {!props.hide?.menu && (
        <div className={classes.menu}>
          <_NavItemBase_CurrentFalseColor2
            className={classes._NavItemBase}
            hide={{
              _Dot: true,
              barChart1: true,
              badge: true,
              chevronDown: true,
            }}
            text={{
              text: <div className={classes.text}>6A1</div>,
            }}
          />
          <_NavItemBase_CurrentFalseColor2
            className={classes._NavItemBase2}
            hide={{
              _Dot: true,
              barChart1: true,
              badge: true,
              chevronDown: true,
            }}
            text={{
              text: <div className={classes.text2}>7A2</div>,
            }}
          />
          <_NavItemBase_CurrentFalseColor2
            className={classes._NavItemBase3}
            hide={{
              _Dot: true,
              barChart1: true,
              badge: true,
              chevronDown: true,
            }}
            text={{
              text: <div className={classes.text3}>8A3</div>,
            }}
          />
          <_NavItemBase_CurrentFalseColor2
            className={classes._NavItemBase4}
            hide={{
              _Dot: true,
              barChart1: true,
              badge: true,
              chevronDown: true,
            }}
            text={{
              text: <div className={classes.text4}>9A5</div>,
            }}
          />
        </div>
      )}
    </div>
  );
});

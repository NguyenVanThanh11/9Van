import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _NavItemDropdownBase_OpenTrueC } from '../_NavItemDropdownBase_OpenTrueC/_NavItemDropdownBase_OpenTrueC.js';
import classes from './_NavItemDropdownBaseVariant2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    _Dot?: boolean;
    badge?: boolean;
    menu?: boolean;
    _NavItemDropdownBase?: boolean;
  };
}
/* @figmaId 5994:53023 */
export const _NavItemDropdownBaseVariant2: FC<Props> = memo(function _NavItemDropdownBaseVariant2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?._NavItemDropdownBase && (
        <_NavItemDropdownBase_OpenTrueC
          className={classes._NavItemDropdownBase}
          hide={{
            menu: true,
          }}
        />
      )}
    </div>
  );
});

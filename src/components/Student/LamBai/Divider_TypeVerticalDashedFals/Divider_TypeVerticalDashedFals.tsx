import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Divider_TypeVerticalDashedFals.module.css';
import { LineIcon } from './LineIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 6078:63593 */
export const Divider_TypeVerticalDashedFals: FC<Props> = memo(function Divider_TypeVerticalDashedFals(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.line}>
        <LineIcon className={classes.icon} />
      </div>
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Spacer_Size4px.module.css';

interface Props {
  className?: string;
}
/* @figmaId 6078:63640 */
export const Spacer_Size4px: FC<Props> = memo(function Spacer_Size4px(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.spacer}></div>
    </div>
  );
});

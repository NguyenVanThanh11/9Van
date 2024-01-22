import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AlertCircle } from '../AlertCircle/AlertCircle.js';
import { AlertCircleIcon } from './AlertCircleIcon.js';
import classes from './FeaturedIcon_SizeMdColorPrimar.module.css';

interface Props {
  className?: string;
  swap?: {
    alertCircle?: ReactNode;
  };
}
/* @figmaId 1102:5335 */
export const FeaturedIcon_SizeMdColorPrimar: FC<Props> = memo(function FeaturedIcon_SizeMdColorPrimar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.swap?.alertCircle || (
        <AlertCircle
          className={classes.alertCircle}
          swap={{
            icon: <AlertCircleIcon className={classes.icon} />,
          }}
        />
      )}
    </div>
  );
});

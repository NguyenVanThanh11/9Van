import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Adjuster_TypeWidth } from '../Adjuster_TypeWidth/Adjuster_TypeWidth.js';
import classes from './ComponentsFormSizeTokens_XSFal.module.css';

interface Props {
  className?: string;
}
/* @figmaId 6078:63656 */
export const ComponentsFormSizeTokens_XSFal: FC<Props> = memo(function ComponentsFormSizeTokens_XSFal(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Adjuster_TypeWidth className={classes.adjuster} />
    </div>
  );
});

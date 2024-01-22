import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './GraduationCap_TypesLine.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    vector?: boolean;
  };
}
/* @figmaId 6050:174435 */
export const GraduationCap_TypesLine: FC<Props> = memo(function GraduationCap_TypesLine(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.vector && (
        <div className={classes.vector}>
          <VectorIcon className={classes.icon} />
        </div>
      )}
    </div>
  );
});

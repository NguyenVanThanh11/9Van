import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { HelpCircle } from '../HelpCircle/HelpCircle.js';
import { HelpCircleIcon } from './HelpCircleIcon.js';
import classes from './HelpIcon_OpenFalseSupportingTe.module.css';

interface Props {
  className?: string;
  classes?: {
    icon2?: string;
    helpCircle?: string;
    root?: string;
  };
}
/* @figmaId 1054:66 */
export const HelpIcon_OpenFalseSupportingTe: FC<Props> = memo(function HelpIcon_OpenFalseSupportingTe(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <HelpCircle
        className={`${props.classes?.helpCircle || ''} ${classes.helpCircle}`}
        classes={{ icon: props.classes?.icon2 || '' }}
        swap={{
          icon: <HelpCircleIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});

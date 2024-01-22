import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { HelpIcon_OpenFalseSupportingTe } from '../HelpIcon_OpenFalseSupportingTe/HelpIcon_OpenFalseSupportingTe.js';
import classes from './TableHeader_HelpIconTrueArrowF.module.css';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
    helpCircle?: string;
    helpIcon?: string;
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1221:106789 */
export const TableHeader_HelpIconTrueArrowF: FC<Props> = memo(function TableHeader_HelpIconTrueArrowF(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Company</div>}
      <HelpIcon_OpenFalseSupportingTe
        className={props.classes?.helpIcon || ''}
        classes={{ icon2: props.classes?.icon || '', helpCircle: props.classes?.helpCircle || '' }}
      />
    </div>
  );
});

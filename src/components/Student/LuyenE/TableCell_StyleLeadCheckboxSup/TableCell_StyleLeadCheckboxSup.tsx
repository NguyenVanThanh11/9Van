import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Checkbox_CheckedFalseIndetermi } from '../Checkbox_CheckedFalseIndetermi/Checkbox_CheckedFalseIndetermi.js';
import classes from './TableCell_StyleLeadCheckboxSup.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    checkbox?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1222:107515 */
export const TableCell_StyleLeadCheckboxSup: FC<Props> = memo(function TableCell_StyleLeadCheckboxSup(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.checkbox && <Checkbox_CheckedFalseIndetermi />}
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Olivia Rhye</div>}
    </div>
  );
});

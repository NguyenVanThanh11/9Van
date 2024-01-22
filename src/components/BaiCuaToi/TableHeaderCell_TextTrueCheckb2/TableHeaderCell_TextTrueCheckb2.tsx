import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { TableHeader_HelpIconFalseArrow2 } from '../TableHeader_HelpIconFalseArrow2/TableHeader_HelpIconFalseArrow2.js';
import classes from './TableHeaderCell_TextTrueCheckb2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1224:4554 */
export const TableHeaderCell_TextTrueCheckb2: FC<Props> = memo(function TableHeaderCell_TextTrueCheckb2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <TableHeader_HelpIconFalseArrow2
        text={{
          text: props.text?.text,
        }}
      />
    </div>
  );
});

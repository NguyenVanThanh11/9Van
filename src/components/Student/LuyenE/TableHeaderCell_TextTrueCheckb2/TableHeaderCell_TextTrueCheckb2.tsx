import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { TableHeader_HelpIconFalseArrow2 } from '../TableHeader_HelpIconFalseArrow2/TableHeader_HelpIconFalseArrow2.js';
import classes from './TableHeaderCell_TextTrueCheckb2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    tableHeader?: string;
  };
  swap?: {
    tableHeader?: ReactNode;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1224:4549 */
export const TableHeaderCell_TextTrueCheckb2: FC<Props> = memo(function TableHeaderCell_TextTrueCheckb2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.tableHeader || (
        <TableHeader_HelpIconFalseArrow2
          className={props.classes?.tableHeader || ''}
          text={{
            text: props.text?.text,
          }}
        />
      )}
    </div>
  );
});

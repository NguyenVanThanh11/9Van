import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ArrowDown } from '../ArrowDown/ArrowDown.js';
import { ArrowDownIcon } from './ArrowDownIcon.js';
import classes from './TableHeader_HelpIconFalseArrow.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1221:106888 */
export const TableHeader_HelpIconFalseArrow: FC<Props> = memo(function TableHeader_HelpIconFalseArrow(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.text}>Company</div>
      <ArrowDown
        className={classes.arrowDown}
        swap={{
          icon: <ArrowDownIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});

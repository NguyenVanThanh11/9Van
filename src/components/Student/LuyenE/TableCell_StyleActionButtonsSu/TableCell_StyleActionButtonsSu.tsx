import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_SizeMdHierarchyLinkColo } from '../Button_SizeMdHierarchyLinkColo/Button_SizeMdHierarchyLinkColo.js';
import { Button_SizeMdHierarchyLinkGray } from '../Button_SizeMdHierarchyLinkGray/Button_SizeMdHierarchyLinkGray.js';
import classes from './TableCell_StyleActionButtonsSu.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
    button?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1224:1757 */
export const TableCell_StyleActionButtonsSu: FC<Props> = memo(function TableCell_StyleActionButtonsSu(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.button && (
        <Button_SizeMdHierarchyLinkGray
          hide={{
            placeholder: true,
            placeholder2: true,
          }}
          text={{
            text: <div className={classes.text}>Delete</div>,
          }}
        />
      )}
      <Button_SizeMdHierarchyLinkColo
        hide={{
          placeholder: true,
          placeholder2: true,
        }}
        text={{
          text: props.text?.text || <div className={classes.text2}>Edit</div>,
        }}
      />
    </div>
  );
});

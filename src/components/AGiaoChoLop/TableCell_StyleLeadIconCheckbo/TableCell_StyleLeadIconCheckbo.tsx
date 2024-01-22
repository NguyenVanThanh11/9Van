import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Checkbox_CheckedFalseIndetermi } from '../Checkbox_CheckedFalseIndetermi/Checkbox_CheckedFalseIndetermi.js';
import { FeaturedIcon_SizeMdColorPrimar } from '../FeaturedIcon_SizeMdColorPrimar/FeaturedIcon_SizeMdColorPrimar.js';
import { File4 } from '../File4/File4.js';
import { File4Icon } from './File4Icon.js';
import classes from './TableCell_StyleLeadIconCheckbo.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    checkbox?: boolean;
    featuredIcon?: boolean;
    textAndSupportingText?: boolean;
  };
  text?: {
    text?: ReactNode;
    supportingText?: ReactNode;
  };
}
/* @figmaId 1224:1461 */
export const TableCell_StyleLeadIconCheckbo: FC<Props> = memo(function TableCell_StyleLeadIconCheckbo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.checkbox && <Checkbox_CheckedFalseIndetermi />}
      {!props.hide?.featuredIcon && (
        <FeaturedIcon_SizeMdColorPrimar
          swap={{
            alertCircle: (
              <File4
                className={classes.file4}
                swap={{
                  icon: <File4Icon className={classes.icon} />,
                }}
              />
            ),
          }}
        />
      )}
      {!props.hide?.textAndSupportingText && (
        <div className={classes.textAndSupportingText}>
          {props.text?.text != null ? props.text?.text : <div className={classes.text}>Tech requirements.pdf</div>}
          {props.text?.supportingText != null ? (
            props.text?.supportingText
          ) : (
            <div className={classes.supportingText}>200 KB</div>
          )}
        </div>
      )}
    </div>
  );
});

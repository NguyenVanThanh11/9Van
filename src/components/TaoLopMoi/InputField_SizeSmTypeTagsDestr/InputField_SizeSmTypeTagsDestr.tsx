import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { HelpIcon_OpenFalseSupportingTe } from '../HelpIcon_OpenFalseSupportingTe/HelpIcon_OpenFalseSupportingTe.js';
import { Tag_SizeMdIconAvatarActionXClo } from '../Tag_SizeMdIconAvatarActionXClo/Tag_SizeMdIconAvatarActionXClo.js';
import classes from './InputField_SizeSmTypeTagsDestr.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar?: string;
    avatar2?: string;
    root?: string;
  };
  text?: {
    label?: ReactNode;
    hintText?: ReactNode;
  };
}
/* @figmaId 3531:403150 */
export const InputField_SizeSmTypeTagsDestr: FC<Props> = memo(function InputField_SizeSmTypeTagsDestr(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.inputWithLabel}>
        {props.text?.label != null ? props.text?.label : <div className={classes.label}>Users</div>}
        <div className={classes.input}>
          <div className={classes.content}>
            <div className={classes.tags}>
              <Tag_SizeMdIconAvatarActionXClo
                classes={{ avatar: `${props.classes?.avatar || ''} ${classes.avatar}` }}
                text={{
                  text: <div className={classes.text}>Olivia</div>,
                }}
              />
              <Tag_SizeMdIconAvatarActionXClo
                classes={{ avatar: `${props.classes?.avatar2 || ''} ${classes.avatar2}` }}
                text={{
                  text: <div className={classes.text2}>Phoenix</div>,
                }}
              />
            </div>
            <div className={classes.text3}>Lana</div>
          </div>
          <HelpIcon_OpenFalseSupportingTe />
        </div>
      </div>
      {props.text?.hintText != null ? (
        props.text?.hintText
      ) : (
        <div className={classes.hintText}>This is a hint text to help user.</div>
      )}
    </div>
  );
});

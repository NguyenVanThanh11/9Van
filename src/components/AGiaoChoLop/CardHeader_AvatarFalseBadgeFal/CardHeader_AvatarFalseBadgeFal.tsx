import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_SizeMdHierarchyPrimaryI } from '../Button_SizeMdHierarchyPrimaryI/Button_SizeMdHierarchyPrimaryI.js';
import { Button_SizeMdHierarchySecondar2 } from '../Button_SizeMdHierarchySecondar2/Button_SizeMdHierarchySecondar2.js';
import { Button_SizeMdHierarchySecondar } from '../Button_SizeMdHierarchySecondar/Button_SizeMdHierarchySecondar.js';
import { Button_SizeMdHierarchyTertiary } from '../Button_SizeMdHierarchyTertiary/Button_SizeMdHierarchyTertiary.js';
import { Dropdown_TypeIconOpenFalse } from '../Dropdown_TypeIconOpenFalse/Dropdown_TypeIconOpenFalse.js';
import classes from './CardHeader_AvatarFalseBadgeFal.module.css';
import { DividerIcon } from './DividerIcon.js';

interface Props {
  className?: string;
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
    placeholder5?: boolean;
    placeholder6?: boolean;
  };
}
/* @figmaId 3292:532501 */
export const CardHeader_AvatarFalseBadgeFal: FC<Props> = memo(function CardHeader_AvatarFalseBadgeFal(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.content}>
        <div className={classes.textAndSupportingText}>
          <div className={classes.text5}>Team members</div>
          <div className={classes.supportingText}>Manage your team members and their account permissions here.</div>
        </div>
        <div className={classes.actions}>
          <Button_SizeMdHierarchyTertiary
            hide={{
              placeholder: true,
              placeholder2: true,
            }}
            text={{
              text: <div className={classes.text}>Tertiary</div>,
            }}
          />
          <Button_SizeMdHierarchySecondar
            hide={{
              placeholder: true,
              placeholder2: true,
            }}
            text={{
              text: <div className={classes.text2}>Secondary</div>,
            }}
          />
          <Button_SizeMdHierarchySecondar2
            text={{
              text: <div className={classes.text3}>Secondary</div>,
            }}
          />
          <Button_SizeMdHierarchyPrimaryI
            hide={{
              placeholder: true,
              placeholder2: true,
            }}
            text={{
              text: <div className={classes.text4}>Primary</div>,
            }}
          />
        </div>
        <Dropdown_TypeIconOpenFalse />
      </div>
      <div className={classes.divider}>
        <DividerIcon className={classes.icon} />
      </div>
    </div>
  );
});

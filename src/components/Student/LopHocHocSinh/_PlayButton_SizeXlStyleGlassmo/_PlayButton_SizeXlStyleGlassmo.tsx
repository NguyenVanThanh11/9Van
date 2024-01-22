import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_PlayButton_SizeXlStyleGlassmo.module.css';
import { ButtonIcon } from './ButtonIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1377:12742 */
export const _PlayButton_SizeXlStyleGlassmo: FC<Props> = memo(function _PlayButton_SizeXlStyleGlassmo(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.button}>
        <ButtonIcon className={classes.icon} />
      </div>
    </button>
  );
});

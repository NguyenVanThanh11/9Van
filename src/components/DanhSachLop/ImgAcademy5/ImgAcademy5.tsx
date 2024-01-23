import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ImgAcademy5.module.css';

interface Props {
  className?: string;
  classes?: {
    indoorShotHappyStudentMaleWith?: string;
    root?: string;
  };
}
/* @figmaId 5971:28095 */
export const ImgAcademy5: FC<Props> = memo(function ImgAcademy5(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?.indoorShotHappyStudentMaleWith || ''} ${classes.indoorShotHappyStudentMaleWith}`}
      ></div>
    </div>
  );
});

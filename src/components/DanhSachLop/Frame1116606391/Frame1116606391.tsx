import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../../_resets.module.css';
import { Avatar_SizeLgPlaceholderFalseT } from '../Avatar_SizeLgPlaceholderFalseT/Avatar_SizeLgPlaceholderFalseT.js';
import { BookOpen1 } from '../BookOpen1/BookOpen1.js';
import { ImgAcademy5 } from '../ImgAcademy5/ImgAcademy5.js';
import { InfoProduct_typeCard } from '../InfoProduct_typeCard/InfoProduct_typeCard.js';
import { BookOpen1Icon } from './BookOpen1Icon.js';
import classes from './Frame1116606391.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar?: string;
    root?: string;
  };
}
/* @figmaId 5973:32244 */
export const Frame1116606391: FC<Props> = memo(function Frame1116606391(props = {}) {
  const navigate = useNavigate();
  return (
    <div   onClick={() => {
      navigate('/danh-sach-hoc-sinh');
    }} className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ImgAcademy5
        className={classes.imgAcademy5}
        classes={{ indoorShotHappyStudentMaleWith: classes.indoorShotHappyStudentMaleWith }}
      />
      <Avatar_SizeLgPlaceholderFalseT className={`${props.classes?.avatar || ''} ${classes.avatar}`} />
      <div className={classes.rightCard}>
        <div className={classes.information}>
          <InfoProduct_typeCard
            className={classes.infoProduct}
            text={{
              icon: <div className={classes.icon}></div>,
              lesson6: (
                <div className={classes.lesson6}>
                  <p className={classes.labelWrapper}>
                    <span className={classes.label}>Học </span>
                    <span className={classes.label2}>sinh</span>
                    <span className={classes.label3}>: 30</span>
                  </p>
                </div>
              ),
            }}
          />
        </div>
        <div className={classes.title}>
          <div className={classes.title2}>
            <p className={classes.labelWrapper2}>Lớp 6A1</p>
          </div>
        </div>
      </div>
      <BookOpen1
        className={classes.bookOpen1}
        swap={{
          icon: <BookOpen1Icon className={classes.icon2} />,
        }}
      />
    </div>
  );
});

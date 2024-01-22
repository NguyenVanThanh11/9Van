import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Login.module.css';
import { SocialButtonGroups_StyleButton } from './SocialButtonGroups_StyleButton/SocialButtonGroups_StyleButton.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 6227:5516 */
export const Login: FC<Props> = memo(function Login(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame1116606390}>
        <div className={classes.frame1116606378}>
          <div className={classes.rectangle132}></div>
        </div>
      </div>
      <div className={classes.frame1}>
        <div className={classes._9Van}>9Van</div>
        <div className={classes.luyenVietVanHayChamBaiThongMin}>
          <div className={classes.textBlock}>Luyện viết văn hay - Chấm bài thông minh</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.button}>
          <div className={classes.text4}>Điều khoản</div>
        </div>
        <div className={classes.text5}>Chính sách</div>
        <div className={classes.unnamed}>&amp;</div>
        <div className={classes.button2}>
          <div className={classes.text6}>Giới thiệu</div>
        </div>
        <SocialButtonGroups_StyleButton
          className={classes.socialButtonGroups}
          classes={{
            socialButton: classes.socialButton,
            socialButton2: classes.socialButton2,
            socialButton3: classes.socialButton3,
          }}
          swap={{
            vector: <VectorIcon className={classes.icon} />,
          }}
          text={{
            text: <div className={classes.text}>Đăng nhập với Google</div>,
            text2: <div className={classes.text2}>Đăng nhập với Facebook</div>,
            text3: <div className={classes.text3}>Đăng nhập với Apple </div>,
          }}
        />
      </div>
    </div>
  );
});

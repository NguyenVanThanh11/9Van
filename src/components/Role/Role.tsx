import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Role.module.css';

interface Props {
  className?: string;
}
/* @figmaId 6222:19543 */
export const Role: FC<Props> = memo(function Role(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame1}>
        <div className={classes._9Van}>9Van</div>
        <div className={classes.luyenVietVanHayChamBaiThongMin}>
          <div className={classes.textBlock}>Luyện viết văn hay - Chấm bài thông minh</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
        <div className={classes.button}>
          <div className={classes.text}>Điều khoản</div>
        </div>
        <div className={classes.text2}>Chính sách</div>
        <div className={classes.unnamed}>&amp;</div>
        <div className={classes.button2}>
          <div className={classes.text3}>Giới thiệu</div>
        </div>
        <div className={classes.roleColorChip}>
          <div className={classes.mainChip}>
            <div className={classes.topChip}>
              <div className={classes.dot}></div>
            </div>
            <div className={classes.bottomChip}>
              <div className={classes.role}>
                <div className={classes.giaoVien}>Giáo viên </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.roleColorChip2}>
          <div className={classes.mainChip2}>
            <div className={classes.topChip2}>
              <div className={classes.dot2}></div>
            </div>
            <div className={classes.bottomChip2}>
              <div className={classes.role2}>
                <div className={classes.hocSinh}>Học sinh</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.roleColorChip3}>
          <div className={classes.mainChip3}>
            <div className={classes.topChip3}>
              <div className={classes.dot3}></div>
            </div>
            <div className={classes.bottomChip3}>
              <div className={classes.role3}>
                <div className={classes.phuHuynh}>Phụ huynh</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

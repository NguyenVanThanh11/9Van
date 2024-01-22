import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentTrueSize } from './_TabButtonBase_CurrentTrueSize/_TabButtonBase_CurrentTrueSize.js';
import classes from './BaiHoc.module.css';
import { Bell1Icon } from './Bell1Icon.js';
import { Button_SizeSmHierarchySecondar } from './Button_SizeSmHierarchySecondar/Button_SizeSmHierarchySecondar.js';
import { CheckboxGroup_SizeSmTypeCheckb } from './CheckboxGroup_SizeSmTypeCheckb/CheckboxGroup_SizeSmTypeCheckb.js';
import { CheckDone1 } from './CheckDone1/CheckDone1.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import { PieChart3 } from './PieChart3/PieChart3.js';
import { PieChart3Icon } from './PieChart3Icon.js';
import { SearchLg } from './SearchLg/SearchLg.js';
import { SearchLgIcon } from './SearchLgIcon.js';
import { Settings1 } from './Settings1/Settings1.js';
import { Settings1Icon } from './Settings1Icon.js';
import { Users1 } from './Users1/Users1.js';
import { Users1Icon } from './Users1Icon.js';
import { VideoPlayer_PlayingFalseSizeXl } from './VideoPlayer_PlayingFalseSizeXl/VideoPlayer_PlayingFalseSizeXl.js';

interface Props {
  className?: string;
  hide?: {
    _Dot?: boolean;
    badge?: boolean;
    chevronDown?: boolean;
    _Dot2?: boolean;
    badge2?: boolean;
    chevronDown2?: boolean;
    _Dot3?: boolean;
    badge3?: boolean;
    chevronDown3?: boolean;
    _Dot4?: boolean;
    badge4?: boolean;
    chevronDown4?: boolean;
    badge5?: boolean;
    input?: boolean;
    textAndSubtext?: boolean;
    input2?: boolean;
    textAndSubtext2?: boolean;
    input3?: boolean;
    textAndSubtext3?: boolean;
    input4?: boolean;
    textAndSubtext4?: boolean;
    input5?: boolean;
    textAndSubtext5?: boolean;
  };
}
/* @figmaId 6225:24473 */
export const BaiHoc: FC<Props> = memo(function BaiHoc(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.content}>
        <div className={classes.nav}>
          <div className={classes.navigation}>
            <_NavItemBase_CurrentFalseColor
              className={classes._NavItemBase}
              swap={{
                barChart1: (
                  <HomeLine
                    swap={{
                      icon: <HomeLineIcon className={classes.icon} />,
                    }}
                  />
                ),
              }}
              hide={{
                _Dot: true,
                badge: true,
                chevronDown: true,
              }}
              text={{
                text: <div className={classes.text}>Trang chủ</div>,
              }}
            />
            <_NavItemBase_CurrentFalseColor
              className={classes._NavItemBase2}
              swap={{
                barChart1: (
                  <CheckDone1
                    swap={{
                      icon: <CheckDone1Icon className={classes.icon2} />,
                    }}
                  />
                ),
              }}
              hide={{
                _Dot: true,
                badge: true,
                chevronDown: true,
              }}
              text={{
                text: <div className={classes.text2}>Bài tập</div>,
              }}
            />
            <_NavItemBase_CurrentFalseColor
              className={classes._NavItemBase3}
              swap={{
                barChart1: (
                  <PieChart3
                    swap={{
                      icon: <PieChart3Icon className={classes.icon3} />,
                    }}
                  />
                ),
              }}
              hide={{
                _Dot: true,
                badge: true,
                chevronDown: true,
              }}
              text={{
                text: <div className={classes.text3}>Luyện đề</div>,
              }}
            />
            <_NavItemBase_CurrentFalseColor
              className={classes._NavItemBase4}
              swap={{
                barChart1: (
                  <Users1
                    swap={{
                      icon: <Users1Icon className={classes.icon4} />,
                    }}
                  />
                ),
              }}
              hide={{
                _Dot: true,
                badge: true,
                chevronDown: true,
              }}
              text={{
                text: <div className={classes.text4}>Hồ sơ</div>,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.headerNavigation}>
        <div className={classes.container}>
          <div className={classes.content2}>
            <div className={classes.logo}>
              <div className={classes._9VAN}>9VAN</div>
            </div>
          </div>
          <div className={classes.content3}>
            <div className={classes.actions}>
              <div className={classes.search}>
                <div className={classes.inputDropdown}>
                  <div className={classes.inputWithLabel}>
                    <div className={classes.input}>
                      <div className={classes.content4}>
                        <SearchLg
                          className={classes.searchLg}
                          swap={{
                            icon: <SearchLgIcon className={classes.icon5} />,
                          }}
                        />
                        <div className={classes.text8}>Tìm kiếm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <_NavItemButton_CurrentFalseSiz
                className={classes._NavItemButton}
                swap={{
                  bell1: (
                    <Settings1
                      className={classes.settings1}
                      swap={{
                        icon: <Settings1Icon className={classes.icon6} />,
                      }}
                    />
                  ),
                }}
              />
              <_NavItemButton_CurrentFalseSiz
                className={classes._NavItemButton2}
                swap={{
                  icon: <Bell1Icon className={classes.icon7} />,
                }}
              />
            </div>
            <Dropdown_TypeAvatarOpenFalse classes={{ avatar: classes.avatar }} />
          </div>
        </div>
      </div>
      <div className={classes.frame1116606394}>
        <_TabButtonBase_CurrentTrueSize
          className={classes._TabButtonBase}
          text={{
            text: <div className={classes.text5}>Lý thuyết</div>,
          }}
        />
      </div>
      <VideoPlayer_PlayingFalseSizeXl
        className={classes.videoPlayer}
        classes={{
          shadowOverlayPlayer: classes.shadowOverlayPlayer,
          overlay: classes.overlay,
          textAndBadge: classes.textAndBadge,
          _PlayButton: classes._PlayButton,
        }}
        hide={{
          badge: true,
        }}
        text={{
          text: <div className={classes.text6}>Chương 1</div>,
        }}
      />
      <div className={classes.chuong1ToiVaCacBan}>Chương 1: Tôi và các bạn</div>
      <div className={classes.nguVan6}>Ngữ văn 6</div>
      <div className={classes._10Bai}>10 bài</div>
      <div className={classes.moTa}>Mô tả </div>
      <div className={classes.trongThoiAiCongNgheSoHoaGiaoDu}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>
            Trong thời đại công nghệ số hóa, giáo dục không còn giới hạn bởi bốn bức tường của lớp học. Công nghệ đã mở
            ra nhiều cơ hội mới trong việc cải thiện phương pháp giảng dạy và học tập. Tuy nhiên, việc sử dụng công nghệ
            trong giáo dục cũng mang đến nhiều ưu và nhược điểm cần được cân nhắc.{' '}
          </span>
          <span className={classes.label2}>Xem thêm </span>
        </p>
      </div>
      <CheckboxGroup_SizeSmTypeCheckb
        className={classes.checkboxGroup}
        classes={{ checkboxGroupItem: classes.checkboxGroupItem }}
        hide={{
          input: true,
          textAndSubtext: true,
          input2: true,
          textAndSubtext2: true,
          input3: true,
          textAndSubtext3: true,
          input4: true,
          textAndSubtext4: true,
          input5: true,
          textAndSubtext5: true,
        }}
        text={{
          includesUpTo10Users20GBIndivid: (
            <div className={classes.includesUpTo10Users20GBIndivid}>
              Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
            </div>
          ),
          includesUpTo10Users20GBIndivid2: (
            <div className={classes.includesUpTo10Users20GBIndivid2}>
              Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
            </div>
          ),
          includesUpTo10Users20GBIndivid3: (
            <div className={classes.includesUpTo10Users20GBIndivid3}>
              Trong đoạn văn thứ ba học sinh đã nêu được biểu hiện của bạo lực học đường và có dẫn chứng minh họa chưa?
            </div>
          ),
          includesUpTo10Users20GBIndivid4: (
            <div className={classes.includesUpTo10Users20GBIndivid4}>
              Trong đoạn văn thứ tư học sinh đã nêu được nguyên nhân dẫn tới bạo lực học đường chưa?
            </div>
          ),
          includesUpTo10Users20GBIndivid5: (
            <div className={classes.includesUpTo10Users20GBIndivid5}>
              Trong phần kết bài học sinh đã khẳng định lại vấn đề, đưa ra lời khuyên cho mọi người và liên hệ thực tế
              bản thân chưa?
            </div>
          ),
        }}
      />
      <div className={classes.cauHoiTuLuyen}>Câu hỏi tự luyện</div>
      <Button_SizeSmHierarchySecondar
        className={classes.button}
        text={{
          text: <div className={classes.text7}>Bài tiếp theo</div>,
        }}
      />
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentFalseSiz } from './_TabButtonBase_CurrentFalseSiz/_TabButtonBase_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentTrueSize } from './_TabButtonBase_CurrentTrueSize/_TabButtonBase_CurrentTrueSize.js';
import { Bell1Icon } from './Bell1Icon.js';
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
import classes from './XemE.module.css';

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
  };
}
/* @figmaId 6225:24460 */
export const XemE: FC<Props> = memo(function XemE(props = {}) {
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
                        <div className={classes.text7}>Tìm kiếm</div>
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
            text: <div className={classes.text5}>Luyện đề riêng</div>,
          }}
        />
        <_TabButtonBase_CurrentFalseSiz
          className={classes._TabButtonBase2}
          text={{
            text: <div className={classes.text6}>Tự luyện đề của riêng</div>,
          }}
        />
      </div>
      <div className={classes.EBaiBanLuanVeHienTuongHutThuoc}>
        <div className={classes.textBlock}>Đề bài:</div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Bàn luận về hiện tượng hút thuốc lá điện tử trong học đường</span>
          </p>
        </div>
        <div className={classes.textBlock3}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label2}>Gợi ý:</span>
          </p>
        </div>
        <div className={classes.textBlock4}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label3}>
              Phần mở bài, học sinh đã giới thiệu được vấn đề cần bàn luận và đưa ra ý kiến cá nhân chưa?
            </span>
          </p>
        </div>
        <div className={classes.textBlock5}>
          Phần thân bài, học sinh đã nêu được định nghĩa về thuốc lá điện tử chưa?
        </div>
        <div className={classes.textBlock6}>
          Phần thân bài, học sinh đã nêu được biểu hiện của nghiện thuốc lá điện tử chưa?
        </div>
        <div className={classes.textBlock7}>
          Phần thân bài, học sinh đã nêu được nguyên nhân của hiện tượng nghiện thuốc lá điện tử chưa?
        </div>
        <div className={classes.textBlock8}>
          Phần thân bài, học sinh đã nêu được hậu quả của hiện tượng nghiện thuốc lá điện tử chưa?
        </div>
        <div className={classes.textBlock9}>Bài viết của học sinh có lí lẽ và dẫn chứng chưa?</div>
        <div className={classes.textBlock10}>
          Phần kết bài, học sinh đã khẳng định lại vấn đề, đưa ra lời khuyên và liên hệ bản thân chưa?
        </div>
        <div className={classes.textBlock11}>
          <p className={classes.labelWrapper4}>
            <span className={classes.label4}>Bộ sách:</span>
          </p>
        </div>
        <div className={classes.textBlock12}>
          <p className={classes.labelWrapper5}>
            <span className={classes.label5}>KNTT Bài 8: KHÁC BIỆT VÀ GẦN GŨI</span>
          </p>
        </div>
        <div className={classes.textBlock13}>CD Bài 8: VĂN BẢN NGHỊ LUẬN</div>
        <div className={classes.textBlock14}>
          <p className={classes.labelWrapper6}>
            <span className={classes.label6}>Khối:6</span>
          </p>
        </div>
        <div className={classes.textBlock15}>
          <p></p>
        </div>
        <div className={classes.textBlock16}>
          <p></p>
        </div>
        <div className={classes.textBlock17}>
          <p></p>
        </div>
      </div>
      <button className={classes.button}>
        <div className={classes.luyenE}>Luyện đề</div>
      </button>
    </div>
  );
});

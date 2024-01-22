import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _NavItemDropdownBase_OpenFalse } from './_NavItemDropdownBase_OpenFalse/_NavItemDropdownBase_OpenFalse.js';
import { _TabButtonBase_CurrentFalseSiz } from './_TabButtonBase_CurrentFalseSiz/_TabButtonBase_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentTrueSize } from './_TabButtonBase_CurrentTrueSize/_TabButtonBase_CurrentTrueSize.js';
import classes from './BaiTap.module.css';
import { Bell1Icon } from './Bell1Icon.js';
import { CheckDone1 } from './CheckDone1/CheckDone1.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import { LayersThree1 } from './LayersThree1/LayersThree1.js';
import { LayersThree1Icon } from './LayersThree1Icon.js';
import { PieChart3 } from './PieChart3/PieChart3.js';
import { PieChart3Icon } from './PieChart3Icon.js';
import { SearchLg } from './SearchLg/SearchLg.js';
import { SearchLgIcon } from './SearchLgIcon.js';
import { Settings1 } from './Settings1/Settings1.js';
import { Settings1Icon } from './Settings1Icon.js';
import { Users1 } from './Users1/Users1.js';
import { Users1Icon } from './Users1Icon.js';

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
    _Dot5?: boolean;
    badge5?: boolean;
    chevronDown5?: boolean;
    _Dot6?: boolean;
    barChartSquare2?: boolean;
    badge6?: boolean;
  };
}
/* @figmaId 6223:23292 */
export const BaiTap: FC<Props> = memo(function BaiTap(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.headerNavigation}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.logo}>
              <div className={classes._9VAN}>9VAN</div>
            </div>
          </div>
          <div className={classes.content2}>
            <div className={classes.actions}>
              <div className={classes.search}>
                <div className={classes.inputDropdown}>
                  <div className={classes.inputWithLabel}>
                    <div className={classes.input}>
                      <div className={classes.content3}>
                        <SearchLg
                          className={classes.searchLg}
                          swap={{
                            icon: <SearchLgIcon className={classes.icon} />,
                          }}
                        />
                        <div className={classes.text10}>Tìm kiếm</div>
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
                        icon: <Settings1Icon className={classes.icon2} />,
                      }}
                    />
                  ),
                }}
              />
              <_NavItemButton_CurrentFalseSiz
                className={classes._NavItemButton2}
                swap={{
                  icon: <Bell1Icon className={classes.icon3} />,
                }}
              />
            </div>
            <Dropdown_TypeAvatarOpenFalse classes={{ avatar: classes.avatar }} />
          </div>
        </div>
      </div>
      <div className={classes.content4}>
        <div className={classes.nav}>
          <div className={classes.navigation}>
            <_NavItemBase_CurrentFalseColor
              className={classes._NavItemBase}
              swap={{
                barChart1: (
                  <HomeLine
                    swap={{
                      icon: <HomeLineIcon className={classes.icon4} />,
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
                  <LayersThree1
                    swap={{
                      icon: <LayersThree1Icon className={classes.icon5} />,
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
                text: <div className={classes.text2}>Lớp học</div>,
              }}
            />
            <_NavItemBase_CurrentFalseColor
              className={classes._NavItemBase3}
              swap={{
                barChart1: (
                  <CheckDone1
                    swap={{
                      icon: <CheckDone1Icon className={classes.icon6} />,
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
                text: <div className={classes.text3}>Bài tập</div>,
              }}
            />
            <_NavItemBase_CurrentFalseColor
              className={classes._NavItemBase4}
              swap={{
                barChart1: (
                  <PieChart3
                    swap={{
                      icon: <PieChart3Icon className={classes.icon7} />,
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
                text: <div className={classes.text4}>Đề thi</div>,
              }}
            />
            <_NavItemBase_CurrentFalseColor
              className={classes._NavItemBase5}
              swap={{
                barChart1: (
                  <Users1
                    swap={{
                      icon: <Users1Icon className={classes.icon8} />,
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
                text: <div className={classes.text5}>Hồ sơ</div>,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.header_content}>
        <_TabButtonBase_CurrentFalseSiz
          className={classes._TabButtonBase}
          text={{
            text: <div className={classes.text6}>Bài đã chấm</div>,
          }}
        />
        <_TabButtonBase_CurrentFalseSiz
          className={classes._TabButtonBase2}
          text={{
            text: <div className={classes.text7}>Bài đã giao</div>,
          }}
        />
        <_TabButtonBase_CurrentTrueSize
          className={classes._TabButtonBase3}
          text={{
            text: <div className={classes.text8}>Bài chờ chấm</div>,
          }}
        />
        <_NavItemDropdownBase_OpenFalse
          className={classes._NavItemDropdownBase}
          classes={{ _NavItemBase: classes._NavItemBase6 }}
          hide={{
            barChart1: true,
          }}
          text={{
            text: <div className={classes.text9}>Chọn lớp</div>,
          }}
        />
      </div>
      <div className={classes.content5}>
        <div className={classes.rectangle3256}></div>
        <div className={classes.hienTaiKhongCoBaiNaoCham}>Hiện tại không có bài nào chấm</div>
      </div>
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from '../_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from '../_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { CheckDone1 } from '../CheckDone1/CheckDone1.js';
import { Dropdown_TypeAvatarOpenFalse } from '../Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { Frame1116606391 } from '../Frame1116606391/Frame1116606391.js';
import { HomeLine } from '../HomeLine/HomeLine.js';
import { LayersThree1 } from '../LayersThree1/LayersThree1.js';
import { Pagination_TypePageDefaultShap } from '../Pagination_TypePageDefaultShap/Pagination_TypePageDefaultShap.js';
import { PieChart3 } from '../PieChart3/PieChart3.js';
import { SearchLg } from '../SearchLg/SearchLg.js';
import { Settings1 } from '../Settings1/Settings1.js';
import { Users1 } from '../Users1/Users1.js';
import { Bell1Icon } from './Bell1Icon.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import classes from './DanhSachLop.module.css';
import { HomeLineIcon } from './HomeLineIcon.js';
import { LayersThree1Icon } from './LayersThree1Icon.js';
import { PieChart3Icon } from './PieChart3Icon.js';
import { SearchLgIcon } from './SearchLgIcon.js';
import { Settings1Icon } from './Settings1Icon.js';
import { Users1Icon } from './Users1Icon.js';

interface Props {
  className?: string;
  classes?: {
    avatar?: string;
    avatar2?: string;
    avatar3?: string;
    avatar4?: string;
    root?: string;
  };
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
  };
}
/* @figmaId 5994:33603 */
export const DanhSachLop: FC<Props> = memo(function DanhSachLop(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
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
                  <LayersThree1
                    swap={{
                      icon: <LayersThree1Icon className={classes.icon2} />,
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
                      icon: <CheckDone1Icon className={classes.icon3} />,
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
                      icon: <PieChart3Icon className={classes.icon4} />,
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
                      icon: <Users1Icon className={classes.icon5} />,
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
                            icon: <SearchLgIcon className={classes.icon6} />,
                          }}
                        />
                        <div className={classes.text6}>Tìm kiếm</div>
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
                        icon: <Settings1Icon className={classes.icon7} />,
                      }}
                    />
                  ),
                }}
              />
              <_NavItemButton_CurrentFalseSiz
                className={classes._NavItemButton2}
                swap={{
                  icon: <Bell1Icon className={classes.icon8} />,
                }}
              />
            </div>
            <Dropdown_TypeAvatarOpenFalse classes={{ avatar: `${props.classes?.avatar || ''} ${classes.avatar}` }} />
          </div>
        </div>
      </div>
      <div className={classes.list}>
        <Frame1116606391
          className={classes.frame1116606392}
          classes={{ avatar: `${props.classes?.avatar2 || ''} ${classes.avatar2}` }}
        />
        <Frame1116606391
          className={classes.frame1116606393}
          classes={{ avatar: `${props.classes?.avatar3 || ''} ${classes.avatar3}` }}
        />
        <Frame1116606391
          className={classes.frame11166063932}
          classes={{ avatar: `${props.classes?.avatar4 || ''} ${classes.avatar4}` }}
        />
        <div className={classes.danhSachLopHoc}>Danh sách lớp học</div>
        <button className={classes.button}>
          <div className={classes.taoLopHoc}>Tạo lớp học</div>
        </button>
      </div>
      <Pagination_TypePageDefaultShap
        className={classes.pagination}
        text={{
          details: (
            <div className={classes.details}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>Trang </span>
                <span className={classes.label2}>1</span>
                <span className={classes.label3}> ... </span>
                <span className={classes.label4}>10</span>
              </p>
            </div>
          ),
        }}
      />
    </div>
  );
});

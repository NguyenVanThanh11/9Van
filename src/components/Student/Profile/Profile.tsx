import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { Bell1Icon } from './Bell1Icon.js';
import { CheckDone1 } from './CheckDone1/CheckDone1.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { HelpIcon_OpenFalseSupportingTe } from './HelpIcon_OpenFalseSupportingTe/HelpIcon_OpenFalseSupportingTe.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import { InputField_SizeMdTypeDefaultDe } from './InputField_SizeMdTypeDefaultDe/InputField_SizeMdTypeDefaultDe.js';
import { PieChart3 } from './PieChart3/PieChart3.js';
import { PieChart3Icon } from './PieChart3Icon.js';
import classes from './Profile.module.css';
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
    helpIcon?: boolean;
    hintText?: boolean;
    helpIcon2?: boolean;
    hintText2?: boolean;
    helpIcon3?: boolean;
    hintText3?: boolean;
    helpIcon4?: boolean;
    hintText4?: boolean;
    helpIcon5?: boolean;
    hintText5?: boolean;
    helpIcon6?: boolean;
    hintText6?: boolean;
  };
}
/* @figmaId 6225:24504 */
export const Profile: FC<Props> = memo(function Profile(props = {}) {
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
                        <div className={classes.text11}>Tìm kiếm</div>
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
                  <CheckDone1
                    swap={{
                      icon: <CheckDone1Icon className={classes.icon5} />,
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
                      icon: <PieChart3Icon className={classes.icon6} />,
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
                text: <div className={classes.text3}>Đề thi</div>,
              }}
            />
            <_NavItemBase_CurrentFalseColor
              className={classes._NavItemBase4}
              swap={{
                barChart1: (
                  <Users1
                    swap={{
                      icon: <Users1Icon className={classes.icon7} />,
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
      <button className={classes.button}>
        <div className={classes.OiVaiTro}>Đổi vai trò</div>
      </button>
      <div className={classes.form}>
        <InputField_SizeMdTypeDefaultDe
          className={classes.inputField}
          hide={{
            helpIcon: true,
            hintText: true,
          }}
          text={{
            label: <div className={classes.label}>Họ</div>,
            text: <div className={classes.text5}>Nhập họ </div>,
          }}
        />
        <InputField_SizeMdTypeDefaultDe
          className={classes.inputField2}
          hide={{
            helpIcon: true,
            hintText: true,
          }}
          text={{
            text: <div className={classes.text6}>Nhập email</div>,
          }}
        />
        <InputField_SizeMdTypeDefaultDe
          className={classes.inputField3}
          hide={{
            helpIcon: true,
            hintText: true,
          }}
          text={{
            label: <div className={classes.label2}>Email phụ huynh</div>,
            text: <div className={classes.text7}>Nhập email của phụ huynh</div>,
          }}
        />
        <InputField_SizeMdTypeDefaultDe
          className={classes.inputField4}
          hide={{
            helpIcon: true,
            hintText: true,
          }}
          text={{
            label: <div className={classes.label3}>Trường</div>,
            text: <div className={classes.text8}>Nhập email</div>,
          }}
        />
        <InputField_SizeMdTypeDefaultDe
          className={classes.inputField5}
          hide={{
            helpIcon: true,
            hintText: true,
          }}
          text={{
            label: <div className={classes.label4}>SĐT</div>,
            text: <div className={classes.text9}>Nhập số điện thoại</div>,
          }}
        />
      </div>
      <InputField_SizeMdTypeDefaultDe
        className={classes.inputField6}
        hide={{
          helpIcon: true,
          hintText: true,
        }}
        text={{
          label: <div className={classes.label5}>Tên</div>,
          text: <div className={classes.text10}>Nhập tên</div>,
        }}
      />
      <div className={classes.thongTinCaNhan}>Thông tin cá nhân</div>
      <button className={classes.button2}>
        <div className={classes.luu}>Lưu</div>
      </button>
      <div className={classes.rectangle3257}></div>
      <div className={classes.hocSinh}>Học sinh</div>
      <div className={classes.inputWithLabel2}>
        <div className={classes.label6}>Số dư tài khoản</div>
        <div className={classes.input2}>
          <div className={classes.content5}>
            <div className={classes.text12}>5.000.000 VND</div>
            <div className={classes.lichSuGiaoDich}>Lịch sử giao dịch</div>
          </div>
        </div>
      </div>
      <button className={classes.button3}>
        <div className={classes.napThem}>Nạp thêm</div>
      </button>
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentFalseSiz } from './_TabButtonBase_CurrentFalseSiz/_TabButtonBase_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentTrueSize } from './_TabButtonBase_CurrentTrueSize/_TabButtonBase_CurrentTrueSize.js';
import { Avatar_SizeMdPlaceholderFalseT2 } from './Avatar_SizeMdPlaceholderFalseT2/Avatar_SizeMdPlaceholderFalseT2.js';
import { Badge_SizeSmIconDotColorSucces } from './Badge_SizeSmIconDotColorSucces/Badge_SizeSmIconDotColorSucces.js';
import { Badge_SizeSmIconFalseColorPrim } from './Badge_SizeSmIconFalseColorPrim/Badge_SizeSmIconFalseColorPrim.js';
import { Bell1Icon } from './Bell1Icon.js';
import { Button_SizeMdHierarchyPrimaryI } from './Button_SizeMdHierarchyPrimaryI/Button_SizeMdHierarchyPrimaryI.js';
import { Button_SizeMdHierarchySecondar2 } from './Button_SizeMdHierarchySecondar2/Button_SizeMdHierarchySecondar2.js';
import { Button_SizeMdHierarchySecondar } from './Button_SizeMdHierarchySecondar/Button_SizeMdHierarchySecondar.js';
import { Button_SizeMdHierarchyTertiary } from './Button_SizeMdHierarchyTertiary/Button_SizeMdHierarchyTertiary.js';
import { CheckDone1 } from './CheckDone1/CheckDone1.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import { DividerIcon } from './DividerIcon.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { Dropdown_TypeIconOpenFalse } from './Dropdown_TypeIconOpenFalse/Dropdown_TypeIconOpenFalse.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import { Pagination_TypeCardDefaultShap } from './Pagination_TypeCardDefaultShap/Pagination_TypeCardDefaultShap.js';
import { PieChart3 } from './PieChart3/PieChart3.js';
import { PieChart3Icon } from './PieChart3Icon.js';
import { SearchLg } from './SearchLg/SearchLg.js';
import { SearchLgIcon } from './SearchLgIcon.js';
import { Settings1 } from './Settings1/Settings1.js';
import { Settings1Icon } from './Settings1Icon.js';
import { TableCell_StyleBadgeSupporting } from './TableCell_StyleBadgeSupporting/TableCell_StyleBadgeSupporting.js';
import { TableCell_StyleLeadAvatarCheck } from './TableCell_StyleLeadAvatarCheck/TableCell_StyleLeadAvatarCheck.js';
import { TableCell_StyleTextSupportingT } from './TableCell_StyleTextSupportingT/TableCell_StyleTextSupportingT.js';
import { TableHeader_HelpIconFalseArrow2 } from './TableHeader_HelpIconFalseArrow2/TableHeader_HelpIconFalseArrow2.js';
import { TableHeader_HelpIconFalseArrow } from './TableHeader_HelpIconFalseArrow/TableHeader_HelpIconFalseArrow.js';
import { TableHeader_HelpIconTrueArrowF } from './TableHeader_HelpIconTrueArrowF/TableHeader_HelpIconTrueArrowF.js';
import { TableHeaderCell_TextTrueCheckb2 } from './TableHeaderCell_TextTrueCheckb2/TableHeaderCell_TextTrueCheckb2.js';
import { TableHeaderCell_TextTrueCheckb } from './TableHeaderCell_TextTrueCheckb/TableHeaderCell_TextTrueCheckb.js';
import classes from './ThanhVien.module.css';
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
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
    placeholder5?: boolean;
    placeholder6?: boolean;
    checkbox?: boolean;
    checkbox2?: boolean;
    checkbox3?: boolean;
    checkbox4?: boolean;
    checkbox5?: boolean;
    checkbox6?: boolean;
    checkbox7?: boolean;
    checkbox8?: boolean;
    checkbox9?: boolean;
    checkbox10?: boolean;
    _Dot5?: boolean;
    _Dot6?: boolean;
  };
}
/* @figmaId 6225:24164 */
export const ThanhVien: FC<Props> = memo(function ThanhVien(props = {}) {
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
                        <div className={classes.text45}>Tìm kiếm</div>
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
        <_TabButtonBase_CurrentFalseSiz
          className={classes._TabButtonBase}
          text={{
            text: <div className={classes.text5}>Bảng tin</div>,
          }}
        />
        <_TabButtonBase_CurrentTrueSize
          className={classes._TabButtonBase2}
          text={{
            text: <div className={classes.text6}>Mọi người</div>,
          }}
        />
      </div>
      <div className={classes.table}>
        <div className={classes.cardHeader}>
          <div className={classes.content5}>
            <div className={classes.textAndSupportingText}>
              <div className={classes.textAndBadge}>
                <div className={classes.text46}>Lớp 6A1</div>
                <Badge_SizeSmIconFalseColorPrim
                  text={{
                    text: <div className={classes.text7}>20 học sinh</div>,
                  }}
                />
              </div>
            </div>
          </div>
          <div className={classes.divider}>
            <DividerIcon className={classes.icon9} />
          </div>
        </div>
        <div className={classes.content6}>
          <div className={classes.column}>
            <TableHeaderCell_TextTrueCheckb
              className={classes.tableHeaderCell}
              swap={{
                tableHeader: (
                  <TableHeader_HelpIconFalseArrow2
                    text={{
                      text: <div className={classes.text12}>Họ tên</div>,
                    }}
                  />
                ),
              }}
              hide={{
                checkbox: true,
              }}
            />
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell}
              classes={{ avatar: classes.avatar2 }}
              hide={{
                checkbox: true,
              }}
              text={{
                supportingText: <div className={classes.supportingText}>@olivia</div>,
              }}
            />
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell2}
              classes={{ avatar: classes.avatar3 }}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text13}>Phoenix Baker</div>,
                supportingText: <div className={classes.supportingText2}>@phoenix</div>,
              }}
            />
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell3}
              classes={{ avatar: classes.avatar4 }}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text14}>Lana Steiner</div>,
                supportingText: <div className={classes.supportingText3}>@lana</div>,
              }}
            />
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell4}
              classes={{ avatar: classes.avatar5 }}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text15}>Demi Wilkinson</div>,
                supportingText: <div className={classes.supportingText4}>@demi</div>,
              }}
            />
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell5}
              swap={{
                avatar: (
                  <Avatar_SizeMdPlaceholderFalseT2
                    text={{
                      text: <div className={classes.text16}>CW</div>,
                    }}
                  />
                ),
              }}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text17}>Candice Wu</div>,
                supportingText: <div className={classes.supportingText5}>@candice</div>,
              }}
            />
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell6}
              classes={{ avatar: classes.avatar6 }}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text18}>Natali Craig</div>,
                supportingText: <div className={classes.supportingText6}>@natali</div>,
              }}
            />
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell7}
              classes={{ avatar: classes.avatar7 }}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text19}>Drew Cano</div>,
                supportingText: <div className={classes.supportingText7}>@drew</div>,
              }}
            />
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell8}
              classes={{ avatar: classes.avatar8 }}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text20}>Andi Lane</div>,
                supportingText: <div className={classes.supportingText8}>@andi</div>,
              }}
            />
            <TableCell_StyleLeadAvatarCheck
              className={classes.tableCell9}
              classes={{ avatar: classes.avatar9 }}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text21}>Kate Morrison</div>,
                supportingText: <div className={classes.supportingText9}>@kate</div>,
              }}
            />
          </div>
          <div className={classes.column2}>
            <TableHeaderCell_TextTrueCheckb2
              className={classes.tableHeaderCell2}
              swap={{
                tableHeader: (
                  <TableHeader_HelpIconFalseArrow
                    text={{
                      text: <div className={classes.text22}>Trạng thái</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell10}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text23}>Đang hoạt động</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell11}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text24}>Đang hoạt động</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell12}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text25}>Đang hoạt động</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell13}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text26}>Đang hoạt động</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell14}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text27}>Đang hoạt động</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell15}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text28}>Đang hoạt động</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell16}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    className={classes.badge}
                    hide={{
                      _Dot: true,
                    }}
                    text={{
                      text: <div className={classes.text29}>Hoạt động 5 phút trước</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell17}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    className={classes.badge2}
                    hide={{
                      _Dot: true,
                    }}
                    text={{
                      text: <div className={classes.text30}>Hoạt động 5 phút trước</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleBadgeSupporting
              className={classes.tableCell18}
              swap={{
                badge: (
                  <Badge_SizeSmIconDotColorSucces
                    text={{
                      text: <div className={classes.text31}>Đang hoạt động</div>,
                    }}
                  />
                ),
              }}
            />
          </div>
          <div className={classes.column3}>
            <TableHeaderCell_TextTrueCheckb2
              className={classes.tableHeaderCell3}
              swap={{
                tableHeader: (
                  <TableHeader_HelpIconTrueArrowF
                    text={{
                      text: <div className={classes.text32}>Vai trò</div>,
                    }}
                  />
                ),
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell19}
              text={{
                text: <div className={classes.text33}>Giáo viên</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell20}
              text={{
                text: <div className={classes.text34}>Học sinh</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell21}
              text={{
                text: <div className={classes.text35}>Học sinh</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell22}
              text={{
                text: <div className={classes.text36}>Học sinh</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell23}
              text={{
                text: <div className={classes.text37}>Học sinh</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell24}
              text={{
                text: <div className={classes.text38}>Học sinh</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell25}
              text={{
                text: <div className={classes.text39}>Học sinh</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell26}
              text={{
                text: <div className={classes.text40}>Học sinh</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell27}
              text={{
                text: <div className={classes.text41}>Học sinh</div>,
              }}
            />
          </div>
          <div className={classes.column4}>
            <TableHeaderCell_TextTrueCheckb2
              className={classes.tableHeaderCell4}
              text={{
                text: <div className={classes.text42}>Email</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell28}
              text={{
                text: <div className={classes.oliviaUntitleduiCom}>olivia@untitledui.com</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell29}
              text={{
                text: <div className={classes.phoenixUntitleduiCom}>phoenix@untitledui.com</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell30}
              text={{
                text: <div className={classes.lanaUntitleduiCom}>lana@untitledui.com</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell31}
              text={{
                text: <div className={classes.demiUntitleduiCom}>demi@untitledui.com</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell32}
              text={{
                text: <div className={classes.candiceUntitleduiCom}>candice@untitledui.com</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell33}
              text={{
                text: <div className={classes.nataliUntitleduiCom}>natali@untitledui.com</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell34}
              text={{
                text: <div className={classes.drewUntitleduiCom}>drew@untitledui.com</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell35}
              text={{
                text: <div className={classes.andiUntitleduiCom}>andi@untitledui.com</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell36}
              text={{
                text: <div className={classes.kateUntitleduiCom}>kate@untitledui.com</div>,
              }}
            />
          </div>
        </div>
        <Pagination_TypeCardDefaultShap
          text={{
            text: <div className={classes.text43}>Trang trước</div>,
            text2: <div className={classes.text44}>Trang sau</div>,
          }}
        />
      </div>
    </div>
  );
});

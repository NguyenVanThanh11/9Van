import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentFalseSiz } from './_TabButtonBase_CurrentFalseSiz/_TabButtonBase_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentTrueSize } from './_TabButtonBase_CurrentTrueSize/_TabButtonBase_CurrentTrueSize.js';
import classes from './AGiaoChoLop.module.css';
import { Bell1Icon } from './Bell1Icon.js';
import { CardHeader_AvatarFalseBadgeFal } from './CardHeader_AvatarFalseBadgeFal/CardHeader_AvatarFalseBadgeFal.js';
import { CheckDone1 } from './CheckDone1/CheckDone1.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import { LayersThree1 } from './LayersThree1/LayersThree1.js';
import { LayersThree1Icon } from './LayersThree1Icon.js';
import { Pagination_TypeCardDefaultShap } from './Pagination_TypeCardDefaultShap/Pagination_TypeCardDefaultShap.js';
import { PieChart3 } from './PieChart3/PieChart3.js';
import { PieChart3Icon } from './PieChart3Icon.js';
import { SearchLg } from './SearchLg/SearchLg.js';
import { SearchLgIcon } from './SearchLgIcon.js';
import { Settings1 } from './Settings1/Settings1.js';
import { Settings1Icon } from './Settings1Icon.js';
import { TableCell_StyleActionButtonsSu } from './TableCell_StyleActionButtonsSu/TableCell_StyleActionButtonsSu.js';
import { TableCell_StyleLeadIconCheckbo } from './TableCell_StyleLeadIconCheckbo/TableCell_StyleLeadIconCheckbo.js';
import { TableCell_StyleTextSupportingT } from './TableCell_StyleTextSupportingT/TableCell_StyleTextSupportingT.js';
import { TableHeader_HelpIconFalseArrow2 } from './TableHeader_HelpIconFalseArrow2/TableHeader_HelpIconFalseArrow2.js';
import { TableHeaderCell_TextFalseCheck } from './TableHeaderCell_TextFalseCheck/TableHeaderCell_TextFalseCheck.js';
import { TableHeaderCell_TextTrueCheckb2 } from './TableHeaderCell_TextTrueCheckb2/TableHeaderCell_TextTrueCheckb2.js';
import { TableHeaderCell_TextTrueCheckb } from './TableHeaderCell_TextTrueCheckb/TableHeaderCell_TextTrueCheckb.js';
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
    checkbox?: boolean;
    checkbox2?: boolean;
    featuredIcon?: boolean;
    checkbox3?: boolean;
    featuredIcon2?: boolean;
    textAndSupportingText?: boolean;
    checkbox4?: boolean;
    featuredIcon3?: boolean;
    textAndSupportingText2?: boolean;
    checkbox5?: boolean;
    featuredIcon4?: boolean;
    textAndSupportingText3?: boolean;
    checkbox6?: boolean;
    featuredIcon5?: boolean;
    textAndSupportingText4?: boolean;
    checkbox7?: boolean;
    featuredIcon6?: boolean;
    textAndSupportingText5?: boolean;
    text?: boolean;
    text2?: boolean;
    text3?: boolean;
    text4?: boolean;
    text5?: boolean;
    text6?: boolean;
    text7?: boolean;
    text8?: boolean;
    text9?: boolean;
    text10?: boolean;
    text11?: boolean;
    text12?: boolean;
    text13?: boolean;
    text14?: boolean;
    text15?: boolean;
    text16?: boolean;
    text17?: boolean;
    text18?: boolean;
    text19?: boolean;
    text20?: boolean;
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
  };
}
/* @figmaId 6222:19673 */
export const AGiaoChoLop: FC<Props> = memo(function AGiaoChoLop(props = {}) {
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
                        <div className={classes.text22}>Tìm kiếm</div>
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
      <div className={classes.frame1116606394}>
        <_TabButtonBase_CurrentFalseSiz
          className={classes._TabButtonBase}
          text={{
            text: <div className={classes.text6}>Danh sách học sinh</div>,
          }}
        />
        <_TabButtonBase_CurrentTrueSize
          className={classes._TabButtonBase2}
          text={{
            text: <div className={classes.text7}>Bài đã giao</div>,
          }}
        />
      </div>
      <div className={classes.table}>
        <div className={classes.content5}>
          <div className={classes.column}>
            <TableHeaderCell_TextTrueCheckb
              className={classes.tableHeaderCell}
              swap={{
                tableHeader: (
                  <TableHeader_HelpIconFalseArrow2
                    text={{
                      text: <div className={classes.text8}>Đề bài</div>,
                    }}
                  />
                ),
              }}
              hide={{
                checkbox: true,
              }}
            />
            <TableCell_StyleLeadIconCheckbo
              className={classes.tableCell}
              hide={{
                checkbox: true,
                featuredIcon: true,
              }}
              text={{
                text: <div className={classes.text9}>Bàn luận về hiện tượng bạo lực học đường</div>,
                supportingText: <div className={classes.supportingText}>Viết 1 đoạn văn 200 chữ</div>,
              }}
            />
            <TableCell_StyleLeadIconCheckbo
              className={classes.tableCell2}
              hide={{
                checkbox: true,
                featuredIcon: true,
                textAndSupportingText: true,
              }}
            />
            <TableCell_StyleLeadIconCheckbo
              className={classes.tableCell3}
              hide={{
                checkbox: true,
                featuredIcon: true,
                textAndSupportingText: true,
              }}
            />
            <TableCell_StyleLeadIconCheckbo
              className={classes.tableCell4}
              hide={{
                checkbox: true,
                featuredIcon: true,
                textAndSupportingText: true,
              }}
            />
            <TableCell_StyleLeadIconCheckbo
              className={classes.tableCell5}
              hide={{
                checkbox: true,
                featuredIcon: true,
                textAndSupportingText: true,
              }}
            />
            <TableCell_StyleLeadIconCheckbo
              className={classes.tableCell6}
              hide={{
                checkbox: true,
                featuredIcon: true,
                textAndSupportingText: true,
              }}
            />
          </div>
          <div className={classes.column2}>
            <TableHeaderCell_TextTrueCheckb2
              className={classes.tableHeaderCell2}
              text={{
                text: <div className={classes.text10}>Đã nộp</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell7}
              text={{
                text: <div className={classes.text11}>15/25</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell8}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell9}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell10}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell11}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell12}
              hide={{
                text: true,
              }}
            />
          </div>
          <div className={classes.column3}>
            <TableHeaderCell_TextTrueCheckb2
              className={classes.tableHeaderCell3}
              text={{
                text: <div className={classes.text12}>Ngày giao</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell13}
              text={{
                text: <div className={classes.text13}>01/01/2024</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell14}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell15}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell16}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell17}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell18}
              hide={{
                text: true,
              }}
            />
          </div>
          <div className={classes.column4}>
            <TableHeaderCell_TextTrueCheckb2
              className={classes.tableHeaderCell4}
              text={{
                text: <div className={classes.text14}>Hạn nộp</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell19}
              text={{
                text: <div className={classes.text15}>18/01/2024</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell20}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell21}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell22}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell23}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell24}
              hide={{
                text: true,
              }}
            />
          </div>
          <div className={classes.column5}>
            <TableHeaderCell_TextTrueCheckb2
              className={classes.tableHeaderCell5}
              text={{
                text: <div className={classes.text16}>Ghi chú</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell25}
              text={{
                text: <div className={classes.text17}>Không</div>,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell26}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell27}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell28}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell29}
              hide={{
                text: true,
              }}
            />
            <TableCell_StyleTextSupportingT
              className={classes.tableCell30}
              hide={{
                text: true,
              }}
            />
          </div>
          <div className={classes.column6}>
            <TableHeaderCell_TextFalseCheck className={classes.tableHeaderCell6} />
            <TableCell_StyleActionButtonsSu
              className={classes.tableCell31}
              text={{
                text: <div className={classes.text18}>Xóa</div>,
                text2: <div className={classes.text19}>Sửa</div>,
              }}
            />
          </div>
        </div>
        <Pagination_TypeCardDefaultShap
          text={{
            text: <div className={classes.text20}>Trang trước</div>,
            text2: <div className={classes.text21}>Trang sau</div>,
          }}
        />
      </div>
    </div>
  );
});

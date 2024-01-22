import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentTrueSize } from './_TabButtonBase_CurrentTrueSize/_TabButtonBase_CurrentTrueSize.js';
import { Avatar_SizeMdPlaceholderFalseT2 } from './Avatar_SizeMdPlaceholderFalseT2/Avatar_SizeMdPlaceholderFalseT2.js';
import { Badge_SizeSmIconDotColorSucces } from './Badge_SizeSmIconDotColorSucces/Badge_SizeSmIconDotColorSucces.js';
import { Badge_SizeSmIconFalseColorPrim } from './Badge_SizeSmIconFalseColorPrim/Badge_SizeSmIconFalseColorPrim.js';
import classes from './BaiTap.module.css';
import { Bell1Icon } from './Bell1Icon.js';
import { BookClosed } from './BookClosed/BookClosed.js';
import { BookClosedIcon2 } from './BookClosedIcon2.js';
import { BookClosedIcon3 } from './BookClosedIcon3.js';
import { BookClosedIcon } from './BookClosedIcon.js';
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
/* @figmaId 6225:24197 */
export const BaiTap: FC<Props> = memo(function BaiTap(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.content8}>
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
          <div className={classes.content9}>
            <div className={classes.logo}>
              <div className={classes._9VAN}>9VAN</div>
            </div>
          </div>
          <div className={classes.content10}>
            <div className={classes.actions}>
              <div className={classes.search}>
                <div className={classes.inputDropdown}>
                  <div className={classes.inputWithLabel}>
                    <div className={classes.input}>
                      <div className={classes.content11}>
                        <SearchLg
                          className={classes.searchLg}
                          swap={{
                            icon: <SearchLgIcon className={classes.icon5} />,
                          }}
                        />
                        <div className={classes.text44}>Tìm kiếm</div>
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
            text: <div className={classes.text5}>Bài tập về nhà</div>,
          }}
        />
      </div>
      <div className={classes.content12}>
        <div className={classes.featuredIcon}>
          <div className={classes.placeholder}>
            <BookClosed
              className={classes.bookClosed}
              swap={{
                icon: <BookClosedIcon className={classes.icon11} />,
              }}
            />
          </div>
        </div>
        <div className={classes.textAndSupportingText10}>
          <div className={classes.text45}>Bài tập làm văn số 1</div>
          <div className={classes.supportingText10}>Bàn luận về hiện tượng bạo lực học đường</div>
        </div>
        <div className={classes.han1212024}>Hạn 12/01/2024</div>
      </div>
      <div className={classes.content13}>
        <div className={classes.featuredIcon2}>
          <div className={classes.placeholder2}>
            <BookClosed
              className={classes.bookClosed2}
              swap={{
                icon: <BookClosedIcon2 className={classes.icon12} />,
              }}
            />
          </div>
        </div>
        <div className={classes.textAndSupportingText11}>
          <div className={classes.text46}>Bài tập làm văn số 2</div>
          <div className={classes.supportingText11}>Bàn luận về hiện tượng bạo lực học đường</div>
        </div>
        <div className={classes.han12120242}>Hạn 12/01/2024</div>
      </div>
      <div className={classes.content14}>
        <div className={classes.featuredIcon3}>
          <div className={classes.placeholder3}>
            <BookClosed
              className={classes.bookClosed3}
              swap={{
                icon: <BookClosedIcon3 className={classes.icon13} />,
              }}
            />
          </div>
        </div>
        <div className={classes.textAndSupportingText12}>
          <div className={classes.text47}>Bài tập làm văn số 3</div>
          <div className={classes.supportingText12}>Bàn luận về hiện tượng bạo lực học đường</div>
        </div>
        <div className={classes.han12120243}>Hạn 12/01/2024</div>
      </div>
    </div>
  );
});

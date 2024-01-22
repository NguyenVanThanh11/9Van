import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _PaginationNumberBase_ShapeSqu2 } from './_PaginationNumberBase_ShapeSqu2/_PaginationNumberBase_ShapeSqu2.js';
import { _PaginationNumberBase_ShapeSqu } from './_PaginationNumberBase_ShapeSqu/_PaginationNumberBase_ShapeSqu.js';
import { _TabButtonBase_CurrentFalseSiz } from './_TabButtonBase_CurrentFalseSiz/_TabButtonBase_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentTrueSize } from './_TabButtonBase_CurrentTrueSize/_TabButtonBase_CurrentTrueSize.js';
import { Avatar_SizeMdPlaceholderFalseT2 } from './Avatar_SizeMdPlaceholderFalseT2/Avatar_SizeMdPlaceholderFalseT2.js';
import { Badge_SizeSmIconDotColorSucces } from './Badge_SizeSmIconDotColorSucces/Badge_SizeSmIconDotColorSucces.js';
import { Badge_SizeSmIconFalseColorPrim } from './Badge_SizeSmIconFalseColorPrim/Badge_SizeSmIconFalseColorPrim.js';
import { Bell1Icon } from './Bell1Icon.js';
import { Button_SizeMdHierarchyLinkColo } from './Button_SizeMdHierarchyLinkColo/Button_SizeMdHierarchyLinkColo.js';
import { Button_SizeMdHierarchyPrimaryI } from './Button_SizeMdHierarchyPrimaryI/Button_SizeMdHierarchyPrimaryI.js';
import { Button_SizeMdHierarchySecondar2 } from './Button_SizeMdHierarchySecondar2/Button_SizeMdHierarchySecondar2.js';
import { Button_SizeMdHierarchySecondar } from './Button_SizeMdHierarchySecondar/Button_SizeMdHierarchySecondar.js';
import { Button_SizeMdHierarchyTertiary } from './Button_SizeMdHierarchyTertiary/Button_SizeMdHierarchyTertiary.js';
import { Button_SizeSmHierarchySecondar } from './Button_SizeSmHierarchySecondar/Button_SizeSmHierarchySecondar.js';
import { CardHeader_AvatarFalseBadgeFal } from './CardHeader_AvatarFalseBadgeFal/CardHeader_AvatarFalseBadgeFal.js';
import { CheckDone1 } from './CheckDone1/CheckDone1.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import { DividerIcon } from './DividerIcon.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { Dropdown_TypeIconOpenFalse } from './Dropdown_TypeIconOpenFalse/Dropdown_TypeIconOpenFalse.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import classes from './LuyenERieng.module.css';
import { Pagination_TypeCardDefaultShap } from './Pagination_TypeCardDefaultShap/Pagination_TypeCardDefaultShap.js';
import { PieChart3 } from './PieChart3/PieChart3.js';
import { PieChart3Icon } from './PieChart3Icon.js';
import { SearchLg } from './SearchLg/SearchLg.js';
import { SearchLgIcon } from './SearchLgIcon.js';
import { Settings1 } from './Settings1/Settings1.js';
import { Settings1Icon } from './Settings1Icon.js';
import { TableCell_StyleBadgeSupporting } from './TableCell_StyleBadgeSupporting/TableCell_StyleBadgeSupporting.js';
import { TableCell_StyleLeadAvatarCheck } from './TableCell_StyleLeadAvatarCheck/TableCell_StyleLeadAvatarCheck.js';
import { TableCell_StyleLeadIconCheckbo } from './TableCell_StyleLeadIconCheckbo/TableCell_StyleLeadIconCheckbo.js';
import { TableCell_StyleTextSupportingT } from './TableCell_StyleTextSupportingT/TableCell_StyleTextSupportingT.js';
import { TableHeader_HelpIconFalseArrow2 } from './TableHeader_HelpIconFalseArrow2/TableHeader_HelpIconFalseArrow2.js';
import { TableHeader_HelpIconFalseArrow } from './TableHeader_HelpIconFalseArrow/TableHeader_HelpIconFalseArrow.js';
import { TableHeader_HelpIconTrueArrowF } from './TableHeader_HelpIconTrueArrowF/TableHeader_HelpIconTrueArrowF.js';
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
    checkbox11?: boolean;
    checkbox12?: boolean;
    featuredIcon?: boolean;
    checkbox13?: boolean;
    featuredIcon2?: boolean;
    textAndSupportingText?: boolean;
    checkbox14?: boolean;
    featuredIcon3?: boolean;
    textAndSupportingText2?: boolean;
    checkbox15?: boolean;
    featuredIcon4?: boolean;
    textAndSupportingText3?: boolean;
    checkbox16?: boolean;
    featuredIcon5?: boolean;
    textAndSupportingText4?: boolean;
    checkbox17?: boolean;
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
    placeholder7?: boolean;
    placeholder8?: boolean;
  };
}
/* @figmaId 6225:24332 */
export const LuyenERieng: FC<Props> = memo(function LuyenERieng(props = {}) {
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
                        <div className={classes.text58}>Tìm kiếm</div>
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
      <div className={classes.header_content}>
        <_TabButtonBase_CurrentFalseSiz
          className={classes._TabButtonBase}
          text={{
            text: <div className={classes.text43}>Tự luyện đề chung</div>,
          }}
        />
        <_TabButtonBase_CurrentTrueSize
          className={classes._TabButtonBase2}
          text={{
            text: <div className={classes.text44}>Tự luyện đề riêng</div>,
          }}
        />
      </div>
      <div className={classes.table}>
        <div className={classes.table2}>
          <div className={classes.content12}>
            <div className={classes.column}>
              <TableHeaderCell_TextTrueCheckb
                className={classes.tableHeaderCell5}
                swap={{
                  tableHeader: (
                    <TableHeader_HelpIconFalseArrow2
                      text={{
                        text: <div className={classes.text45}>Đề bài</div>,
                      }}
                    />
                  ),
                }}
                hide={{
                  checkbox: true,
                }}
              />
              <TableCell_StyleLeadIconCheckbo
                className={classes.tableCell37}
                hide={{
                  checkbox: true,
                  featuredIcon: true,
                }}
                text={{
                  text: <div className={classes.text46}>Bàn luận về hiện tượng bạo lực học đường</div>,
                  supportingText: <div className={classes.supportingText10}>Viết 1 đoạn văn 200 chữ</div>,
                }}
              />
              <TableCell_StyleLeadIconCheckbo
                className={classes.tableCell38}
                hide={{
                  checkbox: true,
                  featuredIcon: true,
                  textAndSupportingText: true,
                }}
              />
              <TableCell_StyleLeadIconCheckbo
                className={classes.tableCell39}
                hide={{
                  checkbox: true,
                  featuredIcon: true,
                  textAndSupportingText: true,
                }}
              />
              <TableCell_StyleLeadIconCheckbo
                className={classes.tableCell40}
                hide={{
                  checkbox: true,
                  featuredIcon: true,
                  textAndSupportingText: true,
                }}
              />
              <TableCell_StyleLeadIconCheckbo
                className={classes.tableCell41}
                hide={{
                  checkbox: true,
                  featuredIcon: true,
                  textAndSupportingText: true,
                }}
              />
              <TableCell_StyleLeadIconCheckbo
                className={classes.tableCell42}
                hide={{
                  checkbox: true,
                  featuredIcon: true,
                  textAndSupportingText: true,
                }}
              />
            </div>
            <div className={classes.column2}>
              <TableHeaderCell_TextTrueCheckb2
                className={classes.tableHeaderCell6}
                text={{
                  text: <div className={classes.text47}>Ngày giao</div>,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell43}
                text={{
                  text: <div className={classes.text48}>01/01/2024</div>,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell44}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell45}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell46}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell47}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell48}
                hide={{
                  text: true,
                }}
              />
            </div>
            <div className={classes.column3}>
              <TableHeaderCell_TextTrueCheckb2
                className={classes.tableHeaderCell7}
                text={{
                  text: <div className={classes.text49}>Hạn nộp</div>,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell49}
                text={{
                  text: <div className={classes.text50}>18/01/2024</div>,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell50}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell51}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell52}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell53}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell54}
                hide={{
                  text: true,
                }}
              />
            </div>
            <div className={classes.column4}>
              <TableHeaderCell_TextTrueCheckb2
                className={classes.tableHeaderCell8}
                text={{
                  text: <div className={classes.text51}>Ghi chú</div>,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell55}
                text={{
                  text: <div className={classes.text52}>Không</div>,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell56}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell57}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell58}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell59}
                hide={{
                  text: true,
                }}
              />
              <TableCell_StyleTextSupportingT
                className={classes.tableCell60}
                hide={{
                  text: true,
                }}
              />
            </div>
            <div className={classes.column5}>
              <TableHeaderCell_TextFalseCheck className={classes.tableHeaderCell9} />
              <div className={classes.tableCell61}>
                <Button_SizeMdHierarchyLinkColo
                  hide={{
                    placeholder: true,
                    placeholder2: true,
                  }}
                  text={{
                    text: <div className={classes.text53}>Luyện đề</div>,
                  }}
                />
              </div>
            </div>
          </div>
          <Pagination_TypeCardDefaultShap
            text={{
              text: <div className={classes.text54}>Trang trước</div>,
              text2: <div className={classes.text55}>Trang sau</div>,
            }}
          />
        </div>
        <div className={classes.pagination2}>
          <Button_SizeSmHierarchySecondar
            text={{
              text: <div className={classes.text56}>Trang trước</div>,
            }}
          />
          <div className={classes.paginationNumbers2}>
            <_PaginationNumberBase_ShapeSqu />
            <_PaginationNumberBase_ShapeSqu2
              text={{
                number: <div className={classes.number}>2</div>,
              }}
            />
            <_PaginationNumberBase_ShapeSqu2
              text={{
                number: <div className={classes.number2}>3</div>,
              }}
            />
            <_PaginationNumberBase_ShapeSqu2
              text={{
                number: <div className={classes.number3}>...</div>,
              }}
            />
            <_PaginationNumberBase_ShapeSqu2
              text={{
                number: <div className={classes.number4}>8</div>,
              }}
            />
            <_PaginationNumberBase_ShapeSqu2
              text={{
                number: <div className={classes.number5}>9</div>,
              }}
            />
            <_PaginationNumberBase_ShapeSqu2
              text={{
                number: <div className={classes.number6}>10</div>,
              }}
            />
          </div>
          <Button_SizeSmHierarchySecondar
            text={{
              text: <div className={classes.text57}>Trang sau</div>,
            }}
          />
        </div>
      </div>
    </div>
  );
});

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
import { Badge_SizeSmIconIconLeadingCol } from './Badge_SizeSmIconIconLeadingCol/Badge_SizeSmIconIconLeadingCol.js';
import { Bell1Icon } from './Bell1Icon.js';
import { Button_SizeMdHierarchyPrimaryI } from './Button_SizeMdHierarchyPrimaryI/Button_SizeMdHierarchyPrimaryI.js';
import { Button_SizeMdHierarchySecondar2 } from './Button_SizeMdHierarchySecondar2/Button_SizeMdHierarchySecondar2.js';
import { Button_SizeMdHierarchySecondar } from './Button_SizeMdHierarchySecondar/Button_SizeMdHierarchySecondar.js';
import { Button_SizeMdHierarchyTertiary } from './Button_SizeMdHierarchyTertiary/Button_SizeMdHierarchyTertiary.js';
import { Button_SizeSmHierarchySecondar } from './Button_SizeSmHierarchySecondar/Button_SizeSmHierarchySecondar.js';
import { CheckDone1 } from './CheckDone1/CheckDone1.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import { DividerIcon } from './DividerIcon.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { Dropdown_TypeIconOpenFalse } from './Dropdown_TypeIconOpenFalse/Dropdown_TypeIconOpenFalse.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import classes from './LuyenE.module.css';
import { Pagination_TypeCardDefaultShap } from './Pagination_TypeCardDefaultShap/Pagination_TypeCardDefaultShap.js';
import { PieChart3 } from './PieChart3/PieChart3.js';
import { PieChart3Icon } from './PieChart3Icon.js';
import { SearchLg } from './SearchLg/SearchLg.js';
import { SearchLgIcon } from './SearchLgIcon.js';
import { Settings1 } from './Settings1/Settings1.js';
import { Settings1Icon } from './Settings1Icon.js';
import { TableCell_StyleActionButtonsSu } from './TableCell_StyleActionButtonsSu/TableCell_StyleActionButtonsSu.js';
import { TableCell_StyleBadgeSupporting } from './TableCell_StyleBadgeSupporting/TableCell_StyleBadgeSupporting.js';
import { TableCell_StyleLeadAvatarCheck } from './TableCell_StyleLeadAvatarCheck/TableCell_StyleLeadAvatarCheck.js';
import { TableCell_StyleLeadCheckboxSup } from './TableCell_StyleLeadCheckboxSup/TableCell_StyleLeadCheckboxSup.js';
import { TableCell_StyleTextSupportingT } from './TableCell_StyleTextSupportingT/TableCell_StyleTextSupportingT.js';
import { TableHeader_HelpIconFalseArrow2 } from './TableHeader_HelpIconFalseArrow2/TableHeader_HelpIconFalseArrow2.js';
import { TableHeader_HelpIconFalseArrow } from './TableHeader_HelpIconFalseArrow/TableHeader_HelpIconFalseArrow.js';
import { TableHeader_HelpIconTrueArrowF } from './TableHeader_HelpIconTrueArrowF/TableHeader_HelpIconTrueArrowF.js';
import { TableHeaderCell_TextFalseCheck } from './TableHeaderCell_TextFalseCheck/TableHeaderCell_TextFalseCheck.js';
import { TableHeaderCell_TextTrueCheckb2 } from './TableHeaderCell_TextTrueCheckb2/TableHeaderCell_TextTrueCheckb2.js';
import { TableHeaderCell_TextTrueCheckb3 } from './TableHeaderCell_TextTrueCheckb3/TableHeaderCell_TextTrueCheckb3.js';
import { TableHeaderCell_TextTrueCheckb4 } from './TableHeaderCell_TextTrueCheckb4/TableHeaderCell_TextTrueCheckb4.js';
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
    checkbox13?: boolean;
    checkbox14?: boolean;
    checkbox15?: boolean;
    checkbox16?: boolean;
    checkbox17?: boolean;
    checkbox18?: boolean;
    checkbox19?: boolean;
    checkbox20?: boolean;
    checkbox21?: boolean;
    button?: boolean;
    placeholder7?: boolean;
    placeholder8?: boolean;
    button2?: boolean;
    placeholder9?: boolean;
    placeholder10?: boolean;
    button3?: boolean;
    placeholder11?: boolean;
    placeholder12?: boolean;
    button4?: boolean;
    placeholder13?: boolean;
    placeholder14?: boolean;
    button5?: boolean;
    placeholder15?: boolean;
    placeholder16?: boolean;
    button6?: boolean;
    placeholder17?: boolean;
    placeholder18?: boolean;
    button7?: boolean;
    placeholder19?: boolean;
    placeholder20?: boolean;
    button8?: boolean;
    placeholder21?: boolean;
    placeholder22?: boolean;
    button9?: boolean;
    placeholder23?: boolean;
    placeholder24?: boolean;
    button10?: boolean;
    placeholder25?: boolean;
    placeholder26?: boolean;
  };
}
/* @figmaId 6225:24230 */
export const LuyenE: FC<Props> = memo(function LuyenE(props = {}) {
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
                        <div className={classes.text70}>Tìm kiếm</div>
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
            text: <div className={classes.text43}>Tự luyện đề của riêng</div>,
          }}
        />
        <_TabButtonBase_CurrentTrueSize
          className={classes._TabButtonBase2}
          text={{
            text: <div className={classes.text44}>Tự luyện đề chung</div>,
          }}
        />
      </div>
      <div className={classes.table}>
        <div className={classes.content12}>
          <div className={classes.column}>
            <TableHeaderCell_TextTrueCheckb3
              className={classes.tableHeaderCell5}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text45}>Khối</div>,
              }}
            />
            <TableCell_StyleLeadCheckboxSup
              className={classes.tableCell37}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text46}>6</div>,
              }}
            />
            <TableCell_StyleLeadCheckboxSup
              className={classes.tableCell38}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text47}>7</div>,
              }}
            />
            <TableCell_StyleLeadCheckboxSup
              className={classes.tableCell39}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text48}>6</div>,
              }}
            />
            <TableCell_StyleLeadCheckboxSup
              className={classes.tableCell40}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text49}>7</div>,
              }}
            />
            <TableCell_StyleLeadCheckboxSup
              className={classes.tableCell41}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text50}>8</div>,
              }}
            />
            <TableCell_StyleLeadCheckboxSup
              className={classes.tableCell42}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text51}>6</div>,
              }}
            />
            <TableCell_StyleLeadCheckboxSup
              className={classes.tableCell43}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text52}>7</div>,
              }}
            />
            <TableCell_StyleLeadCheckboxSup
              className={classes.tableCell44}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text53}>10</div>,
              }}
            />
            <TableCell_StyleLeadCheckboxSup
              className={classes.tableCell45}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text54}>9</div>,
              }}
            />
            <TableCell_StyleLeadCheckboxSup
              className={classes.tableCell46}
              hide={{
                checkbox: true,
              }}
              text={{
                text: <div className={classes.text55}>9</div>,
              }}
            />
          </div>
          <div className={classes.column2}>
            <TableHeaderCell_TextTrueCheckb4
              className={classes.tableHeaderCell6}
              text={{
                text: <div className={classes.text56}>Đề bài</div>,
              }}
            />
            <div className={classes.tableCell52}>
              <div className={classes.text71}>
                <p className={classes.labelWrapper}>Bàn luận về hiện tượng bạo lực học đường</p>
              </div>
            </div>
            <div className={classes.tableCell53}>
              <div className={classes.text72}>
                <div className={classes.textBlock}>
                  <p className={classes.labelWrapper2}>Bàn luận về hiện tượng hút thuốc lá điện tử trong học đường</p>
                </div>
                <div className={classes.textBlock2}>
                  <p className={classes.labelWrapper3}></p>
                </div>
                <div className={classes.textBlock3}>
                  <p className={classes.labelWrapper4}></p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell54}>
              <div className={classes.text73}>
                <div className={classes.textBlock4}>
                  <p className={classes.labelWrapper5}>Bàn luận về hiện tượng học vẹt, học tủ trong học sinh</p>
                </div>
                <div className={classes.textBlock5}>
                  <p className={classes.labelWrapper6}></p>
                </div>
                <div className={classes.textBlock6}>
                  <p className={classes.labelWrapper7}></p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell55}>
              <div className={classes.text74}>
                <div className={classes.textBlock7}>
                  <p className={classes.labelWrapper8}>
                    Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
                  </p>
                </div>
                <div className={classes.textBlock8}>
                  <p className={classes.labelWrapper9}></p>
                </div>
                <div className={classes.textBlock9}>
                  <p className={classes.labelWrapper10}></p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell56}>
              <div className={classes.text75}>
                <p className={classes.labelWrapper11}>
                  Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
                </p>
              </div>
            </div>
            <div className={classes.tableCell57}>
              <div className={classes.text76}>
                <div className={classes.textBlock10}>
                  <p className={classes.labelWrapper12}>
                    Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
                  </p>
                </div>
                <div className={classes.textBlock11}>
                  <p className={classes.labelWrapper13}></p>
                </div>
                <div className={classes.textBlock12}>
                  <p className={classes.labelWrapper14}></p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell58}>
              <div className={classes.text77}>
                <div className={classes.textBlock13}>
                  <p className={classes.labelWrapper15}>
                    Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
                  </p>
                </div>
                <div className={classes.textBlock14}>
                  <p className={classes.labelWrapper16}></p>
                </div>
                <div className={classes.textBlock15}>
                  <p className={classes.labelWrapper17}></p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell59}>
              <div className={classes.text78}>
                <div className={classes.textBlock16}>
                  <p className={classes.labelWrapper18}>
                    Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
                  </p>
                </div>
                <div className={classes.textBlock17}>
                  <p className={classes.labelWrapper19}></p>
                </div>
                <div className={classes.textBlock18}>
                  <p className={classes.labelWrapper20}></p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell60}>
              <div className={classes.text79}>
                <div className={classes.textBlock19}>
                  <p className={classes.labelWrapper21}>
                    Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
                  </p>
                </div>
                <div className={classes.textBlock20}>
                  <p className={classes.labelWrapper22}></p>
                </div>
                <div className={classes.textBlock21}>
                  <p className={classes.labelWrapper23}></p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell61}>
              <div className={classes.text80}>
                <div className={classes.textBlock22}>
                  <p className={classes.labelWrapper24}>
                    Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
                  </p>
                </div>
                <div className={classes.textBlock23}>
                  <p className={classes.labelWrapper25}></p>
                </div>
                <div className={classes.textBlock24}>
                  <p className={classes.labelWrapper26}></p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.column3}>
            <TableHeaderCell_TextTrueCheckb4
              className={classes.tableHeaderCell7}
              text={{
                text: <div className={classes.text57}>Bộ sách</div>,
              }}
            />
            <div className={classes.tableCell62}>
              <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN}>
                <div className={classes.textBlock25}>
                  <p className={classes.labelWrapper27}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                </div>
                <div className={classes.textBlock26}>
                  <p className={classes.labelWrapper28}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell63}>
              <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN2}>
                <div className={classes.textBlock27}>
                  <p className={classes.labelWrapper29}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                </div>
                <div className={classes.textBlock28}>
                  <p className={classes.labelWrapper30}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell64}>
              <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN3}>
                <div className={classes.textBlock29}>
                  <p className={classes.labelWrapper31}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                </div>
                <div className={classes.textBlock30}>
                  <p className={classes.labelWrapper32}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell65}>
              <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN4}>
                <div className={classes.textBlock31}>
                  <p className={classes.labelWrapper33}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                </div>
                <div className={classes.textBlock32}>
                  <p className={classes.labelWrapper34}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell66}>
              <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN5}>
                <div className={classes.textBlock33}>
                  <p className={classes.labelWrapper35}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                </div>
                <div className={classes.textBlock34}>
                  <p className={classes.labelWrapper36}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell67}>
              <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN6}>
                <div className={classes.textBlock35}>
                  <p className={classes.labelWrapper37}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                </div>
                <div className={classes.textBlock36}>
                  <p className={classes.labelWrapper38}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell68}>
              <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN7}>
                <div className={classes.textBlock37}>
                  <p className={classes.labelWrapper39}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                </div>
                <div className={classes.textBlock38}>
                  <p className={classes.labelWrapper40}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell69}>
              <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN8}>
                <div className={classes.textBlock39}>
                  <p className={classes.labelWrapper41}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                </div>
                <div className={classes.textBlock40}>
                  <p className={classes.labelWrapper42}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell70}>
              <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN9}>
                <div className={classes.textBlock41}>
                  <p className={classes.labelWrapper43}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                </div>
                <div className={classes.textBlock42}>
                  <p className={classes.labelWrapper44}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                </div>
              </div>
            </div>
            <div className={classes.tableCell71}>
              <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN10}>
                <div className={classes.textBlock43}>
                  <p className={classes.labelWrapper45}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                </div>
                <div className={classes.textBlock44}>
                  <p className={classes.labelWrapper46}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.column4}>
            <TableHeaderCell_TextFalseCheck className={classes.tableHeaderCell8} />
            <TableCell_StyleActionButtonsSu
              className={classes.tableCell47}
              hide={{
                button: true,
              }}
              text={{
                text: <div className={classes.text58}>Luyện đề</div>,
              }}
            />
            <TableCell_StyleActionButtonsSu
              hide={{
                button: true,
              }}
              text={{
                text: <div className={classes.text59}>Luyện đề</div>,
              }}
            />
            <TableCell_StyleActionButtonsSu
              className={classes.tableCell48}
              hide={{
                button: true,
              }}
              text={{
                text: <div className={classes.text60}>Luyện đề</div>,
              }}
            />
            <TableCell_StyleActionButtonsSu
              hide={{
                button: true,
              }}
              text={{
                text: <div className={classes.text61}>Luyện đề</div>,
              }}
            />
            <TableCell_StyleActionButtonsSu
              className={classes.tableCell49}
              hide={{
                button: true,
              }}
              text={{
                text: <div className={classes.text62}>Luyện đề</div>,
              }}
            />
            <TableCell_StyleActionButtonsSu
              hide={{
                button: true,
              }}
              text={{
                text: <div className={classes.text63}>Luyện đề</div>,
              }}
            />
            <TableCell_StyleActionButtonsSu
              className={classes.tableCell50}
              hide={{
                button: true,
              }}
              text={{
                text: <div className={classes.text64}>Luyện đề</div>,
              }}
            />
            <TableCell_StyleActionButtonsSu
              hide={{
                button: true,
              }}
              text={{
                text: <div className={classes.text65}>Luyện đề</div>,
              }}
            />
            <TableCell_StyleActionButtonsSu
              className={classes.tableCell51}
              hide={{
                button: true,
              }}
              text={{
                text: <div className={classes.text66}>Luyện đề</div>,
              }}
            />
            <TableCell_StyleActionButtonsSu
              hide={{
                button: true,
              }}
              text={{
                text: <div className={classes.text67}>Luyện đề</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.pagination2}>
          <Button_SizeSmHierarchySecondar
            text={{
              text: <div className={classes.text68}>Trang trước</div>,
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
              text: <div className={classes.text69}>Trang sau</div>,
            }}
          />
        </div>
      </div>
    </div>
  );
});

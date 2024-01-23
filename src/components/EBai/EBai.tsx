import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';


import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _NavItemDropdownBase_OpenFalse } from './_NavItemDropdownBase_OpenFalse/_NavItemDropdownBase_OpenFalse.js';
import { _NavItemDropdownBaseVariant2 } from './_NavItemDropdownBaseVariant2/_NavItemDropdownBaseVariant2.js';
import { _PaginationNumberBase_ShapeSqu2 } from './_PaginationNumberBase_ShapeSqu2/_PaginationNumberBase_ShapeSqu2.js';
import { _PaginationNumberBase_ShapeSqu } from './_PaginationNumberBase_ShapeSqu/_PaginationNumberBase_ShapeSqu.js';
import { _TabButtonBase_CurrentFalseSiz } from './_TabButtonBase_CurrentFalseSiz/_TabButtonBase_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentTrueSize } from './_TabButtonBase_CurrentTrueSize/_TabButtonBase_CurrentTrueSize.js';
import { Avatar_SizeSmPlaceholderFalseT } from './Avatar_SizeSmPlaceholderFalseT/Avatar_SizeSmPlaceholderFalseT.js';
import { Badge_SizeSmIconIconLeadingCol } from './Badge_SizeSmIconIconLeadingCol/Badge_SizeSmIconIconLeadingCol.js';
import { Bell1Icon } from './Bell1Icon.js';
import { Button_SizeSmHierarchySecondar } from './Button_SizeSmHierarchySecondar/Button_SizeSmHierarchySecondar.js';
import { CheckDone1 } from './CheckDone1/CheckDone1.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import classes from './EBai.module.css';
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
import { TableCell_StyleActionButtonsSu } from './TableCell_StyleActionButtonsSu/TableCell_StyleActionButtonsSu.js';
import { TableCell_StyleLeadCheckboxSup } from './TableCell_StyleLeadCheckboxSup/TableCell_StyleLeadCheckboxSup.js';
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
    _NavItemDropdownBase?: boolean;
    _Dot6?: boolean;
    barChart1?: boolean;
    badge6?: boolean;
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
    checkbox11?: boolean;
    placeholder?: boolean;
    placeholder2?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
    placeholder5?: boolean;
    placeholder6?: boolean;
    placeholder7?: boolean;
    placeholder8?: boolean;
    placeholder9?: boolean;
    placeholder10?: boolean;
    placeholder11?: boolean;
    placeholder12?: boolean;
    placeholder13?: boolean;
    placeholder14?: boolean;
    placeholder15?: boolean;
    placeholder16?: boolean;
    placeholder17?: boolean;
    placeholder18?: boolean;
    placeholder19?: boolean;
    placeholder20?: boolean;
    placeholder21?: boolean;
    placeholder22?: boolean;
    placeholder23?: boolean;
    placeholder24?: boolean;
    placeholder25?: boolean;
    placeholder26?: boolean;
    placeholder27?: boolean;
    placeholder28?: boolean;
    placeholder29?: boolean;
    placeholder30?: boolean;
    placeholder31?: boolean;
    placeholder32?: boolean;
    placeholder33?: boolean;
    placeholder34?: boolean;
    placeholder35?: boolean;
    placeholder36?: boolean;
    placeholder37?: boolean;
    placeholder38?: boolean;
    placeholder39?: boolean;
    placeholder40?: boolean;
  };
}
/* @figmaId 6223:23330 */
export const EBai: FC<Props> = memo(function EBai(props = {}) {
  
const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.baiTap}>
        <div className={classes.headerNavigation} style={{width: "100%"}}>
          <div className={classes.container}>
            <div  onClick={() => {
              navigate('/giao-vien');
            }} className={classes.content}>
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
                          <input style={{width: "100%", height: "100%", border: "none"}} className={classes.text45} placeholder="Tìm kiếm" />
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
                  text: <div  onClick={() => {
                    navigate('/giao-vien');
                  }} className={classes.text}>Trang chủ</div>,
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
                  text: <div  onClick={() => {
                    navigate('/lop-hoc');
                  }} className={classes.text2}>Lớp học</div>,
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
                  text: <div  onClick={() => {
                    navigate('/bai-tap');
                  }} className={classes.text3}>Bài tập</div>,
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
                  text: <div  onClick={() => {
                    navigate('/de-thi');
                  }} className={classes.text4}>Đề thi</div>,
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
                  text: <div  onClick={() => {
                    navigate('/profile');
                  }} className={classes.text5}>Hồ sơ</div>,
                }}
              />
            </div>
          </div>
        </div>
        <_NavItemDropdownBaseVariant2
          className={classes._NavItemDropdownBaseVariant2}
          hide={{
            _NavItemDropdownBase: true,
          }}
        />
        <_NavItemDropdownBase_OpenFalse
          className={classes._NavItemDropdownBase}
          classes={{ _NavItemBase: classes._NavItemBase6 }}
          hide={{
            barChart1: true,
          }}
          text={{
            text: <div className={classes.text6}>Khối</div>,
          }}
        />
        <_TabButtonBase_CurrentTrueSize
          className={classes._TabButtonBase}
          text={{
            text: <div className={classes.text7}>Kho đề chung</div>,
          }}
        />
        <_TabButtonBase_CurrentFalseSiz
          className={classes._TabButtonBase2}
          text={{
            text: <div className={classes.text8}>Đề của tôi</div>,
          }}
        />
        <div className={classes.table}>
          <div className={classes.content5}>
            <div className={classes.column}>
              <TableHeaderCell_TextTrueCheckb
                className={classes.tableHeaderCell}
                hide={{
                  checkbox: true,
                }}
                text={{
                  text: <div className={classes.text9}>Khối</div>,
                }}
              />
              <TableCell_StyleLeadCheckboxSup
                className={classes.tableCell}
                hide={{
                  checkbox: true,
                }}
                text={{
                  text: <div className={classes.text10}>6</div>,
                }}
              />
              <TableCell_StyleLeadCheckboxSup
                className={classes.tableCell2}
                hide={{
                  checkbox: true,
                }}
                text={{
                  text: <div className={classes.text11}>7</div>,
                }}
              />
              <TableCell_StyleLeadCheckboxSup
                className={classes.tableCell3}
                hide={{
                  checkbox: true,
                }}
                text={{
                  text: <div className={classes.text12}>6</div>,
                }}
              />
              <TableCell_StyleLeadCheckboxSup
                className={classes.tableCell4}
                hide={{
                  checkbox: true,
                }}
                text={{
                  text: <div className={classes.text13}>7</div>,
                }}
              />
              <TableCell_StyleLeadCheckboxSup
                className={classes.tableCell5}
                hide={{
                  checkbox: true,
                }}
                text={{
                  text: <div className={classes.text14}>8</div>,
                }}
              />
              <TableCell_StyleLeadCheckboxSup
                className={classes.tableCell6}
                hide={{
                  checkbox: true,
                }}
                text={{
                  text: <div className={classes.text15}>6</div>,
                }}
              />
              <TableCell_StyleLeadCheckboxSup
                className={classes.tableCell7}
                hide={{
                  checkbox: true,
                }}
                text={{
                  text: <div className={classes.text16}>7</div>,
                }}
              />
              <TableCell_StyleLeadCheckboxSup
                className={classes.tableCell8}
                hide={{
                  checkbox: true,
                }}
                text={{
                  text: <div className={classes.text17}>10</div>,
                }}
              />
              <TableCell_StyleLeadCheckboxSup
                className={classes.tableCell9}
                hide={{
                  checkbox: true,
                }}
                text={{
                  text: <div className={classes.text18}>9</div>,
                }}
              />
              <TableCell_StyleLeadCheckboxSup
                className={classes.tableCell10}
                hide={{
                  checkbox: true,
                }}
                text={{
                  text: <div className={classes.text19}>9</div>,
                }}
              />
            </div>
            <div className={classes.column2}>
              <TableHeaderCell_TextTrueCheckb2
                className={classes.tableHeaderCell2}
                text={{
                  text: <div className={classes.text20}>Đề bài</div>,
                }}
              />
              <div className={classes.tableCell16}>
                <div className={classes.text46}>
                  <p className={classes.labelWrapper}>Bàn luận về hiện tượng bạo lực học đường</p>
                </div>
              </div>
              <div className={classes.tableCell17}>
                <div className={classes.text47}>
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
              <div className={classes.tableCell18}>
                <div className={classes.text48}>
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
              <div className={classes.tableCell19}>
                <div className={classes.text49}>
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
              <div className={classes.tableCell20}>
                <div className={classes.text50}>
                  <p className={classes.labelWrapper11}>
                    Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
                  </p>
                </div>
              </div>
              <div className={classes.tableCell21}>
                <div className={classes.text51}>
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
              <div className={classes.tableCell22}>
                <div className={classes.text52}>
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
              <div className={classes.tableCell23}>
                <div className={classes.text53}>
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
              <div className={classes.tableCell24}>
                <div className={classes.text54}>
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
              <div className={classes.tableCell25}>
                <div className={classes.text55}>
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
              <TableHeaderCell_TextTrueCheckb2
                className={classes.tableHeaderCell3}
                text={{
                  text: <div className={classes.text21}>Bộ sách</div>,
                }}
              />
              <div className={classes.tableCell26}>
                <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN}>
                  <div className={classes.textBlock25}>
                    <p className={classes.labelWrapper27}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                  </div>
                  <div className={classes.textBlock26}>
                    <p className={classes.labelWrapper28}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell27}>
                <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN2}>
                  <div className={classes.textBlock27}>
                    <p className={classes.labelWrapper29}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                  </div>
                  <div className={classes.textBlock28}>
                    <p className={classes.labelWrapper30}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell28}>
                <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN3}>
                  <div className={classes.textBlock29}>
                    <p className={classes.labelWrapper31}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                  </div>
                  <div className={classes.textBlock30}>
                    <p className={classes.labelWrapper32}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell29}>
                <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN4}>
                  <div className={classes.textBlock31}>
                    <p className={classes.labelWrapper33}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                  </div>
                  <div className={classes.textBlock32}>
                    <p className={classes.labelWrapper34}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell30}>
                <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN5}>
                  <div className={classes.textBlock33}>
                    <p className={classes.labelWrapper35}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                  </div>
                  <div className={classes.textBlock34}>
                    <p className={classes.labelWrapper36}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell31}>
                <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN6}>
                  <div className={classes.textBlock35}>
                    <p className={classes.labelWrapper37}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                  </div>
                  <div className={classes.textBlock36}>
                    <p className={classes.labelWrapper38}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell32}>
                <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN7}>
                  <div className={classes.textBlock37}>
                    <p className={classes.labelWrapper39}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                  </div>
                  <div className={classes.textBlock38}>
                    <p className={classes.labelWrapper40}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell33}>
                <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN8}>
                  <div className={classes.textBlock39}>
                    <p className={classes.labelWrapper41}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                  </div>
                  <div className={classes.textBlock40}>
                    <p className={classes.labelWrapper42}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell34}>
                <div className={classes.bai8KHACBIETVAGANGUIBai8VANBAN9}>
                  <div className={classes.textBlock41}>
                    <p className={classes.labelWrapper43}>Bài 8: KHÁC BIỆT VÀ GẦN GŨI</p>
                  </div>
                  <div className={classes.textBlock42}>
                    <p className={classes.labelWrapper44}>Bài 8: VĂN BẢN NGHỊ LUẬN</p>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell35}>
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
              <TableHeaderCell_TextTrueCheckb2
                className={classes.tableHeaderCell4}
                text={{
                  text: <div className={classes.text22}>Câu hỏi chấm điẻm</div>,
                }}
              />
              <div className={classes.tableCell36}>
                <div className={classes.textAndSupportingText}>
                  <div className={classes.supportingText}>
                    <div className={classes.textBlock45}>
                      <p className={classes.labelWrapper47}>
                        Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
                      </p>
                    </div>
                    <div className={classes.textBlock46}>
                      <p className={classes.labelWrapper48}>
                        Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell37}>
                <div className={classes.textAndSupportingText2}>
                  <div className={classes.supportingText2}>
                    <div className={classes.textBlock47}>
                      <p className={classes.labelWrapper49}>
                        Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
                      </p>
                    </div>
                    <div className={classes.textBlock48}>
                      <p className={classes.labelWrapper50}>
                        Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell38}>
                <div className={classes.textAndSupportingText3}>
                  <div className={classes.supportingText3}>
                    <div className={classes.textBlock49}>
                      <p className={classes.labelWrapper51}>
                        Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
                      </p>
                    </div>
                    <div className={classes.textBlock50}>
                      <p className={classes.labelWrapper52}>
                        Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell39}>
                <div className={classes.textAndSupportingText4}>
                  <div className={classes.supportingText4}>
                    <div className={classes.textBlock51}>
                      <p className={classes.labelWrapper53}>
                        Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
                      </p>
                    </div>
                    <div className={classes.textBlock52}>
                      <p className={classes.labelWrapper54}>
                        Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell40}>
                <div className={classes.textAndSupportingText5}>
                  <div className={classes.supportingText5}>
                    <div className={classes.textBlock53}>
                      <p className={classes.labelWrapper55}>
                        Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
                      </p>
                    </div>
                    <div className={classes.textBlock54}>
                      <p className={classes.labelWrapper56}>
                        Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell41}>
                <div className={classes.textAndSupportingText6}>
                  <div className={classes.supportingText6}>
                    <div className={classes.textBlock55}>
                      <p className={classes.labelWrapper57}>
                        Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
                      </p>
                    </div>
                    <div className={classes.textBlock56}>
                      <p className={classes.labelWrapper58}>
                        Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell42}>
                <div className={classes.textAndSupportingText7}>
                  <div className={classes.supportingText7}>
                    <div className={classes.textBlock57}>
                      <p className={classes.labelWrapper59}>
                        Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
                      </p>
                    </div>
                    <div className={classes.textBlock58}>
                      <p className={classes.labelWrapper60}>
                        Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell43}>
                <div className={classes.textAndSupportingText8}>
                  <div className={classes.supportingText8}>
                    <div className={classes.textBlock59}>
                      <p className={classes.labelWrapper61}>
                        Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
                      </p>
                    </div>
                    <div className={classes.textBlock60}>
                      <p className={classes.labelWrapper62}>
                        Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell44}>
                <div className={classes.textAndSupportingText9}>
                  <div className={classes.supportingText9}>
                    <div className={classes.textBlock61}>
                      <p className={classes.labelWrapper63}>
                        Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
                      </p>
                    </div>
                    <div className={classes.textBlock62}>
                      <p className={classes.labelWrapper64}>
                        Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.tableCell45}>
                <div className={classes.textAndSupportingText10}>
                  <div className={classes.supportingText10}>
                    <div className={classes.textBlock63}>
                      <p className={classes.labelWrapper65}>
                        Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
                      </p>
                    </div>
                    <div className={classes.textBlock64}>
                      <p className={classes.labelWrapper66}>
                        Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.column5}>
              <TableHeaderCell_TextFalseCheck className={classes.tableHeaderCell5} />
              <TableCell_StyleActionButtonsSu
                className={classes.tableCell11}
                text={{
                  text: <div className={classes.text23}>Xóa</div>,
                  text2: <div className={classes.text24}>Sửa</div>,
                }}
              />
              <TableCell_StyleActionButtonsSu
                text={{
                  text: <div className={classes.text25}>Xóa</div>,
                  text2: <div className={classes.text26}>Sửa</div>,
                }}
              />
              <TableCell_StyleActionButtonsSu
                className={classes.tableCell12}
                text={{
                  text: <div className={classes.text27}>Xóa</div>,
                  text2: <div className={classes.text28}>Sửa</div>,
                }}
              />
              <TableCell_StyleActionButtonsSu
                text={{
                  text: <div className={classes.text29}>Xóa</div>,
                  text2: <div className={classes.text30}>Sửa</div>,
                }}
              />
              <TableCell_StyleActionButtonsSu
                className={classes.tableCell13}
                text={{
                  text: <div className={classes.text31}>Xóa</div>,
                  text2: <div className={classes.text32}>Sửa</div>,
                }}
              />
              <TableCell_StyleActionButtonsSu
                text={{
                  text: <div className={classes.text33}>Xóa</div>,
                  text2: <div className={classes.text34}>Sửa</div>,
                }}
              />
              <TableCell_StyleActionButtonsSu
                className={classes.tableCell14}
                text={{
                  text: <div className={classes.text35}>Xóa</div>,
                  text2: <div className={classes.text36}>Sửa</div>,
                }}
              />
              <TableCell_StyleActionButtonsSu
                text={{
                  text: <div className={classes.text37}>Xóa</div>,
                  text2: <div className={classes.text38}>Sửa</div>,
                }}
              />
              <TableCell_StyleActionButtonsSu
                className={classes.tableCell15}
                text={{
                  text: <div className={classes.text39}>Xóa</div>,
                  text2: <div className={classes.text40}>Sửa</div>,
                }}
              />
              <TableCell_StyleActionButtonsSu
                text={{
                  text: <div className={classes.text41}>Xóa</div>,
                  text2: <div className={classes.text42}>Sửa</div>,
                }}
              />
            </div>
          </div>
          <div className={classes.pagination}>
            <Button_SizeSmHierarchySecondar
              text={{
                text: <div className={classes.text43}>Trang trước</div>,
              }}
            />
            <div className={classes.paginationNumbers}>
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
                text: <div className={classes.text44}>Trang sau</div>,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

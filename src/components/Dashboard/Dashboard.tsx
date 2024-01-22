import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _PaginationDotIndicator_Curren2 } from './_PaginationDotIndicator_Curren2/_PaginationDotIndicator_Curren2.js';
import { _PaginationDotIndicator_Curren3 } from './_PaginationDotIndicator_Curren3/_PaginationDotIndicator_Curren3.js';
import { _PaginationDotIndicator_Curren4 } from './_PaginationDotIndicator_Curren4/_PaginationDotIndicator_Curren4.js';
import { _PaginationDotIndicator_Curren } from './_PaginationDotIndicator_Curren/_PaginationDotIndicator_Curren.js';
import { Bell1Icon } from './Bell1Icon.js';
import { CheckDone1 } from './CheckDone1/CheckDone1.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import classes from './Dashboard.module.css';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { Ellipse993Icon } from './Ellipse993Icon.js';
import { GraduationCap_TypesLine } from './GraduationCap_TypesLine/GraduationCap_TypesLine.js';
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
    vector?: boolean;
    vector2?: boolean;
    vector3?: boolean;
  };
}
/* @figmaId 6222:19544 */
export const Dashboard: FC<Props> = memo(function Dashboard(props = {}) {
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
      <div className={classes.frame1000001970}>
        <div className={classes.frame1000001907}>
          <div className={classes.ellipse993}>
            <Ellipse993Icon className={classes.icon9} />
          </div>
          <div className={classes.frame1000001906}>
            <div className={classes.xinChaoBackJack}>Xin chào, Back Jack</div>
            <div className={classes.homNayBanMuonLamGi}>Hôm nay bạn muốn làm gì ?</div>
          </div>
        </div>
        <div className={classes.frame1000001913}>
          <div className={classes.frame1000001910}>
            <div className={classes.frame1000001909}>
              <div className={classes.lopHoc}>Lớp học</div>
            </div>
          </div>
          <div className={classes.frame1000001911}>
            <div className={classes.frame10000019092}>
              <div className={classes.baiTapAGiao}>Bài tập đã giao</div>
            </div>
          </div>
          <div className={classes.frame1000001912}>
            <div className={classes.frame10000019093}>
              <div className={classes.chamIem}>Chấm điểm</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame1000001920}>
        <div className={classes.lopHocAngHoatOng}>Lớp học đang hoạt động</div>
        <div className={classes.frame1000001919}>
          <div className={classes.frame1000001881}>
            <div className={classes.frame1000001878}>
              <div className={classes.frame1000001916}></div>
              <div className={classes.frame1000001918}>
                <div className={classes.frame1000001877}>
                  <div className={classes.lop6A1}>Lớp 6A1</div>
                </div>
                <div className={classes.frame1000001917}>
                  <div className={classes.rectangle3253}></div>
                  <div className={classes._410}>
                    <p className={classes.labelWrapper}>
                      <span className={classes.label}>4/</span>
                      <span className={classes.label2}>10 </span>
                    </p>
                  </div>
                  <div className={classes.rectangle3254}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame10000019162}>
            <div className={classes.frame10000018782}>
              <div className={classes.frame10000019163}></div>
              <div className={classes.frame10000019182}>
                <div className={classes.frame10000018772}>
                  <div className={classes.lop8A5}>Lớp 8A5</div>
                </div>
                <div className={classes.frame10000019172}>
                  <div className={classes.rectangle32532}></div>
                  <div className={classes._420}>
                    <p className={classes.labelWrapper2}>
                      <span className={classes.label3}>4/</span>
                      <span className={classes.label4}>20 </span>
                    </p>
                  </div>
                  <div className={classes.rectangle32542}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.group243}>
          <_PaginationDotIndicator_Curren className={classes._PaginationDotIndicator} />
          <_PaginationDotIndicator_Curren2 className={classes._PaginationDotIndicator2} />
          <_PaginationDotIndicator_Curren3 className={classes._PaginationDotIndicator3} />
          <_PaginationDotIndicator_Curren4 className={classes._PaginationDotIndicator4} />
        </div>
      </div>
      <div className={classes.frame1000001869}>
        <GraduationCap_TypesLine
          className={classes.graduationCap}
          hide={{
            vector: true,
          }}
        />
        <div className={classes.frame1000001868}>
          <div className={classes.banLuanVeHienTuongBaoLucHocUon}>Bàn luận về hiện tượng bạo lực học đường</div>
          <div className={classes._1GioTruoc}>1 giờ trước</div>
        </div>
      </div>
      <div className={classes.frame1116606392}>
        <GraduationCap_TypesLine
          className={classes.graduationCap2}
          hide={{
            vector: true,
          }}
        />
        <div className={classes.frame10000018682}>
          <div className={classes.banLuanVeHienTuongBaoLucHocUon2}>Bàn luận về hiện tượng bạo lực học đường</div>
          <div className={classes._1GioTruoc2}>1 giờ trước</div>
        </div>
      </div>
      <div className={classes.frame1116606393}>
        <GraduationCap_TypesLine
          className={classes.graduationCap3}
          hide={{
            vector: true,
          }}
        />
        <div className={classes.frame10000018683}>
          <div className={classes.banLuanVeHienTuongBaoLucHocUon3}>Bàn luận về hiện tượng bạo lực học đường</div>
          <div className={classes._1GioTruoc3}>1 giờ trước</div>
        </div>
      </div>
      <div className={classes.baiTapAGiao2}>Bài tập đã giao</div>
    </div>
  );
});

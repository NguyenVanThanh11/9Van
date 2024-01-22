import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentFalseSiz } from './_TabButtonBase_CurrentFalseSiz/_TabButtonBase_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentTrueSize } from './_TabButtonBase_CurrentTrueSize/_TabButtonBase_CurrentTrueSize.js';
import { Bell1Icon } from './Bell1Icon.js';
import { BookClosed } from './BookClosed/BookClosed.js';
import { BookClosedIcon2 } from './BookClosedIcon2.js';
import { BookClosedIcon3 } from './BookClosedIcon3.js';
import { BookClosedIcon } from './BookClosedIcon.js';
import { CheckDone1 } from './CheckDone1/CheckDone1.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import classes from './LopHocHocSinh.module.css';
import { PieChart3 } from './PieChart3/PieChart3.js';
import { PieChart3Icon } from './PieChart3Icon.js';
import { SearchLg } from './SearchLg/SearchLg.js';
import { SearchLgIcon } from './SearchLgIcon.js';
import { Settings1 } from './Settings1/Settings1.js';
import { Settings1Icon } from './Settings1Icon.js';
import { UPlay } from './UPlay/UPlay.js';
import { Users1 } from './Users1/Users1.js';
import { Users1Icon } from './Users1Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon } from './VectorIcon.js';
import { VideoPlayer_PlayingFalseSizeXl } from './VideoPlayer_PlayingFalseSizeXl/VideoPlayer_PlayingFalseSizeXl.js';

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
    badge5?: boolean;
  };
}
/* @figmaId 6225:24150 */
export const LopHocHocSinh: FC<Props> = memo(function LopHocHocSinh(props = {}) {
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
                        <div className={classes.text8}>Tìm kiếm</div>
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
            text: <div className={classes.text5}>Mọi người</div>,
          }}
        />
        <_TabButtonBase_CurrentTrueSize
          className={classes._TabButtonBase2}
          text={{
            text: <div className={classes.text6}>Bảng tin</div>,
          }}
        />
      </div>
      <div className={classes.background}>
        <div className={classes.lop6A1}>Lớp 6A1</div>
        <div className={classes.nguVan6}>Ngữ văn 6</div>
        <div className={classes.rectangle3255}></div>
      </div>
      <VideoPlayer_PlayingFalseSizeXl
        className={classes.videoPlayer}
        classes={{
          shadowOverlayPlayer: classes.shadowOverlayPlayer,
          overlay: classes.overlay,
          textAndBadge: classes.textAndBadge,
          _PlayButton: classes._PlayButton,
        }}
        hide={{
          badge: true,
        }}
        text={{
          text: <div className={classes.text7}>Giới thiệu chương trình ngữ văn 6</div>,
        }}
      />
      <div className={classes.inputForm}>
        <div className={classes.paragraphContainer}>
          <div className={classes.lyThuyet}>Lý thuyết</div>
          <div className={classes._10Chuong}>10 chương</div>
        </div>
        <div className={classes.segmentedPicker}>
          <div className={classes.switch}>
            <UPlay
              swap={{
                vector: <VectorIcon className={classes.icon8} />,
              }}
            />
          </div>
          <div className={classes.chuong1ToiVaCacBan}>Chương 1 : Tôi và các bạn</div>
        </div>
        <div className={classes.segmentedPicker2}>
          <div className={classes.switch2}>
            <UPlay
              swap={{
                vector: <VectorIcon2 className={classes.icon9} />,
              }}
            />
          </div>
          <div className={classes.chuong2GoCuaTraiTim}>Chương 2 :Gõ cửa trái tim</div>
        </div>
        <div className={classes.segmentedPicker3}>
          <div className={classes.switch3}>
            <UPlay
              swap={{
                vector: <VectorIcon3 className={classes.icon10} />,
              }}
            />
          </div>
          <div className={classes.chuong3YeuThuongVaChiaSe}>Chương 3 : Yêu thương và chia sẻ</div>
        </div>
        <div className={classes.segmentedPicker4}>
          <div className={classes.switch4}>
            <UPlay
              swap={{
                vector: <VectorIcon4 className={classes.icon11} />,
              }}
            />
          </div>
          <div className={classes.chuong4QueHuongYeuDau}>Chương 4: Quê hương yêu dấu</div>
        </div>
        <div className={classes.segmentedPicker5}>
          <div className={classes.switch5}>
            <UPlay
              swap={{
                vector: <VectorIcon5 className={classes.icon12} />,
              }}
            />
          </div>
          <div className={classes.chuong5TheGioiCoTich}>Chương 5: Thế giới cổ tích</div>
        </div>
      </div>
      <div className={classes.content5}>
        <div className={classes.featuredIcon}>
          <div className={classes.placeholder}>
            <BookClosed
              className={classes.bookClosed}
              swap={{
                icon: <BookClosedIcon className={classes.icon13} />,
              }}
            />
          </div>
        </div>
        <div className={classes.textAndSupportingText}>
          <div className={classes.text9}>Bài tập làm văn số 1</div>
          <div className={classes.supportingText}>Bàn luận về hiện tượng bạo lực học đường</div>
        </div>
      </div>
      <div className={classes.content6}>
        <div className={classes.featuredIcon2}>
          <div className={classes.placeholder2}>
            <BookClosed
              className={classes.bookClosed2}
              swap={{
                icon: <BookClosedIcon2 className={classes.icon14} />,
              }}
            />
          </div>
        </div>
        <div className={classes.textAndSupportingText2}>
          <div className={classes.text10}>Bài tập làm văn số 2</div>
          <div className={classes.supportingText2}>Bàn luận về hiện tượng bạo lực học đường</div>
        </div>
      </div>
      <div className={classes.content7}>
        <div className={classes.featuredIcon3}>
          <div className={classes.placeholder3}>
            <BookClosed
              className={classes.bookClosed3}
              swap={{
                icon: <BookClosedIcon3 className={classes.icon15} />,
              }}
            />
          </div>
        </div>
        <div className={classes.textAndSupportingText3}>
          <div className={classes.text11}>Bài tập làm văn số 3</div>
          <div className={classes.supportingText3}>Bàn luận về hiện tượng bạo lực học đường</div>
        </div>
      </div>
      <div className={classes.baiTapVeNha}>Bài tập về nhà</div>
    </div>
  );
});

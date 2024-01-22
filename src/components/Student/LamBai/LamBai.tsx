import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _NavItemBase_CurrentFalseColor } from './_NavItemBase_CurrentFalseColor/_NavItemBase_CurrentFalseColor.js';
import { _NavItemButton_CurrentFalseSiz } from './_NavItemButton_CurrentFalseSiz/_NavItemButton_CurrentFalseSiz.js';
import { _TabButtonBase_CurrentTrueSize } from './_TabButtonBase_CurrentTrueSize/_TabButtonBase_CurrentTrueSize.js';
import { AlignCenter } from './AlignCenter/AlignCenter.js';
import { AlignLeft } from './AlignLeft/AlignLeft.js';
import { AlignRight } from './AlignRight/AlignRight.js';
import { Bell1Icon } from './Bell1Icon.js';
import { Bold } from './Bold/Bold.js';
import { Button_SizeMdHierarchyLinkColo } from './Button_SizeMdHierarchyLinkColo/Button_SizeMdHierarchyLinkColo.js';
import { CheckDone1 } from './CheckDone1/CheckDone1.js';
import { CheckDone1Icon } from './CheckDone1Icon.js';
import { CodeIcon } from './CodeIcon.js';
import { ComponentsFormSizeTokens_XSFal } from './ComponentsFormSizeTokens_XSFal/ComponentsFormSizeTokens_XSFal.js';
import { Divider_TypeVerticalDashedFals } from './Divider_TypeVerticalDashedFals/Divider_TypeVerticalDashedFals.js';
import { Down } from './Down/Down.js';
import { Dropdown_TypeAvatarOpenFalse } from './Dropdown_TypeAvatarOpenFalse/Dropdown_TypeAvatarOpenFalse.js';
import { Eye } from './Eye/Eye.js';
import { FeaturedIcon_SizeMdColorGrayTh } from './FeaturedIcon_SizeMdColorGrayTh/FeaturedIcon_SizeMdColorGrayTh.js';
import { FileImage } from './FileImage/FileImage.js';
import { FontColors } from './FontColors/FontColors.js';
import { HomeLine } from './HomeLine/HomeLine.js';
import { HomeLineIcon } from './HomeLineIcon.js';
import classes from './LamBai.module.css';
import { Link } from './Link/Link.js';
import { PieChart3 } from './PieChart3/PieChart3.js';
import { PieChart3Icon } from './PieChart3Icon.js';
import { ResizerIcon } from './ResizerIcon.js';
import { SearchLg } from './SearchLg/SearchLg.js';
import { SearchLgIcon } from './SearchLgIcon.js';
import { Settings1 } from './Settings1/Settings1.js';
import { Settings1Icon } from './Settings1Icon.js';
import { Spacer_Size4px } from './Spacer_Size4px/Spacer_Size4px.js';
import { UploadCloud2 } from './UploadCloud2/UploadCloud2.js';
import { UploadCloud2Icon } from './UploadCloud2Icon.js';
import { Users1 } from './Users1/Users1.js';
import { Users1Icon } from './Users1Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon8 } from './VectorIcon8.js';
import { VectorIcon9 } from './VectorIcon9.js';
import { VectorIcon10 } from './VectorIcon10.js';
import { VectorIcon } from './VectorIcon.js';
import { Youtube } from './Youtube/Youtube.js';

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
  };
}
/* @figmaId 6225:24428 */
export const LamBai: FC<Props> = memo(function LamBai(props = {}) {
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
                        <div className={classes.text7}>Tìm kiếm</div>
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
                text: <div className={classes.text3}>Luyện đề</div>,
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
      <div className={classes.frame1116606394}>
        <_TabButtonBase_CurrentTrueSize
          className={classes._TabButtonBase}
          text={{
            text: <div className={classes.text5}>Luyện đề</div>,
          }}
        />
      </div>
      <div className={classes._FileUploadBase}>
        <div className={classes.content5}>
          <FeaturedIcon_SizeMdColorGrayTh
            swap={{
              alertCircle: (
                <UploadCloud2
                  className={classes.uploadCloud2}
                  swap={{
                    icon: <UploadCloud2Icon className={classes.icon8} />,
                  }}
                />
              ),
            }}
          />
          <div className={classes.textAndSupportingText}>
            <div className={classes.action}>
              <Button_SizeMdHierarchyLinkColo
                hide={{
                  placeholder: true,
                  placeholder2: true,
                }}
                text={{
                  text: <div className={classes.text6}>Tải file lên</div>,
                }}
              />
              <div className={classes.text8}>hoặc kéo và thả</div>
            </div>
            <div className={classes.supportingText}>doc, pdf, jpg (tối đa. 800x400px)</div>
          </div>
        </div>
      </div>
      <div className={classes.EBaiVietBaiVanKeLaiMotTraiNghi}>Đề bài: Viết bài văn kể lại một trải nghiệm của em</div>
      <div className={classes.richTextareaAutoHeight}>
        <div className={classes.toolBar}>
          <div className={classes.icons}>
            <Divider_TypeVerticalDashedFals />
            <Bold
              className={classes.bold}
              swap={{
                vector: <VectorIcon className={classes.icon9} />,
              }}
            />
            <div className={classes.textColor}>
              <FontColors
                className={classes.fontColors}
                swap={{
                  vector: <VectorIcon2 className={classes.icon10} />,
                }}
              />
              <Down
                className={classes.down}
                swap={{
                  vector: <VectorIcon3 className={classes.icon11} />,
                }}
              />
            </div>
            <Divider_TypeVerticalDashedFals />
            <FileImage
              className={classes.fileImage}
              swap={{
                vector: <VectorIcon4 className={classes.icon12} />,
              }}
            />
            <Link
              className={classes.link}
              swap={{
                vector: <VectorIcon5 className={classes.icon13} />,
              }}
            />
            <Youtube
              className={classes.youtube}
              swap={{
                vector: <VectorIcon6 className={classes.icon14} />,
              }}
            />
            <Divider_TypeVerticalDashedFals />
            <AlignLeft
              className={classes.alignLeft}
              swap={{
                vector: <VectorIcon7 className={classes.icon15} />,
              }}
            />
            <AlignCenter
              className={classes.alignCenter}
              swap={{
                vector: <VectorIcon8 className={classes.icon16} />,
              }}
            />
            <AlignRight
              className={classes.alignRight}
              swap={{
                vector: <VectorIcon9 className={classes.icon17} />,
              }}
            />
            <Divider_TypeVerticalDashedFals />
            <div className={classes.code}>
              <CodeIcon className={classes.icon19} />
            </div>
            <Eye
              className={classes.eye}
              swap={{
                vector: <VectorIcon10 className={classes.icon18} />,
              }}
            />
          </div>
        </div>
        <div className={classes.autoAddedFrame}>
          <Spacer_Size4px />
        </div>
        <div className={classes.contentWrapper}>
          <div className={classes.lamBaiTaiAy}>Làm bài tại đây</div>
        </div>
        <div className={classes.bottomPadding}>
          <div className={classes.resizer}>
            <ResizerIcon className={classes.icon20} />
          </div>
        </div>
      </div>
      <button className={classes.button}>
        <div className={classes.nopBai}>Nộp bài</div>
      </button>
    </div>
  );
});

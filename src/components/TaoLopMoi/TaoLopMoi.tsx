import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_SizeLgHierarchyPrimaryI } from './Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import { Button_SizeLgHierarchySecondar } from './Button_SizeLgHierarchySecondar/Button_SizeLgHierarchySecondar.js';
import { ButtonCloseX_SizeLgColorGrayTh } from './ButtonCloseX_SizeLgColorGrayTh/ButtonCloseX_SizeLgColorGrayTh.js';
import { DanhSachLop } from './DanhSachLop/DanhSachLop.js';
import { HelpIcon_OpenFalseSupportingTe } from './HelpIcon_OpenFalseSupportingTe/HelpIcon_OpenFalseSupportingTe.js';
import { InputField_SizeMdTypeDefaultDe } from './InputField_SizeMdTypeDefaultDe/InputField_SizeMdTypeDefaultDe.js';
import { InputField_SizeSmTypeTagsDestr } from './InputField_SizeSmTypeTagsDestr/InputField_SizeSmTypeTagsDestr.js';
import classes from './TaoLopMoi.module.css';

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
    helpIcon?: boolean;
    hintText?: boolean;
    helpIcon2?: boolean;
    hintText2?: boolean;
    iconVariant3?: boolean;
    placeholder?: boolean;
    placeholder2?: boolean;
  };
}
/* @figmaId 6222:19576 */
export const TaoLopMoi: FC<Props> = memo(function TaoLopMoi(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <DanhSachLop
        className={classes.danhSachLop}
        classes={{
          avatar: classes.avatar,
          avatar2: classes.avatar2,
          avatar3: classes.avatar3,
          avatar4: classes.avatar4,
        }}
      />
      <div className={classes.modal}>
        <div className={classes.modal2}>
          <div className={classes.taoLopMoi}>Tạo lớp mới</div>
          <div className={classes.content}>
            <div className={classes.form}>
              <InputField_SizeMdTypeDefaultDe
                className={classes.inputField}
                hide={{
                  helpIcon: true,
                  hintText: true,
                }}
                text={{
                  label: <div className={classes.label}>Tên lớp*</div>,
                  text: <div className={classes.text}>Nhập tên lớp</div>,
                }}
              />
              <div className={classes.inputField4}>
                <div className={classes.inputWithLabel}>
                  <div className={classes.label4}>Mô tả*</div>
                  <div className={classes.input}>
                    <div className={classes.content2}>
                      <div className={classes.text5}>Nhập mô tả lớp học</div>
                    </div>
                  </div>
                </div>
              </div>
              <InputField_SizeMdTypeDefaultDe
                className={classes.inputField2}
                hide={{
                  helpIcon: true,
                  hintText: true,
                }}
                text={{
                  label: <div className={classes.label2}>Năm học*</div>,
                  text: <div className={classes.text2}>Nhập năm học</div>,
                }}
              />
            </div>
            <InputField_SizeSmTypeTagsDestr
              className={classes.inputField3}
              classes={{ avatar: classes.avatar5, avatar2: classes.avatar6 }}
              text={{
                label: <div className={classes.label3}>Danh sách học sinh</div>,
                hintText: (
                  <div className={classes.hintText}>
                    <div className={classes.textBlock}>
                      Gõ hoặc dán email học sinh, phân cách nhiều email bằng dấu phẩy và ấn enter.
                    </div>
                    <div className={classes.textBlock2}>
                      <p></p>
                    </div>
                    <div className={classes.textBlock3}>
                      <p></p>
                    </div>
                  </div>
                ),
              }}
            />
          </div>
          <div className={classes._ModalActions}>
            <Button_SizeLgHierarchySecondar
              className={classes.button}
              hide={{
                iconVariant3: true,
              }}
              text={{
                text: <div className={classes.text3}>Thoát</div>,
              }}
            />
            <Button_SizeLgHierarchyPrimaryI
              className={classes.button2}
              hide={{
                placeholder: true,
                placeholder2: true,
              }}
              text={{
                text: <div className={classes.text4}>Lưu</div>,
              }}
            />
          </div>
          <ButtonCloseX_SizeLgColorGrayTh className={classes.buttonCloseX} />
        </div>
      </div>
    </div>
  );
});

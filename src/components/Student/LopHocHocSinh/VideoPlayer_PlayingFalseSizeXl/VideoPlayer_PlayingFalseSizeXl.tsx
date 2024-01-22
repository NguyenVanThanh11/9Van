import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _PlayButton_SizeXlStyleGlassmo } from '../_PlayButton_SizeXlStyleGlassmo/_PlayButton_SizeXlStyleGlassmo.js';
import { _VideoProgress_PlayingFalse } from '../_VideoProgress_PlayingFalse/_VideoProgress_PlayingFalse.js';
import { Badge_SizeMdIconFalseColorGray } from '../Badge_SizeMdIconFalseColorGray/Badge_SizeMdIconFalseColorGray.js';
import classes from './VideoPlayer_PlayingFalseSizeXl.module.css';

interface Props {
  className?: string;
  classes?: {
    shadowOverlayPlayer?: string;
    overlay?: string;
    textAndBadge?: string;
    _PlayButton?: string;
    root?: string;
  };
  hide?: {
    badge?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1308:168165 */
export const VideoPlayer_PlayingFalseSizeXl: FC<Props> = memo(function VideoPlayer_PlayingFalseSizeXl(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.shadowOverlayPlayer || ''} ${classes.shadowOverlayPlayer}`}></div>
      <div className={`${props.classes?.overlay || ''} ${classes.overlay}`}></div>
      <_VideoProgress_PlayingFalse className={classes._VideoProgress} />
      <div className={`${props.classes?.textAndBadge || ''} ${classes.textAndBadge}`}>
        {!props.hide?.badge && (
          <Badge_SizeMdIconFalseColorGray
            className={classes.badge}
            text={{
              text: <div className={classes.text}>Part 1</div>,
            }}
          />
        )}
        {props.text?.text != null ? props.text?.text : <div className={classes.text2}>How to get started</div>}
      </div>
      <_PlayButton_SizeXlStyleGlassmo className={`${props.classes?._PlayButton || ''} ${classes._PlayButton}`} />
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar_SizeSmPlaceholderFalseT.module.css';

interface Props {
  className?: string;
}
/* @figmaId 19:1015 */
export const Avatar_SizeSmPlaceholderFalseT: FC<Props> = memo(function Avatar_SizeSmPlaceholderFalseT(props = {}) {
  return <div className={`${resets.clapyResets} ${classes.root}`}></div>;
});

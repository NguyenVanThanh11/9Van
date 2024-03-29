import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Placeholder } from '../Placeholder/Placeholder.js';
import classes from './Button_SizeSmHierarchySecondar.module.css';
import { PlaceholderIcon } from './PlaceholderIcon.js';

interface Props {
  className?: string;
  swap?: {
    placeholder?: ReactNode;
  };
}
/* @figmaId 3287:429567 */
export const Button_SizeSmHierarchySecondar: FC<Props> = memo(function Button_SizeSmHierarchySecondar(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      {props.swap?.placeholder || (
        <Placeholder
          className={classes.placeholder}
          swap={{
            icon: <PlaceholderIcon className={classes.icon} />,
          }}
        />
      )}
    </button>
  );
});

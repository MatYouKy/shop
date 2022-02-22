import { FC } from 'react';

export const ArrowIcon: FC<{ style: object; descriptionToggler: () => void; className: string }> = ({
  style,
  className,
  descriptionToggler
}) => (
  <>
    <svg onClick={descriptionToggler} viewBox='0 0 26 26' className={className} {...style}>
      <path d='M.046 2.582 2.13.498l10.837 10.836L23.803.498l2.084 2.084-12.92 12.92z' />
      <path d='m.046 13.582 2.084-2.084 10.837 10.836 10.836-10.836 2.084 2.084-12.92 12.92z' />
    </svg>
  </>
);

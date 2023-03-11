import React, { useRef } from 'react';
import cn from 'classnames';
import { useTooltipState, TooltipReference } from 'reakit/Tooltip';
import AnchorLink, { Props as AnchorLinkProps } from './anchorLink';
import Tooltip from './tooltip';
import { Social } from '../lib/types';

export type Props = AnchorLinkProps & {
  social: Social;
};

export default function SocialItem({ social, ...props }: Props) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const tooltip = useTooltipState({
    baseId: `tooltip-${social.name}`,
    animated: 300,
    placement: 'top',
  });

  return (
    <li>
      <TooltipReference
        {...tooltip}
        {...props}
        as={AnchorLink}
        ref={anchorRef}
        href={social.url}
        className={cn('group inline-flex p-3 cursor-pointer', 'sm:p-4')}
        aria-label={social.title}
        isExternal
      >
        {social.icon({
          className: cn(
            'w-7 h-7 text-gray-400',
            'dark:text-gray-300',
            'transition-colors group-hover:text-gray-500',
            'motion-reduce:transition-none',
            'dark:group-hover:text-white',
            'sm:w-8 sm:h-8',
            'xl:w-9 xl:h-9'
          ),
        })}

        <Tooltip tooltip={tooltip}>{social.title}</Tooltip>
      </TooltipReference>
    </li>
  );
}

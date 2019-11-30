import React, { ReactChild } from 'react';
import { useRouter } from 'next/router';
import RouterLink from 'next/link';
import classNames from 'classnames';

import './Link.css';

interface Props {
  href: string;
  as: string;
  children: ReactChild;
}

function Link(props: Props) {
  const router = useRouter();

  const classes = classNames('NavigationLink', {
    'NavigationLink--is-active': router.pathname === props.href,
  });

  return (
    <RouterLink href={props.href} as={props.as}>
      <a className={classes}>{props.children}</a>
    </RouterLink>
  );
}

export default Link;

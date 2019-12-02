import React from 'react';
import RouterLink from 'next/link';

import './Item.css';

interface Props {
  href: string;
  as: string;
  color: string;
  label: string;
  icon: React.ReactElement;
}

function Item(props: Props) {
  return (
    <RouterLink href={props.href} as={props.as}>
      <a className="SubNavigation__item" style={{ backgroundColor: props.color }}>
        <div className="SubNavigation__item-icon">{props.icon}</div>
        <div className="SubNavigation__item-label">{props.label}</div>
      </a>
    </RouterLink>
  );
}

export default Item;

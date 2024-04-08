import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const Navigation: FunctionComponent = () => {
  return (
    <nav>
      <ul>
        <li>
            <a href="/">Trang chủ</a>
        </li>
        <li>
            <a href="/about">Giới thiệu</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
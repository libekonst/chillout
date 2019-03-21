import React, { FC } from 'react';
import './Loader.css';

interface IProps {
  hide: boolean;
}
export const Loader: FC<IProps> = props => (
  <div className={`loaderWrapper ${props.hide && 'loaderWrapper--hide'}`}>
    <div className="loader" />
  </div>
);

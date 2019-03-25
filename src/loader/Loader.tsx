import React, { FC } from 'react';
import './Loader.css';
import './spinner.css';

interface IProps {
  hide?: boolean;
}
export const Loader: FC<IProps> = props => (
  <div className={`loader-wrapper ${props.hide && 'loader-wrapper--hide'}`}>
    <div className="spinner" />
  </div>
);

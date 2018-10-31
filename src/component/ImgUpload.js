import React, { Component } from 'react';
import style from './ImgUpload.css'
import { ActionSheet, WingBlank, WhiteSpace, Button, Toast,ImagePicker} from 'antd-mobile';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
const ImgUpload =({width,height}) => {
  return (
    <div style={{width:width,height:height,lineHeight:height}} className={style.bookImg}>
      <svg aria-hidden="true">
        <use xlinkHref="#icon-camera"></use>
      </svg> 
      <input className={style.upButton} type="file" accept="image/*"/>
    </div>
  );
}

export default ImgUpload;
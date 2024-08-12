import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgRating = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.699 2.455a.765.765 0 0 0-1.398 0l-1.868 3.96a.783.783 0 0 1-.587.446l-4.178.635c-.64.098-.894.92-.432 1.391L7.26 11.97a.839.839 0 0 1 .224.722l-.713 4.353c-.11.666.559 1.174 1.13.86l3.737-2.056a.749.749 0 0 1 .726 0l3.736 2.055c.572.315 1.24-.193 1.131-.859l-.713-4.353a.839.839 0 0 1 .224-.722l3.023-3.083c.462-.472.207-1.293-.432-1.39l-4.178-.636a.783.783 0 0 1-.587-.446L12.7 2.455Zm-7.845 9.204-.78 1.652a.587.587 0 0 1-.44.335l-3.133.476c-.48.073-.67.69-.324 1.043l2.267 2.313c.138.14.201.342.169.54l-.536 3.266c-.082.5.42.88.848.644l2.803-1.541a.562.562 0 0 1 .544 0l2.803 1.541c.428.236.93-.145.848-.644l-.418-2.55-.882.485c-1.806.993-3.62-.674-3.333-2.417l.66-4.025-1.096-1.118Zm9.641 7.075-.418 2.55c-.082.5.42.88.848.644l2.803-1.541a.562.562 0 0 1 .544 0l2.803 1.541c.428.236.93-.145.848-.644l-.536-3.265a.63.63 0 0 1 .168-.541l2.268-2.313c.347-.353.155-.97-.324-1.043l-3.133-.476a.587.587 0 0 1-.44-.335l-.78-1.652-1.096 1.118.66 4.025c.286 1.743-1.527 3.41-3.334 2.417l-.88-.485Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgRating;
/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" | "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type HorizontralPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
  //   position: `${HorizontralPosition}-${VerticalPosition}`;
  position:
    | Exclude<`${HorizontralPosition}-${VerticalPosition}`, 'center-center'>
    | 'center';
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast notification Position - {position}</div>;
};

export default Toast;

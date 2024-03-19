import React from 'react';
import Box from '../Box/Box';
import ToastView from './ToastView';
import { ShowMethodParams, ToastDataWithId, ToastDurations } from './types';
import { uuid } from './utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useKeyboard } from './hooks';
import theme from '../../theme';

interface ToastProps {
  ignoreKeyboard?: boolean;
  extraPaddingBottom?: number;
}

type ToastType = React.FC<ToastProps> & {
  show: (params: ShowMethodParams) => void;
};

// @ts-ignore
const Toast: ToastType = React.memo(
  ({
    ignoreKeyboard = false,
    extraPaddingBottom: extraMarginBottom = 0,
  }: ToastProps) => {
    const [data, setData] = React.useState<ToastDataWithId | null>(null);
    const insets = useSafeAreaInsets();
    const { keyboardHeight, isKeyboardVisible } = useKeyboard();

    React.useEffect(() => {
      Toast.show = (params: ShowMethodParams) => {
        setData({
          id: uuid(16),
          variant: params.variant,
          text: params.text,
          duration: params.duration ?? ToastDurations.SHORT,
          action: params.action!,
          actionText: params.actionText!,
          bottomOffset: params.bottomOffset ?? 0,
        });
      };
    }, []);

    const paddingBottom = React.useMemo(() => {
      if (ignoreKeyboard || !isKeyboardVisible) {
        return {
          paddingBottom:
            insets.bottom * 3 + extraMarginBottom + data?.bottomOffset!,
        };
      }
      return {
        paddingBottom:
          theme.spacing['2xs'] +
          keyboardHeight +
          extraMarginBottom +
          data?.bottomOffset!,
      };
    }, [
      ignoreKeyboard,
      extraMarginBottom,
      insets.bottom,
      isKeyboardVisible,
      keyboardHeight,
      data?.bottomOffset,
    ]);

    const toastView = React.useMemo(() => {
      return (
        <ToastView
          key={data?.id}
          variant={data?.variant}
          text={data?.text}
          onDisappared={() => setData(null)}
          duration={data?.duration!}
          action={data?.action}
          actionText={data?.actionText}
        />
      );
    }, [data]);

    if (!data) {
      return <></>;
    }

    return (
      <Box
        position="absolute"
        pointerEvents="box-none"
        testID="toast-wrapper"
        accessibilityLabel="toast-wrapper"
        width="100%"
        px="xl"
        bottom={0}
        style={paddingBottom}>
        {toastView}
      </Box>
    );
  },
);

Toast.show = () => {
  // eslint-disable-next-line no-console
  console.warn('Please add <Toast/> to your root view');
};

export default Toast;

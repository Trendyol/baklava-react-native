import { Box, Button, Icon, Text } from '@trendyol/baklava-react-native';
// import { iconList } from "@trendyol/baklava-react-native/src/components/Icon/list";
import { ScrollView } from 'react-native-gesture-handler';

//FIXME: import from baklava-react-native
export const iconList = [
  'academy',
  'account',
  'add-note',
  'add-photo',
  'add-product',
  'alert',
  'announcement',
  'archive',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'attach',
  'automatic-pricing',
  'award',
  'back-fill',
  'back',
  'barcode',
  'bill',
  'book',
  'browser',
  'calendar-stroke',
  'calendar',
  'camera',
  'campaign',
  'change-fill',
  'change',
  'chart',
  'chatbot',
  'check-fill',
  'check',
  'clock',
  'close-fill',
  'close',
  'coin',
  'compass',
  'confetti',
  'copy',
  'coupon',
  'delete',
  'dialog',
  'dislike',
  'document-search',
  'document',
  'donation',
  'download',
  'edit',
  'engagement',
  'excel',
  'exit',
  'expand',
  'export',
  'external-link',
  'external-share',
  'eye-off',
  'eye-on',
  'facebook',
  'feedback',
  'filter',
  'finance-accounting',
  'fire',
  'flash-fill',
  'flash',
  'forward',
  'gift',
  'globe',
  'go-forward',
  'graphic',
  'growth',
  'hamburger-menu',
  'hamburger',
  'handshake',
  'happy',
  'heart-line',
  'heart',
  'help',
  'home',
  'image',
  'influencer',
  'info',
  'label',
  'light-bulb',
  'like',
  'link',
  'listing',
  'live-monitor',
  'live-support',
  'loading',
  'lock',
  'magic-wand',
  'mail-opened',
  'mail',
  'map',
  'market-order-back',
  'market-order-cancel',
  'market-order-change',
  'market-order-check',
  'market',
  'message',
  'metric-status-down',
  'metric-status-up',
  'minus-fill',
  'minus',
  'mobile-filled',
  'mobile-settings',
  'mobile-stroke',
  'money-transfer',
  'motorcycle',
  'my-offers',
  'normal',
  'notification',
  'order-back',
  'order-box',
  'order-cancel',
  'order-check',
  'order-return',
  'order-tracking',
  'order',
  'paper',
  'pause-fill',
  'pause',
  'people',
  'phone-settings',
  'phone',
  'photo',
  'pin',
  'play-fill',
  'play',
  'plus-fill',
  'plus',
  'preview',
  'print',
  'product',
  'profile-check',
  'profile',
  'rating',
  'report',
  'rotate',
  'sad',
  'save',
  'search',
  'seller-ads',
  'send-mail',
  'send',
  'services',
  'settings',
  'share',
  'shopping-bag-back',
  'shopping-bag-cancel',
  'shopping-bag-discount',
  'shopping-bag-return',
  'shopping-bag',
  'sorting',
  'sound-off',
  'sound-on',
  'star',
  'stop-fill',
  'stop',
  'store-performance',
  'store',
  'suitcase',
  'support',
  'ticket',
  'truck',
  'turn-back',
  'unlock',
  'upload',
  'user-management',
  'vacation-mode',
  'wallet',
  'warning',
  'web-filled',
  'web-stroke',
  'zoom-in',
  'zoom-out',
];

export default () => {
  return (
    <ScrollView style={{ backgroundColor: theme.colors.neutralFull }}>
      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Icon Sizes
        </Text>
        <Box p="2xs" alignSelf="flex-start">
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="xl" />
            <Text pl="2xs">xl</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="l" />
            <Text pl="2xs">l</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="m" />
            <Text pl="2xs">m</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="s" />
            <Text pl="2xs">s</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="xs" />
            <Text pl="2xs">xs</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="2xs" />
            <Text pl="2xs">2xs</Text>
          </Box>
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Icon Colors
        </Text>
        <Box alignSelf="flex-start" p="2xs">
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" color="contentPrimary" />
            <Text pl="2xs">contentPrimary</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" color="red" />
            <Text pl="2xs">red</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" color="#fcba03" />
            <Text pl="2xs">#fcba03</Text>
          </Box>
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Icon List
        </Text>
        <Box p="2xs" alignSelf="flex-start">
          {iconList.map(iconName => (
            <Box key={iconName} flexDirection="row" p="2xs" alignItems="center">
              <Icon name={iconName} />
              <Text pl="2xs">{iconName}</Text>
            </Box>
          ))}
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Icon Only Buttons
        </Text>
        <Box>
          <Button icon="info" m="2xs" />
          <Button kind="neutral" icon="info" m="2xs" />
          <Button kind="success" icon="info" m="2xs" />
          <Button kind="danger" icon="info" m="2xs" />
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Button Sizes
        </Text>
        <Box>
          <Button size="l" icon="info" label="Primary Button" m="2xs" />
          <Button size="m" icon="info" label="Primary Button" m="2xs" />
          <Button
            size="s"
            icon="info"
            label="Primary Button"
            m="2xs"
            mb="2xl"
          />
          <Button
            size="l"
            icon="info"
            label="Primary Button"
            filled={true}
            m="2xs"
          />
          <Button
            size="m"
            icon="info"
            label="Primary Button"
            filled={true}
            m="2xs"
          />
          <Button
            size="s"
            icon="info"
            label="Primary Button"
            filled={true}
            m="2xs"
          />
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Disabled Buttons
        </Text>
        <Box mt="xl">
          <Text p="2xs" variant="captionMedium">
            Primary & Secondary Variants
          </Text>
          <Button size="l" disabled={true} label="Passive Button" m="2xs" />
          <Button size="m" disabled={true} label="Passive Button" m="2xs" />
          <Button
            size="s"
            disabled={true}
            label="Passive Button"
            m="2xs"
            mb="2xl"
          />
          <Text p="2xs" variant="captionMedium">
            Tertiary Variant
          </Text>
          <Button
            size="l"
            variant="tertiary"
            disabled={true}
            label="Passive Button"
            m="2xs"
          />
          <Button
            size="m"
            variant="tertiary"
            disabled={true}
            label="Passive Button"
            m="2xs"
          />
          <Button
            size="s"
            variant="tertiary"
            disabled={true}
            label="Passive Button"
            m="2xs"
          />
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Pressed States
        </Text>
        <Box mt="xl">
          <Text p="2xs" variant="captionMedium">
            Primary & Secondary Variants
          </Text>
          <Button isPressed={true} label="Save" icon="info" m="2xs" />
          <Button
            isPressed={true}
            kind="neutral"
            label="Save"
            icon="info"
            m="2xs"
          />
          <Button
            isPressed={true}
            kind="success"
            label="Save"
            icon="info"
            m="2xs"
          />
          <Button
            isPressed={true}
            kind="danger"
            label="Save"
            icon="info"
            m="2xs"
            mb="2xl"
          />
          <Text p="2xs" variant="captionMedium">
            Tertiary Variant
          </Text>
          <Button
            variant="tertiary"
            isPressed={true}
            label="Save"
            icon="info"
            m="2xs"
          />
          <Button
            variant="tertiary"
            isPressed={true}
            kind="neutral"
            label="Save"
            icon="info"
            m="2xs"
          />
          <Button
            variant="tertiary"
            isPressed={true}
            kind="success"
            label="Save"
            icon="info"
            m="2xs"
          />
          <Button
            variant="tertiary"
            isPressed={true}
            kind="danger"
            label="Save"
            icon="info"
            m="2xs"
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

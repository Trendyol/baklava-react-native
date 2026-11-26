import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { BoxProps } from '../Box/Box';

/**
 * Content layout of the Card.
 *
 * - `vertical`: media above the copy and the actions.
 * - `horizontal`: compact media-led row with a trailing arrow.
 * - `icon`: 64 × 64 leading media slot next to the copy and the actions.
 * - `placeholder`: flexible content slot; the header is hidden by default.
 * - `compact`: dense content with a 8 px inset.
 */
export type CardVariant =
  | 'vertical'
  | 'horizontal'
  | 'icon'
  | 'placeholder'
  | 'compact';

/**
 * Surface treatment of the Card.
 *
 * Surface types are **not** interaction states (hover / pressed / selected /
 * disabled). They only describe the background and the border of the surface.
 */
export type CardType = 'default' | 'stroke' | 'gray' | 'elevated';

export interface CardProps extends Omit<BoxProps, 'children'> {
  /**
   * Content layout of the card.
   * @default 'vertical'
   */
  variant?: CardVariant;
  /**
   * Surface treatment of the card.
   * @default 'default'
   */
  type?: CardType;
  /**
   * Shows the header region (title + trailing slot).
   *
   * Defaults to `true` when `title` or `headerSlot` is provided, otherwise
   * `false`. Pass `header={false}` to hide the region explicitly.
   */
  header?: boolean;
  /** Title text of the header region. */
  title?: React.ReactNode;
  /**
   * Trailing content of the header region. The source design uses a Badge and
   * a more / chevron icon here.
   */
  headerSlot?: React.ReactNode;
  /** Supporting text below the header. */
  description?: React.ReactNode;
  /**
   * Metadata below the description. Pass a `Badge` (or any node) to show it;
   * omit it to hide the badge area.
   */
  badge?: React.ReactNode;
  /**
   * Action group below the content. At most two direct actions are
   * recommended. Buttons are stacked vertically with a 16 px gap.
   *
   * Rendered for `vertical` and `icon` layouts only.
   */
  actions?: React.ReactNode;
  /**
   * Media of `vertical` and `horizontal` layouts. Accepts an image source
   * (remote URL or bundled asset) or any React node (for example `Image` or a
   * gradient).
   */
  image?: ImageSourcePropType | React.ReactNode;
  /**
   * Leading 64 × 64 media of the `icon` layout. Accepts any React node.
   * A neutral placeholder surface is rendered when omitted.
   */
  icon?: React.ReactNode;
  /**
   * Shows the trailing arrow of the `horizontal` layout.
   * @default true
   */
  showArrow?: boolean;
  /** Content swap of the `compact` layout (label, value, trend, etc.). */
  compactContent?: React.ReactNode;
  /**
   * Flexible body slot of the `placeholder` layout.
   * Also used as the body slot of the other layouts when no dedicated
   * property is provided.
   */
  children?: React.ReactNode;
  /** Makes the whole card pressable. */
  onPress?: () => void;
  /**
   * Blocks `onPress` and applies the library disabled opacity (0.5).
   * The source design does not define a disabled surface.
   */
  disabled?: boolean;
  /** Test id of the root element. Defaults to `card`. */
  testID?: string;
}

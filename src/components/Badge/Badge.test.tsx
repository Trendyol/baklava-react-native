import React from 'react';
import theme from '../../theme';
import { render } from '../../test-utils';
import Badge from './Badge';

describe('Badge', () => {
  test('should render Badge correctly ', () => {
    // when
    const { toJSON } = render(<Badge text="Lorem Ipsum" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render badge correctly when default', () => {
    // when
    const { toJSON, getByTestId } = render(<Badge text="Lorem Ipsum" />);
    const badgeComponent = getByTestId('badge');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.style[0].borderRadius).toBe(
      theme.borderRadii.xs,
    );
  });

  test('should render badgeBackground correctly when default', () => {
    // when
    const { toJSON, getByTestId } = render(<Badge text="Lorem Ipsum" />);
    const badgeComponent = getByTestId('badgeBackground');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.style[1][0].backgroundColor).toBe(
      theme.colors.primaryContrast,
    );
  });

  test('should render badgeText correctly when default', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge text="Lorem Ipsum" icon="fire" />,
    );
    const badgeComponent = getByTestId('badgeText');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.style[0].color).toBe(theme.colors.primaryKey);
    expect(badgeComponent.props.style[1][0].fontSize).toBe(
      theme.badgeSizeVariants.medium.fontSize,
    );
    expect(badgeComponent.props.style[0].fontWeight).toBe('500');
    expect(badgeComponent.props.children).toBe('Lorem Ipsum');
  });

  test('should render badgeText correctly when neutral', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="neutral" text="Lorem Ipsum" icon="fire" />,
    );
    const badgeComponent = getByTestId('badgeText');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
    expect(badgeComponent.props.style[1][0].fontSize).toBe(
      theme.badgeSizeVariants.medium.fontSize,
    );
    expect(badgeComponent.props.style[0].fontWeight).toBe('500');
    expect(badgeComponent.props.children).toBe('Lorem Ipsum');
  });

  test('should render badgeText correctly when success', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="success" text="Lorem Ipsum" icon="fire" />,
    );
    const badgeComponent = getByTestId('badgeText');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.style[0].color).toBe(theme.colors.successKey);
    expect(badgeComponent.props.style[1][0].fontSize).toBe(
      theme.badgeSizeVariants.medium.fontSize,
    );
    expect(badgeComponent.props.style[0].fontWeight).toBe('500');
    expect(badgeComponent.props.children).toBe('Lorem Ipsum');
  });

  test('should render badgeText correctly when warning', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="warning" text="Lorem Ipsum" icon="fire" />,
    );
    const badgeComponent = getByTestId('badgeText');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.style[0].color).toBe(theme.colors.warningKey);
    expect(badgeComponent.props.style[1][0].fontSize).toBe(
      theme.badgeSizeVariants.medium.fontSize,
    );
    expect(badgeComponent.props.style[0].fontWeight).toBe('500');
    expect(badgeComponent.props.children).toBe('Lorem Ipsum');
  });

  test('should render badgeText correctly when danger', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="danger" text="Lorem Ipsum" icon="fire" />,
    );
    const badgeComponent = getByTestId('badgeText');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.style[0].color).toBe(theme.colors.dangerKey);
    expect(badgeComponent.props.style[1][0].fontSize).toBe(
      theme.badgeSizeVariants.medium.fontSize,
    );
    expect(badgeComponent.props.style[0].fontWeight).toBe('500');
    expect(badgeComponent.props.children).toBe('Lorem Ipsum');
  });

  test('should render badgeIcon correctly when neutral', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="neutral" text="Lorem Ipsum" />,
    );
    const badgeComponent = getByTestId('badgeIcon');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.title).toBe('alert');
    expect(badgeComponent.props.fill).toBe(theme.colors.neutralDarker);
    expect(badgeComponent.props.style[1].width).toBe(theme.iconSizeVariants.xs);
    expect(badgeComponent.props.style[1].height).toBe(
      theme.iconSizeVariants.xs,
    );
  });

  test('should render badgeIcon correctly when success', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="success" text="Lorem Ipsum" />,
    );
    const badgeComponent = getByTestId('badgeIcon');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.title).toBe('check-fill');
    expect(badgeComponent.props.fill).toBe(theme.colors.successKey);
    expect(badgeComponent.props.style[1].width).toBe(theme.iconSizeVariants.xs);
    expect(badgeComponent.props.style[1].height).toBe(
      theme.iconSizeVariants.xs,
    );
  });

  test('should render badgeIcon correctly when warning', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="warning" text="Lorem Ipsum" />,
    );
    const badgeComponent = getByTestId('badgeIcon');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.title).toBe('warning');
    expect(badgeComponent.props.fill).toBe(theme.colors.warningKey);
    expect(badgeComponent.props.style[1].width).toBe(theme.iconSizeVariants.xs);
    expect(badgeComponent.props.style[1].height).toBe(
      theme.iconSizeVariants.xs,
    );
  });

  test('should render badgeIcon correctly when danger', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="danger" text="Lorem Ipsum" />,
    );
    const badgeComponent = getByTestId('badgeIcon');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.title).toBe('close-fill');
    expect(badgeComponent.props.fill).toBe(theme.colors.dangerKey);
    expect(badgeComponent.props.style[1].width).toBe(theme.iconSizeVariants.xs);
    expect(badgeComponent.props.style[1].height).toBe(
      theme.iconSizeVariants.xs,
    );
  });

  test('should render badge correctly when custom badge', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge text="Lorem Ipsum" color="blue" backgroundColor="green" />,
    );
    const badgeComponent = getByTestId('badge');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.style[0].borderRadius).toBe(
      theme.borderRadii.xs,
    );
    expect(badgeComponent.props.style[1].backgroundColor).toBe('green');
  });

  test('should render badgeText correctly when custom badge', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="danger" text="Lorem Ipsum" color="blue" />,
    );
    const badgeComponent = getByTestId('badgeText');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.style[1][1].color).toBe('blue');
    expect(badgeComponent.props.style[1][0].fontSize).toBe(
      theme.badgeSizeVariants.medium.fontSize,
    );
    expect(badgeComponent.props.style[0].fontWeight).toBe('500');
    expect(badgeComponent.props.children).toBe('Lorem Ipsum');

    // #496780
  });

  test('should render badgeIcon correctly when custom badge', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge
        variant="danger"
        text="Lorem Ipsum"
        color="blue"
        icon="confetti"
      />,
    );
    const badgeComponent = getByTestId('badgeIcon');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.title).toBe('confetti');
    expect(badgeComponent.props.fill).toBe('blue');
    expect(badgeComponent.props.style[1].width).toBe(theme.iconSizeVariants.xs);
    expect(badgeComponent.props.style[1].height).toBe(
      theme.iconSizeVariants.xs,
    );
  });

  test('should render correctly only icon badge', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge icon="confetti" color="purple" transparent />,
    );
    const badgeComponent = getByTestId('badgeIcon');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.title).toBe('confetti');
    expect(badgeComponent.props.fill).toBe('purple');
    expect(badgeComponent.props.style[0].backgroundColor).toBe('transparent');
    expect(badgeComponent.props.style[1].width).toBe(theme.iconSizeVariants.xs);
    expect(badgeComponent.props.style[1].height).toBe(
      theme.iconSizeVariants.xs,
    );
  });

  test('should render correctly only text badge', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="warning" text="Lorem ipsum dolor sit amet" />,
    );
    const badgeComponent = getByTestId('badgeText');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeComponent.props.style[0].color).toBe(theme.colors.warningKey);
    expect(badgeComponent.props.style[1][0].fontSize).toBe(
      theme.badgeSizeVariants.medium.fontSize,
    );
    expect(badgeComponent.props.style[0].fontWeight).toBe('500');
    expect(badgeComponent.props.children).toBe('Lorem ipsum dolor sit amet');
  });

  test('should render fontSize correctly when small', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="warning" text="Lorem Ipsum" size="small" />,
    );
    const badgeText = getByTestId('badgeText');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeText.props.style[1][0].fontSize).toBe(
      theme.badgeSizeVariants.small.fontSize,
    );
  });

  test('should render fontSize correctly when medium', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="warning" text="Lorem Ipsum" size="medium" />,
    );
    const badgeText = getByTestId('badgeText');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeText.props.style[1][0].fontSize).toBe(
      theme.badgeSizeVariants.medium.fontSize,
    );
  });

  test('should render fontSize correctly when large', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Badge variant="warning" text="Lorem Ipsum" size="large" />,
    );
    const badgeText = getByTestId('badgeText');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(badgeText.props.style[1][0].fontSize).toBe(
      theme.badgeSizeVariants.large.fontSize,
    );
  });
});

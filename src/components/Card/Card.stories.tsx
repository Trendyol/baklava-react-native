import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Badge from '../Badge/Badge';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import Card from './Card';
import CardCompactMetric from './CardCompactMetric';

const SAMPLE_IMAGE = require('../../../assets/trendyol.png');

const Section = ({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) => (
  <Box mb="l">
    <Text px="m" pt="m" pb="3xs" variant="subtitle01Bold">
      {title}
    </Text>
    {note ? (
      <Text px="m" pb="2xs" variant="body3" color="neutralDark">
        {note}
      </Text>
    ) : null}
    <Box backgroundColor="neutralLightest" padding="m" gap="m">
      {children}
    </Box>
  </Box>
);

/** White sheet for samples that must be shown on a white surface (Gray type). */
const WhiteSheet = ({ children }: { children: React.ReactNode }) => (
  <Box backgroundColor="neutralFull" padding="2xs" borderRadius="m">
    {children}
  </Box>
);

/** Content badge of the source design (12 / 14 medium, orange on contrast). */
const ContentBadge = () => <Badge text="Badge" />;

const MoreIcon = () => (
  <Icon name="more-vertical" size="s" color="contentPrimary" />
);

const CardActions = ({ single = false }: { single?: boolean }) => (
  <>
    <Button label="Button" size="s" filled onPress={() => undefined} />
    {single ? null : (
      <Button
        label="Button"
        size="s"
        filled
        variant="secondary"
        onPress={() => undefined}
      />
    )}
  </>
);

/** Grid tiles keep an explicit height so all four stay equal (last has no trend). */
const MetricTrendTile = ({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend?: string;
}) => (
  <Card
    variant="compact"
    type="gray"
    height={76}
    compactContent={
      <CardCompactMetric
        label={label}
        value={value}
        arrow="label"
        trend={trend ? { value: trend } : undefined}
      />
    }
  />
);

/**
 * Sample composition of the source design: a plain Box surface that hosts a
 * header, a 2 × 2 grid of compact metric Cards and a payment info row.
 * Each metric unit is a Card; the outer surface is a Box (Figma: FRAME).
 */
const SalesSummaryBlock = () => (
  <Box borderRadius="l" backgroundColor="neutralFull" padding="m" gap="m">
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      gap="m">
      <Text variant="subtitle2Medium" color="contentPrimary">
        Satış Özeti
      </Text>
      <Box flexDirection="row" alignItems="center" gap="3xs">
        <Icon name="live-monitor" size="s" color="primaryKey" />
        <Text variant="body2" color="primaryKey">
          Canlı Performansım
        </Text>
        <Icon name="arrow-right" size="s" color="primaryKey" />
      </Box>
    </Box>

    <Box gap="2xs">
      <Box flexDirection="row" gap="2xs">
        <Box flex={1}>
          <MetricTrendTile
            label="Bugünkü Satış"
            value="68.875₺"
            trend="%29.35"
          />
        </Box>
        <Box flex={1}>
          <MetricTrendTile label="Son 7 gün" value="1.656,097₺" trend="%4.1" />
        </Box>
      </Box>
      <Box flexDirection="row" gap="2xs">
        <Box flex={1}>
          <MetricTrendTile
            label="Son 30 gün"
            value="32.656,097₺"
            trend="%4.1"
          />
        </Box>
        <Box flex={1}>
          <MetricTrendTile label="Gelecek Ödeme" value="656.097,00₺" />
        </Box>
      </Box>
    </Box>

    <Box
      flexDirection="row"
      alignItems="center"
      gap="2xs"
      padding="2xs"
      borderRadius="l"
      backgroundColor="neutralLightest">
      <Box
        width={24}
        height={24}
        borderRadius="full"
        alignItems="center"
        justifyContent="center"
        backgroundColor="neutralFull">
        <Icon name="money_bag" size="l" color="successKey" />
      </Box>
      <Box flex={1}>
        <Text variant="body3" color="contentPrimary">
          Vadeni beklemeden{' '}
          <Text variant="body3" color="primaryKey" style={styles.link}>
            186.158,00₺
          </Text>{' '}
          erken ödeme alabilirsin.
        </Text>
      </Box>
    </Box>
  </Box>
);

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  argTypes: {
    variant: {
      options: ['vertical', 'horizontal', 'icon', 'placeholder', 'compact'],
      control: { type: 'radio' },
    },
    type: {
      options: ['default', 'stroke', 'gray', 'elevated'],
      control: { type: 'radio' },
    },
    header: { control: 'boolean' },
    showArrow: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
    onPress: { action: 'onPress' },
  },
  args: {
    variant: 'vertical',
    type: 'default',
    description: 'Description',
    showArrow: true,
    onPress: undefined,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    image: SAMPLE_IMAGE,
    badge: <ContentBadge />,
    actions: <CardActions />,
  },
  render: args => (
    <Section title="Card / Vertical / Default">
      <Card {...args} />
    </Section>
  ),
};

/** Surface types are not interaction states; only the surface changes. */
export const SurfaceTypes: Story = {
  render: () => (
    <Section
      title="Surface types"
      note="Default · Stroke · Gray · Elevated (0 4 20 %10 shadow). Gray is shown on a white surface.">
      {(['default', 'stroke', 'gray', 'elevated'] as const).map(type => (
        <Box key={type} gap="3xs">
          <Text variant="body3" color="neutralDark">
            {type}
          </Text>
          {type === 'gray' ? (
            <WhiteSheet>
              <Card
                type={type}
                image={SAMPLE_IMAGE}
                description="Description"
                badge={<ContentBadge />}
                actions={<CardActions />}
              />
            </WhiteSheet>
          ) : (
            <Card
              type={type}
              image={SAMPLE_IMAGE}
              description="Description"
              badge={<ContentBadge />}
              actions={<CardActions />}
            />
          )}
        </Box>
      ))}
    </Section>
  ),
};

/** All five content layouts of the component set. */
export const Layouts: Story = {
  render: () => (
    <>
      <Section title="Vertical" note="Media above the copy and the actions.">
        <Card
          image={SAMPLE_IMAGE}
          description="Description"
          badge={<ContentBadge />}
          actions={<CardActions />}
        />
      </Section>

      <Section
        title="Horizontal"
        note="Compact media-led row with a trailing arrow.">
        <Card
          variant="horizontal"
          image={SAMPLE_IMAGE}
          description="Description"
          badge={<ContentBadge />}
          onPress={() => undefined}
        />
      </Section>

      <Section title="Icon" note="64 × 64 leading slot next to the copy.">
        <Card
          variant="icon"
          icon={<Icon name="store" size="xl" color="primaryKey" />}
          description="Description"
          badge={<ContentBadge />}
          actions={<CardActions />}
        />
      </Section>

      <Section
        title="Placeholder"
        note="Flexible content slot, empty by design.">
        <Card variant="placeholder" />
      </Section>

      <Section title="Compact" note="Dense content with an 8 px inset.">
        <Card
          variant="compact"
          compactContent={
            <CardCompactMetric
              label="Text"
              value="1.000"
              valueColor="primaryKey"
              arrow="value"
            />
          }
        />
      </Section>
    </>
  ),
};

/** Optional header region with a title and a trailing slot. */
export const Header: Story = {
  render: () => (
    <Section
      title="Header"
      note="header defaults to true when title or headerSlot is provided.">
      <Card
        title="Lorem ipsum dolor sit amet consectetur"
        headerSlot={
          <>
            <Badge text="Badge" />
            <MoreIcon />
          </>
        }
        description="Description"
        badge={<ContentBadge />}
        actions={<CardActions />}
      />

      <Card
        variant="placeholder"
        title="Placeholder with header"
        headerSlot={<MoreIcon />}>
        <Text variant="body2" color="neutralDark">
          Header is hidden by default; pass title or headerSlot to show it.
        </Text>
      </Card>
    </Section>
  ),
};

/** The action group accepts up to two direct actions. */
export const Actions: Story = {
  render: () => (
    <Section title="Actions" note="Vertically stacked with a 16 px gap.">
      <Box gap="3xs">
        <Text variant="body3" color="neutralDark">
          One action (Button = true)
        </Text>
        <Card description="Description" actions={<CardActions single />} />
      </Box>
      <Box gap="3xs">
        <Text variant="body3" color="neutralDark">
          Two actions
        </Text>
        <Card description="Description" actions={<CardActions />} />
      </Box>
      <Box gap="3xs">
        <Text variant="body3" color="neutralDark">
          No actions (Button = false)
        </Text>
        <Card description="Description" badge={<ContentBadge />} />
      </Box>
    </Section>
  ),
};

export const PlaceholderSlots: Story = {
  render: () => (
    <Section
      title="Placeholder"
      note="Placeholder is 200 px across all surface types. Gray is shown on a white surface.">
      {(['default', 'stroke', 'gray', 'elevated'] as const).map(type => (
        <Box key={type} gap="3xs">
          <Text variant="body3" color="neutralDark">
            {type}
          </Text>
          {type === 'gray' ? (
            <WhiteSheet>
              <Card variant="placeholder" type={type} />
            </WhiteSheet>
          ) : (
            <Card variant="placeholder" type={type} />
          )}
        </Box>
      ))}
      <Card variant="placeholder" title="Title" headerSlot={<MoreIcon />}>
        <Box gap="2xs">
          <Text variant="body2" color="contentPrimary">
            Free content slot
          </Text>
          <Text variant="body3" color="neutralDark">
            Accepts any React node: lists, charts, placeholders.
          </Text>
        </Box>
      </Card>
    </Section>
  ),
};

export const Compact: Story = {
  render: () => (
    <Section
      title="Compact"
      note="Metric content of the source design (12 / 14 + 16 / 20 medium). The second block shows gray cards on a white surface.">
      <Box flexDirection="row" gap="2xs">
        <Box flex={1}>
          <Card
            type="default"
            variant="compact"
            compactContent={
              <CardCompactMetric
                label="Bekleyen Siparişler"
                value="3 adet"
                valueColor="primaryKey"
                arrow="value"
              />
            }
          />
        </Box>
        <Box flex={1}>
          <Card
            type="stroke"
            variant="compact"
            compactContent={
              <CardCompactMetric
                label="Bekleyen İadeler"
                value="0 adet"
                valueColor="primaryKey"
                arrow="value"
              />
            }
          />
        </Box>
      </Box>

      <Box flexDirection="row" gap="2xs">
        <Box flex={1}>
          <Card
            type="elevated"
            variant="compact"
            compactContent={
              <CardCompactMetric
                label="Güncel Termin Süresi"
                value="5 Gün"
                valueColor="primaryKey"
                arrow="value"
              />
            }
          />
        </Box>
        <Box flex={1}>
          <Card
            type="default"
            variant="compact"
            compactContent={
              <CardCompactMetric
                label="Bugünkü Satış"
                value="68.875₺"
                valueColor="primaryKey"
              />
            }
          />
        </Box>
      </Box>

      <Text variant="body3" color="neutralDark">
        Gray cards on a white surface
      </Text>

      <Box backgroundColor="neutralFull" borderRadius="l" padding="m" gap="2xs">
        <Box flexDirection="row" gap="2xs">
          <Box flex={1}>
            <Card
              type="gray"
              variant="compact"
              compactContent={
                <CardCompactMetric
                  label="Bekleyen Siparişler"
                  value="3 adet"
                  valueColor="primaryKey"
                  arrow="value"
                />
              }
            />
          </Box>
          <Box flex={1}>
            <Card
              type="gray"
              variant="compact"
              compactContent={
                <CardCompactMetric
                  label="Bekleyen İadeler"
                  value="0 adet"
                  valueColor="primaryKey"
                  arrow="value"
                />
              }
            />
          </Box>
        </Box>
        <Box flexDirection="row" gap="2xs">
          <Box flex={1}>
            <Card
              type="gray"
              variant="compact"
              compactContent={
                <CardCompactMetric
                  label="Güncel Termin Süresi"
                  value="5 Gün"
                  valueColor="primaryKey"
                  arrow="value"
                />
              }
            />
          </Box>
          <Box flex={1}>
            <Card
              type="gray"
              variant="compact"
              compactContent={
                <CardCompactMetric
                  label="Bugünkü Satış"
                  value="68.875₺"
                  valueColor="primaryKey"
                />
              }
            />
          </Box>
        </Box>
      </Box>
    </Section>
  ),
};

/** Metric atom: sizes, value colors, arrow positions and trends. */
export const CompactMetric: Story = {
  render: () => (
    <Section
      title="Compact metric"
      note="Metric content atom. Use it inside compactContent or any custom container.">
      <Box flexDirection="row" gap="m">
        <Box flex={1} gap="m">
          <CardCompactMetric
            label="Bekleyen Siparişler"
            value="3 adet"
            arrow="value"
          />
          <CardCompactMetric
            label="Bugünkü Satış"
            value="68.875₺"
            size="m"
            trend={{ value: '%29.35' }}
          />
        </Box>
        <Box flex={1} gap="m">
          <CardCompactMetric
            label="Bekleyen Siparişler"
            value="3 adet"
            valueColor="primaryKey"
            arrow="value"
          />
          <CardCompactMetric
            label="İadeler"
            value="12.400₺"
            size="m"
            trend={{ value: '%4.1', direction: 'down' }}
          />
        </Box>
      </Box>

      <Box flexDirection="row" gap="2xs">
        <Box flex={1}>
          <Card
            variant="compact"
            compactContent={
              <CardCompactMetric
                label="Bugünkü Satış"
                value="68.875₺"
                arrow="value"
              />
            }
          />
        </Box>
        <Box flex={1}>
          <Card
            variant="compact"
            compactContent={
              <CardCompactMetric
                label="Son 7 gün"
                value="1.656,097₺"
                arrow="value"
              />
            }
          />
        </Box>
      </Box>
    </Section>
  ),
};

/** Whole-card interaction is intended for one clear destination. */
export const Pressable: Story = {
  render: () => {
    const [log, setLog] = useState('—');

    return (
      <Section
        title="Pressable"
        note="onPress makes the whole card a single action target.">
        <Card
          variant="horizontal"
          image={SAMPLE_IMAGE}
          description="Tap the card"
          badge={<ContentBadge />}
          onPress={() => setLog('card pressed')}
        />
        <Card
          variant="horizontal"
          image={SAMPLE_IMAGE}
          description="Disabled card"
          onPress={() => setLog('disabled card pressed')}
          disabled
        />
        <Text variant="body2" color="neutralDarker">
          Last interaction: {log}
        </Text>
      </Section>
    );
  },
};

/** Dashboard composition of the source sample frame. */
export const Dashboard: Story = {
  render: () => {
    const [message, setMessage] = useState('—');

    return (
      <Box px="m" py="m" gap="m" backgroundColor="neutralLightest">
        <Text variant="subtitle01Bold">Aksiyonlar</Text>
        <Box flexDirection="row" gap="2xs">
          <Box flex={1}>
            <Card
              variant="compact"
              compactContent={
                <CardCompactMetric
                  label="Bekleyen Siparişler"
                  value="3 adet"
                  valueColor="primaryKey"
                  arrow="value"
                />
              }
            />
          </Box>
          <Box flex={1}>
            <Card
              variant="compact"
              compactContent={
                <CardCompactMetric
                  label="Geciken Siparişler"
                  value="40 adet"
                  valueColor="primaryKey"
                  arrow="value"
                />
              }
            />
          </Box>
        </Box>
        <Box flexDirection="row" gap="2xs">
          <Box flex={1}>
            <Card
              variant="compact"
              compactContent={
                <CardCompactMetric
                  label="Bekleyen İadeler"
                  value="0 adet"
                  valueColor="primaryKey"
                  arrow="value"
                />
              }
            />
          </Box>
          <Box flex={1}>
            <Card
              variant="compact"
              compactContent={
                <CardCompactMetric
                  label="Tükenen Ürünler"
                  value="78.442 adet"
                  valueColor="primaryKey"
                  arrow="value"
                />
              }
            />
          </Box>
        </Box>

        <Card
          variant="icon"
          icon={<Icon name="flash" size="xl" color="primaryKey" />}
          description="15 gün boyunca en az 7 kere uygulamaya giriş yap, puanları topla!"
          actions={
            <Button label="Button" size="s" filled onPress={() => undefined} />
          }
        />

        <Text variant="subtitle01Bold">
          İş Ortaklarımıza Özel Finansal Fırsatlar
        </Text>
        <Card
          variant="horizontal"
          image={SAMPLE_IMAGE}
          title="İş Ortağım Kredisi"
          description="Nakit ihtiyacınız için 3 Milyon TL'ye kadar Ek Limit"
          onPress={() => setMessage('İş Ortağım Kredisi')}
        />
        <Card
          variant="horizontal"
          image={SAMPLE_IMAGE}
          title="E-Dönüşüm"
          description="Tüm fatura süreçlerini kolayca yönet."
          badge={
            <Badge text="Kalan Süre: 01 saat 14 dakika" variant="warning" />
          }
          onPress={() => setMessage('E-Dönüşüm')}
        />

        <SalesSummaryBlock />

        <Card
          variant="placeholder"
          title="Reklam Performansım"
          headerSlot={<Badge text="Son 7 gün" variant="neutral" />}>
          <Text variant="body2" color="contentPrimary">
            En verimli ürünlerinizle reklam hazırladık!
          </Text>
          <Text variant="body3" color="primaryKey">
            Reklamı İncele →
          </Text>
        </Card>

        <Text variant="body2" color="neutralDark">
          Last interaction: {message}
        </Text>
      </Box>
    );
  },
};

/**
 * Source sample of the "Satış Özeti" card. The outer surface is a Box (Figma:
 * FRAME) and every metric unit is a compact Card with Metric Trend content.
 * The header and the payment row are plain Box compositions.
 */
export const SalesSummary: Story = {
  render: () => (
    <Section
      title="Satış Özeti"
      note="One Box surface + four compact metric Cards + payment info row.">
      <SalesSummaryBlock />
    </Section>
  ),
};

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
  },
});

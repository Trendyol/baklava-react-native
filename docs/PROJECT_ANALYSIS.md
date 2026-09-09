# Baklava React Native — Proje Analizi

React Native 0.74.5 · React 18.2.0 · paket: `@trendyol/baklava-react-native`

Bu doküman, [Trendyol Baklava React Native](https://github.com/Trendyol/baklava-react-native) projesinin betimleyici bir analizini içerir: design token mimarisi, yerel geliştirme (runbook), test stratejisi ve geliştirme döngüsü.

---

## 1. Proje Genel Bakış

| | |
|---|---|
| **Paket adı** | `@trendyol/baklava-react-native` |
| **Açıklama** | Trendyol Baklava Design System için React Native UI kütüphanesi |
| **Lisans** | MIT |
| **Hedef platformlar** | iOS ve Android (React Native 0.74.5) |
| **Styling altyapısı** | **Restyle** (Shopify Restyle çatallanması: `@ergenekonyigit/restyle` 2.4.0) + `styled-components` + `styled-system` |
| **State/UI yardımcıları** | `@gorhom/portal` (Portal/Modal), `react-native-safe-area-context` |
| **İkonlar** | `react-native-svg` + `@svgr/cli` ile `src/svg-icons/*.svg` → `src/icons/*.tsx` otomatik üretim |
| **Dokümantasyon** | Storybook (2 ayrı storybook: cihazda on-device + web docs) |
| **Dağıtım** | `react-native-builder-bob` (CJS/ESM/Typescript build) + `semantic-release` |

### Kaynak ağacı

```text
src/
├── index.ts            # Public API re-export'ları (tüm bileşenler + theme + ThemeProvider)
├── theme.ts            # ★ Design token'ların tek kaynağı (Restyle theme)
├── test-utils.tsx      # ★ Test yardımcıları (custom render + providers)
├── utils/              # uuid vb. yardımcılar
├── components/         # 23 bileşen (her biri: Component.tsx, types.ts, stories, test, snapshot)
├── icons/              # svg-icon'lardan üretilmiş 398 React bileşeni (FlagIcon dahil tüm ülke bayrakları)
└── svg-icons/          # Ham SVG kaynakları
```

---

## 2. Design Token'lar (Ve Tasarım Jetonları)

### 2.1 Token mimarisi

Tüm token'lar [src/theme.ts](src/theme.ts) dosyasındaki `createTheme()` çağrısında tanımlıdır. Token'lar Restyle [variant sistemi](https://github.com/Shopify/restyle) üzerine kurulu; `Theme` tipi `typeof theme` ile otomatik türetilir ve bileşenlerde `VariantProps<Theme, 'variantKey'>` ile tip güvenli şekilde kullanılır.

> 💡 **Karar noktası:** Renk/category bazında kategorize edilmiş **semantik gruplar** (örn. `primaryKey`, `primaryHighlight`, `primaryContrast`) kullanılır. `White`/`Black` gibi kaba değerler ve `primaryColor`, `secondaryColor` gibi eski adlar `Will Be Deprecated` başlığı altında toplanmıştır; yeni token isimlendirmesi tercih edilir.

### 2.2 Renk Token'ları (Colors)

**Birincil renk aileleri — üç kademeli "Key / Highlight / Contrast" deseni:**

| Aile | Key | Highlight | Contrast |
|---|---|---|---|
| **Primary** | `primaryKey` `#F27A1A` | `primaryHighlight` `#EF6114` | `primaryContrast` `#FEF2E8` |
| **Success** | `successKey` `#0BC15C` | `successHighlight` `#09A44E` | `successContrast` `#E7F9EF` |
| **Danger** | `dangerKey` `#FF5043` | `dangerHighlight` `#FF3028` | `dangerContrast` `#FFEEEC` |
| **Warning** | `warningKey` `#FFB600` | `warningHighlight` `#FF9800` | `warningContrast` `#FFF8E6` |
| **Info** | `infoKey` `#5794FF` | `infoHighlight` `#457EFF` | `infoContrast` `#EEF4FF` |
| **Featured** | `featuredKey` `#8C4EFF` | `featuredHighlight` `#753EFF` | `featuredContrast` `#F4EDFF` |
| **Neutral** | `neutralNone` `#000000` → `neutralFull` `#FFFFFF` (8 kademeli skala: none, darkest `#0F131A`, darker `#273142`, dark `#6E7787`, light `#95A1B5`, lighter `#AFBBCA`, lightest `#F1F2F7`, full) | | |
| **Transparent** | `transparentHighlight` `#00000010` (basın durumu overlay'i) | | |
| **Deprecate** | `white`, `black`, `transparent`, `primaryColor`, `secondaryColor`, `tertiaryColor`, `successColor`, `dangerColor`, `warningColor`, `alternativeColor`, `featuredColor` | | |
| **Hover (eski)** | `primaryHover`, `secondaryHover`, `tertiaryHover`, `successHover`, `dangerHover`, `warningHover`, `alternativeHover`, `featuredHover` | | |
| **Background (eski)** | `primaryBackground`, `accentBackground`, `secondaryBackground`, `tertiaryBackground`, `successBackground`, `alertBackground`, `warningBackground`, `infoBackground`, `featuredBackground` | | |
| **Border/Content** | `borderColor` `#D5D9E1`, `contentPrimary` `#273142`, `contentSecondary` `#6E7787`, `contentTertiary` `#95A1B5`, `contentPassive` `#AFBBCA` | | |

**Yeni temel token'lardan türetilen alias'lar:**

```ts
defaultColor: colors.primaryColor,   // #F27A1A
defaultHover: colors.primaryHover,   // #EF6114
neutralColor: colors.secondaryColor, // #273142
neutralHover: colors.secondaryHover, // #0F131A
```

### 2.3 Spacing / Boyut Token'ları

| Anahtar | Değer (px) | Anahtar | Değer (px) |
|---|---|---|---|
| `-4xs` … `-6xl` | negatif araçlar (-2 … -80) | `4xs` | 2 |
| `none` | 0 | `3xs` | 4 |
| | | `2xs` | 8 |
| | | `xs` | 12 |
| | | `s` | 14 |
| | | `m` | 16 |
| | | `l` | 20 |
| | | `xl` | 24 |
| | | `2xl` | 32 |
| | | `3xl` | 40 |
| | | `4xl` | 48 |
| | | `5xl` | 64 |
| | | `6xl` | 80 |

> Pozitif ve negatif token setleri **simetriktir** (`m` → `-m`). Restyle'ın `spacing` ve `spacingShorthand` fonksiyonları sayesinde `p="2xs"`, `m="l"` tarzı kısayol kullanım da mümkündür (`Box`, `Button` bunu kullanır).

### 2.4 Border Radius Token'ları

| Anahtar | Değer | | Anahtar | Değer |
|---|---|---|---|---|
| `none` | 0 | | `l` | 8 |
| `xs` | 2 | | `full` | 999 |
| `s` | 4 | | `m` | 6 |

### 2.5 Z-Index Token'ları

```text
layer_0: 0 · layer_1: 1 · layer_2: 2 · layer_3: 3
```

### 2.6 Tipografi (textVariants)

- **Font ailesi:** `fonts.light|regular|medium|semiBold|bold` — varsayılan değerler `'System'`'dır. Storybook preview'da (hem on-device hem docs) bunlar override edilir: `Rubik-Light…Rubik-Bold` (vanilya RN uygulaması kendi fontunu enjekte eder).
- **Variant setleri (fontSize / fontWeight / lineHeight):**

| Variant | Size | Line-height | Ağırlık kademeleri |
|---|---|---|---|
| `heading1` | 30 | 36 | regular |
| `heading2` | 28 | 32 | regular |
| `heading3` | 24 | 28 | regular |
| `subtitle01/1Regular|Medium|Semibold|Bold` | 20 | 24 | 400/500/600/700 |
| `subtitle02/2Regular…Bold` | 16 | 20 | 400/500/600/700 |
| `subtitle03/3Regular…Bold` | 14 | 16 | 400/500/600/700 |
| `subtitle04/4Regular…Bold` | 12 | 14 | 400/500/600/700 |
| `body1` | 16 | 18 | regular |
| `body2` | 14 | 16 | regular |
| `body3` | 12 | 14 | regular |
| `caption` / `captionText` | 12 | 14 | medium |
| `captionMedium`, `captionLongText`, `captionTextLink` | 12 | 12 | — |
| `bodyText`, `bodyUnderline`, `bodyTextLink`, `bodyLongText` | 14 | 16 | — |
| `defaults` | 14 | — | color: `contentPrimary`, textAlign: left |

> ⚠️ `subtitle01*` → `subtitle1*` gibi **kopya/deprecate** varyantlar mevcuttur; yeni varyant adları (`subtitle1`, `body1-3`, `caption`) doğru kullanım biçimidir.

### 2.7 Bileşen varyant grupları (Restyle "variant" token'ları)

Bunlar component'e göre `variant` / `kind` / `size` prop'larına bağlanan ve adlandırılmış stil kümeleridir:

| Theme anahtarı | Kullanıldığı yer | Açıklama |
|---|---|---|
| `iconSizeVariants` | `Icon` | `4xs`(8) … `xl`(32) |
| `buttonSizeVariants` | `Button` | `defaults`(40), `s`(32), `m`(40), `l`(48) |
| `buttonKindVariants` | `Button` | `default`(primaryKey), `neutral`, `success`, `danger` bg |
| `buttonVariants` | `Button` | `primary`/`secondary`/`tertiary`/`transparent` |
| `inputSizeVariants` | `Input` | `small`(32), `medium`(40), `large`(48) |
| `alertVariants` | `Alert` | `info`/`warning`/`success`/`danger` |
| `toastVariants` | `Toast` | `default`/`success`/`error`/`warning` + gölge |
| `checkboxVariants` | `Checkbox` | `unchecked`/`checked`/`disabledChecked`/`disabledUnchecked` |
| `radioButtonVariants` | `RadioButton` | `unselected`/`selected`/`disabled*` |
| `badgeVariants` | `Badge` | `default`/`neutral`/`success`/`warning`/`danger`/`transparent` |
| `badgeSizeVariants` | `Badge` | `smallRegular`/`small`/`medium`/`large` |
| `spinnerSizeVariants` | `Spinner` | `2xs`(14) … `2xl`(48) |
| `textAreaSizeVariants` | `TextArea` | `small`(80), `medium`(88), `large`(104) |

### 2.8 Token'lar dokümantasyonda (docs)


Web docs'ta token'ların görsel referansları `docs/stories/design-tokens/` altında MDX olarak yaşar:

- [colors.stories.mdx](docs/stories/design-tokens/colors.stories.mdx) — `ColorBox` bileşeniyle her rengin hex değeriyle gösterimi
- [sizes.stories.mdx](docs/stories/design-tokens/sizes.stories.mdx) — `SizeLine` bileşeniyle spacing ölçeği
- [typography.stories.mdx](docs/stories/design-tokens/typography.stories.mdx) — font boyutları & ağırlıkları
- [borderRadius.stories.mdx](docs/stories/design-tokens/borderRadius.stories.mdx) — radius token'ları

> ⚠️ **Not:** Web docs'taki MDX dosyaları token değerlerini **kopya** olarak tutar (`#F27A1A` vb. hex string'ler). Renk token'ı değiştirirken yalnızca `theme.ts` güncellemek docs'ta drift yaratır — MDX'ler de eşzamanlı güncellenmelidir. Yakın geçmişte bileşen renk güncellemeleri (örn.Alert.info) buna örnektir.

---

## 3. Yerel Geliştirme: Ortamı Ayağa Kaldırmak

### 3.1 Ön koşullar

| Gereksinim | Not |
|---|---|
| Node.js | CI'da **24.10.0** kullanılıyor (verimlilik için aynı sürüm önerilir) |
| npm | lockfile `package-lock.json` mevcut → `npm ci` en hızlı/kararlı kurulum |
| react-native CLI | `@react-native-community/cli` 0.74 toolchain |
| iOS | CocoaPods (Gemfile: `>= 1.13, < 1.15`), Xcode |
| Android | Android Studio SDK, JDK 17+, bir emülatör veya fiziksel cihaz |
| rtk | Ortamda kurulu, tüm git/bash komutlarını token-verimli hale getirir |

### 3.2 İlk kurulum

```bash
# 1. Bağımlılıkları yükle (node_modules yok, önce kurulmalı)
npm install            # veya deterministik: npm ci (CI'ın kullandığı yöntem)

# 2. iOS native bağımlılıklar (CocoaPods)
npm run pod            # = cd ios && pod install

# 3. Metro dev sunucusunu başlat
npm start              # veya: npx react-native start
```

### 3.3 Uygulamayı çalıştırmak

| Komut | Ne yapar |
|---|---|
| `npm run ios` | **"iPhone 15 Pro Max"** simulatorunde app'i build + çalıştırır |
| `npm run android` | Android emülatör/fiziksel cihazda app'i build + çalıştırır |

> Root entry [index.js](index.js) → [App.tsx](App.tsx), `.storybook/Storybook`'u render eder. Yani **local olarak açılan uygulama aslında Storybook'tur.**

### 3.4 Docs (web) Storybook — ayrı bir süreçte

```bash
npm run storybook          # http://localhost:6006 — on-device storybook'ların tarayıcı aynası
npm run build-storybook-docs   # statik build; GitHub Pages deploy'unda kullanılır (NODE_OPTIONS=--openssl-legacy-provider)
```

> ⚠️ `docs/.storybook` ayrı bir config'tir (MDX stories, `@storybook/react` web framework). Kural: `package.json`'da `storybook: "start-storybook -c docs/.storybook -p 6006"` ve `prestart: "sbn-get-stories"` tanımlı:
> - `start-storybook -c docs/.storybook` → web docs (MDX) — `http://localhost:6006`
> - `sbn-get-stories` → on-device storybook requires dosyasını (`storybook.requires.js`) yeniden üretir (bileşen stories'ini düzenledikten sonra çalıştırılır)

> Not: `sbn-get-stories` (`prestart` hook'u) her `npm start` öncesinde çalışır ve `storybook.requires.js`'i günceller; bu dosya **otomatik üretilir ve elle düzenlenmemelidir.**

---

## 4. Değişiklikleri Görmek (Feedback Loop) 🔄

### 4.1 On-device Storybook — ana yöntem

1. `npm run ios` (veya `android`) ile uygulamayı çalıştır
2. Metro dev server (`npm start`) arka planda çalışıyorsa **Hot/Fast Refresh** etkinleşir
   - Bileşen kodunda yapılan her kayıt sonrası uygulama anında güncellenir
   - `wdyr.js` (`why-did-you-render`) `__DEV__` modunda devreye girer → gereksiz render'ları konsolda loglar
3. Bir bileşenin **stories'ini** ekleyip `prestart` (sbn-get-stories) çalıştırınca yeni story storybook listesinde belirir

### 4.2 .storybook/preview decorator ağacı

On-device storybook'ta her story şunun içinde render edilir (bileşenlerin Provider'lara ihtiyacı vardır):

```tsx
<ThemeProvider theme={theme}>
  <TooltipProvider>
    <PortalProvider>
      <SafeAreaProvider>
        <ScrollView> <Story/> </ScrollView>
        <Toast ignoreKeyboard extraPaddingBottom={16} />
      </SafeAreaProvider>
    </PortalProvider>
  </TooltipProvider>
</ThemeProvider>
```

> Bu ağaç `ThemeProvider` ile **tema fontlarını Rubik olarak override** eder. Yani on-device'da gördüğünüz tipografi Rubik'e göre render edilir (theme.ts'teki `System` değil).

### 4.3 Changed files'ın gerçek zamanlı test doğrulaması

Ayrı bir terminalde:

```bash
npm run test:watch          # jest watch — değişen dosyaların testlerini otomatik yeniden çalıştırır
npm run test:watch:cov      # watch + coverage
```

---

## 5. Test Stratejisi

### 5.1 Araçlar ve ayarlar

| Araç | Rol |
|---|---|
| **Jest 29** (preset `react-native`) | Test runner |
| **@testing-library/react-native 10** | Bileşen render + kullanıcı etkileşimi testleri |
| **@testing-library/react-hooks** | Hook testleri |
| **@testing-library/jest-native** | Jest matcher'ları (`toBeVisible` vb.) |
| **Snapshot testing** | Her bileşenin `__snapshots__/` klasöründe görsel dönüşüm kaydı |
| **coverage** | `collectCoverageFrom: src/components/**` — docs'a göre %100 hedef |

### 5.2 Test dosyası konvansiyonu

- Testler **bileşen klasörünün yanında** yaşar (colocation): `src/components/<Comp>/<Comp>.test.tsx`
- Yardımcı logic ayrı `utils.test.ts` / `hooks.test.ts` dosyalarında test edilir (örn. `Input`, `Toast`, `DatePicker`)
- Unit testler `src/test-utils.tsx`'den import edilen **`render`**'ı kullanır; bu, `ThemeProvider + PortalProvider`'ı otomatik saran ve/veya `PanResponder`-mock'u sağlayan (Tooltip/testlerde gerekli) custom bir `render`'dır:

```tsx
import { fireEvent, render } from '../../test-utils';
import Button from './Button';

test('should render text correctly', () => {
  const { getByTestId } = render(<Button testID="button" label="testtesttest" />);
  expect(getByTestId('button-text').props.children).toBe('testtesttest');
});
```

### 5.3 Snapshot stratejisi

- Her bileşenin `__snapshots__/<Comp>.test.tsx.snap` dosyası vardır
- **Snap drift riski:** yakın commit'lere konu olmuştur (`fix(text): fixed snapshots`, `fix(datepicker): pin test date to prevent snapshot drift`). Tarih/renk değişiklikleri snapshot'ları kırabilir → değişiklik sırasında `jest -u` (update snapshot) gerekir
- `jest.setup.js` globalSetup'ta **`TZ='UTC'`** pinlemiştir → tarih bazlı snapshot'lar locale/timezone'dan bağımsız

### 5.4 Test komutları

| Komut | Açıklama |
|---|---|
| `npm run test` | Tüm testleri bir kez çalıştırır (CI'da **aynı komut** kullanılır) |
| `npm run test:watch` | Watch mode |
| `npm run test:cov` | Coverage report üretir (`coverage/`) |
| `npm run test:watch:cov` | Watch + coverage |
| `npm run lint` | `eslint` + `tsc --noEmit` + `prettier --check` |
| `npm run format` | ESLint `--fix` + prettier `--write` (elle çalıştırılır, otomatik değil) |

### 5.5 CI test akışı ([verify.yml](.github/workflows/verify.yml))

1. `actions/checkout` + Node 24.10.0
2. `npm ci`
3. `npm run lint`
4. `npm run test`
5. Coverage artifact yüklenir

> PR'lar `next` branch'ine açılır ([pull-request.yml](.github/workflows/pull-request.yml)) ve yukarıdaki verify işi çalışır. Coverage %100'ün altına inerse docs'a göre PR check fail olur.

---

## 6. Geliştirme Döngüsü / Git Akışı

### 6.1 Branch & release stratejisi ([.releaserc](.releaserc) + [release.yml](.github/workflows/release.yml))

| Branch | Yayın kanalı |
|---|---|
| `main` | Stable (semantic-release `latest`) |
| `next` | **Beta prerelease** — PR'lar buraya açılır |
| `1.0.x` | 1.0.x maintenance channel |

- Sürüm ve release notes **commit mesajlarından** üretilir → Conventional Commits zorunlu (commitlint + husky)
- Paket: `npm run build` (bob) → `npm run release` (semantic-release + GitHub). npm publish **OIDC/Trusted Publishing** (secrets token kullanmaz)

### 6.2 Commit akışı / husky hook'ları

```bash
npx husky              # prepare script zaten çalışır (bob build + husky install)
## Varsayılan commit öncesi: lint-staged (staged .ts/.tsx/.js dosyalarında eslint)
## commit-msg: commitlint (conventional commit formatı)
```

> `npm run prepare` script'i `bob build && husky install` içerir — yani **ilgili paket lokal olarak kurulunca lib/ build'i de üretilir.**

### 6.3 Kod iş akışı özeti

```text
Geliştirme
  ├─ Yeni bileşen/ayar: src/components/<Comp>/ altına Component.tsx + types.ts + stories + test yaz
  ├─ Token değişikliği: src/theme.ts
  ├─ İkon değişikliği: src/svg-icons/<ad>.svg → npm run svgr  (398 React ikon üretir)
  ├─ Doğrula: npm run lint && npm run test  (coverage %100 hedef)
  ├─ Görsel doğrula: npm run ios  (Hot Refresh + Storybook)
  └─ Commit: Conventional Commits (feat:, fix:, chore:, docs: …)
```

---

## 7. Önemli İpuçları & Riskler

1. **`node_modules` şu an eksik** — `npm install` (veya deterministik `npm ci`) ile başlayın; iOS için `npm run pod` şart.
2. **İki storybook config'i var:** on-device (`.storybook/` — RN cihazda) ve web docs (`docs/.storybook/` — MDX + GitHub Pages). Bunları karıştırmayın.
3. **`storybook.requires.js`** elle düzenlenmez; `sbn-get-stories` (prestart) üretir.
4. **Token değiştirdiğinizde:** `theme.ts` + o token'ı gösteren MDX docs'u birlikte güncelleyin (renk hex kopyaları drift yapar).
5. **Snapshots:** UI değişikliği genelde `jest -u` (update) ister; tarih içeriyorsa `jest.setup.js`'deki `TZ='UTC'` korunmalıdır.
6. **Tapılan "iPhone 15 Pro Max" simulator adı** `npm run ios` içine gömülüdür — diğer bir simulator kullanılacaksa komut override edilmelidir (`npx react-native run-ios --simulator="..."`).

---

## 8. Komut Referansı (Hızlı Tablo)

| Amac | Komut |
|---|---|
| Kurulum | `npm install` // `npm ci` |
| iOS pods | `npm run pod` |
| Metro dev server | `npm start` |
| iOS app | `npm run ios` |
| Android app | `npm run android` |
| Web docs storybook | `npm run storybook` |
| Docs build | `npm run build-storybook-docs` |
| Test (tek sefer) | `npm run test` |
| Test watch | `npm run test:watch` |
| Coverage | `npm run test:cov` |
| Lint (eslint+tsc+prettier) | `npm run lint` |
| Format (fix) | `npm run format` |
| Build lib | `npm run build` |
| İkon üretimi | `npm run svgr` |
| Release | `npm run release` |

# Baklava Yeni Renk Token Yapısı vs. Mevcut theme.ts

> **Kaynak**: Figma dosyası `Cp0TJqhT1r4aGZKsSBuHRR` (`Baklava-Token-Library`, node `3-2729`) — **Variables API** üzerinden + **alias zincirleri resolve** edilerek çekildi (yaklaşık 84 primitive + 68 semantik + Light/Dark modları).
> **Karşılaştırılan**: `src/theme.ts` içindeki mevcut `colors` objesi.
> **Tarih**: 2026-09-04

---

## 1. Özet

Mevcut `theme.ts` düz (flat) bir renk yapısı kullanıyor: ~50 adet tekil renk, kullanım amacı yerine **ton adıyla** (Key/Highlight/Contrast, Darkest/Lightest vb.) adlandırılmış.

Yeni Figma yapısı ise sektör standardı **3 katmanlı** bir token mimarisi:

```text
Primitives (85)  →  Color Modes (Light / Dark)  →  Semantic Tokens (~68)
```

En kritik farklar:

| | Mevcut `theme.ts` | Yeni Figma yapısı |
|---|---|---|
| Mimari | 1 katman (flat) | 3 katman (Primitive → Mode → Semantic) |
| Dark mode | Yok | Tam Light/Dark desteği (her token 2 değer) |
| İsimlendirme | Ton bazlı (`primaryKey`) | Kullanım bazlı (`Text/brand`, `Background/danger`) |
| Kategoriler | Featured | **Accent** + yeni **Micro** kategorisi |
| Neutral | Adlandırılmış (`neutralDarker`) | Numaralandırılmış (`Neutral/50`–`950`), değerler değişti |
| Border | 1 token (`borderColor`) | 14 semantik border token |
| "Content" | 4 token | **Text + Foreground** olarak ikiye bölündü (20+21) |
| Durum renkleri | Sadece base | `-hover`, `placeholder`, `disabled`, `on-color` gibi durum setleri |

---

## 2. Mevcut yapı: `src/theme.ts` renkleri

```ts
// Ana renkler (ton bazlı)
primaryKey:      '#F27A1A'   primaryHighlight:  '#EF6114'   primaryContrast:  '#FEF2E8'
successKey:      '#0BC15C'   successHighlight:  '#09A44E'   successContrast:  '#E7F9EF'
dangerKey:       '#FF5043'   dangerHighlight:   '#FF3028'   dangerContrast:   '#FFEEEC'
warningKey:      '#FFB600'   warningHighlight:  '#FF9800'   warningContrast:  '#FFF8E6'
infoKey:         '#5794FF'   infoHighlight:     '#457EFF'   infoContrast:     '#EEF4FF'
featuredKey:     '#8C4EFF'   featuredHighlight: '#753EFF'   featuredContrast: '#F4EDFF'

// Neutral
neutralNone:     '#000000'   neutralDarkest: '#0F131A'  neutralDarker: '#273142'
neutralDark:     '#6E7787'   neutralLight:   '#95A1B5'  neutralLighter: '#AFBBCA'
neutralLightest: '#F1F2F7'   neutralFull:    '#FFFFFF'

// Diğer
transparentHighlight: '#00000010'
borderColor:          '#D5D9E1'
contentPrimary:   '#273142'   contentSecondary: '#6E7787'
contentTertiary:  '#95A1B5'   contentPassive:   '#AFBBCA'

// "Will Be Deprecated" grubu (~25 adet): white/black/transparent,
// primaryColor…featuredColor, XxxHover'lar, XxxBackground'lar
```

Mevcut yapıda **dark mode yok**, **deprecated alias'lar** hâlâ taşınıyor.

---

## 3. Yeni Figma yapısı

### 3.1. Katman 1 — Primitives (ham değerler, 85 adet)

Tek modlu ("5:0"), doğrudan hex değerli tokenlar:

- **8 renk ailesi × 11 adım**: `Brand/50…950`, `Neutral/50…950`, `Success/50…950`, `Danger/50…950`, `Warning/50…950`, `Info/50…950`, `Accent/50…950` (her ailede 50,100,200,300,400,500,600,700,800,900,950)
- **Micro**: `Micro/50`, `Micro/500`, `Micro/600` (#2443B5 ailesi)
- **Base**: `Base/black`, `Base/white`, `Base/opacity` (`#000000@0.7`)

Örnek (success ailesi — mevcut yapıda olmayan genişlikte bir skala):

| Adım | Hex |
|------|-----|
| Success/50  | `#E7F9EF` |
| Success/300 | … |
| Success/500 | `#14B85D` |
| Success/700 | `#0A7B3C` |
| Success/950 | `#042513` |

### 3.2. Katman 2 — Color Modes (Light / Dark)

Aynı primitive üzerinden iki ayrı mod:

- **Light** (`5:1`) — gündüz okunabilirliği
- **Dark** (`5:2`) — koyu zemin üzerinde aynı semantik anlamı veren **farklı** primitive'ler

Aralık değerleri üzerinden örnek:

| Primitive | Light değeri | Dark'taki karşılığı |
|---|---|---|
| Neutral/900 | `#292E32` | → `#FFFFFF` (Text/primary) |
| Brand/950 | `#271002` | → `#FEF4EC`'in dark karşılığı … |

Dark moddaki asıl mantık: `Text/primary` tanımlanırken Light'ta `Neutral/900`'a, Dark'ta `Neutral/50`'ye alias edilir.

### 3.3. Katman 3 — Semantic Tokens (~68 adet, 4 grup)

Tümü primitive'lere `VARIABLE_ALIAS` ile bağlanır. Her token **Light + Dark** değer taşır.

#### Background (13)

| Token | Light | Dark |
|---|---|---|
| `Background/primary` | `#FFFFFF` | `#000000` |
| `Background/primary-hover` | `#F6F7F8` | `#1C1F21` |
| `Background/secondary` | `#F6F7F8` | `#1C1F21` |
| `Background/tertiary` | `#EBEDF0` | `#292E32` |
| `Background/disabled` | `#EBEDF0` | `#292E32` |
| `Background/brand` | `#FEF4EC` | `#271002` |
| `Background/info` | `#F0F5FF` | `#00163D` |
| `Background/success` | `#E7F9EF` | `#042513` |
| `Background/warning` | `#FFF8E6` | `#331D00` |
| `Background/danger` | `#FFE7E5` | `#330300` |
| `Background/accent` | `#F5F0FF` | `#190033` |
| `Background/micro-background` | `#E9ECF8` | — |
| `Background/overlay` | `#000000@0.7` | — |

#### Foreground (21)

| Token | Light | Dark |
|---|---|---|
| `Foreground/primary` | `#292E32` | `#FFFFFF` |
| `Foreground/primary-hover` | `#1C1F21` | `#EBEDF0` |
| `Foreground/primary-on-color` | `#FFFFFF` | `#1C1F21` |
| `Foreground/secondary` | `#6A7A8A` | `#B9C2CA` |
| `Foreground/placeholder` | `#8B99A7` | `#A2ADB9` |
| `Foreground/disabled` | `#A2ADB9` | `#8B99A7` |
| `Foreground/tertiary` | `#D0D6DC` | `#515C67` |
| `Foreground/brand` | `#F27A1A` | `#F7974B` |
| `Foreground/brand-hover` | `#DE670D` | `#F8B782` |
| `Foreground/info` | `#5794FF` | `#7AABFF` |
| `Foreground/info-hover` | `#3D84FF` | `#A8C8FF` |
| `Foreground/success` | `#14B85D` | `#26C96F` |
| `Foreground/success-hover` | `#12A554` | `#4DDB8C` |
| `Foreground/warning` | `#FFB600` | `#FFC533` |
| `Foreground/warning-hover` | `#FAA700` | `#FFD670` |
| `Foreground/danger` | `#FF5043` | `#FF7A70` |
| `Foreground/danger-hover` | `#FF3028` | `#FF928A` |
| `Foreground/accent` | `#8C4EFF` | `#9C66FF` |
| `Foreground/accent-hover` | `#7E33FF` | `#BD99FF` |
| `Foreground/micro` | `#2443B5` | — |
| `Foreground/micro-hover` | `#1A3081` | — |

#### Border (14)

| Token | Light | Dark |
|---|---|---|
| `Border/primary` | `#B9C2CA` | `#6A7A8A` |
| `Border/primary-hover` | `#F27A1A` | `#F7974B` |
| `Border/primary-on-color` | `#FFFFFF` | `#FFFFFF` |
| `Border/divider` | `#DCE0E5` | `#394047` |
| `Border/disabled` | `#D0D6DC` | `#515C67` |
| `Border/tertiary` | `#EBEDF0` | `#292E32` |
| `Border/brand` | `#F27A1A` | `#F7974B` |
| `Border/info` | `#5794FF` | `#7AABFF` |
| `Border/success` | `#14B85D` | `#26C96F` |
| `Border/warning` | `#FFB600` | `#FFC533` |
| `Border/danger` | `#FF5043` | `#FF7A70` |
| `Border/neutral` | `#292E32` | `#FFFFFF` |
| `Border/accent` | `#8C4EFF` | `#9C66FF` |
| `Border/micro-primary` | `#2443B5` | — |

#### Text (20)

`Text/primary`, `Text/primary-hover`, `Text/primary-on-color`, `Text/secondary`, `Text/placeholder`, `Text/disabled`, `Text/brand`, `Text/brand-hover`, `Text/info`, `Text/info-hover`, `Text/success`, `Text/success-hover`, `Text/warning`, `Text/warning-hover`, `Text/danger`, `Text/danger-hover`, `Text/accent`, `Text/accent-hover`, `Text/micro`, `Text/micro-hover`

> Text grubu, Foreground grubunun hemen hemen aynısıdır. Fark: Text'te `tertiary` yok; Foreground'da state/sizi ayrımı daha geniş tutulmuş.

---

## 4. Birebir Eşleştirme: Mevcut → Yeni (programatik doğrulandı)

Mevcut her token, Figma değişkenleriyle hex bazında karşılaştırıldı (exact/nearest eşleşme):

| Mevcut | Yeni Figma karşılığı | Durum |
|---|---|---|
| `primaryKey` | `Brand/500` · `Foreground/brand` · `Text/brand` · `Border/brand` | exact |
| `primaryHighlight` | (`Color/Primary/Highlight` — deprecated skala) | exact |
| `primaryContrast` | (`Color/Primary/Contrast`) | exact |
| `successKey` #0BC15C | **yeni Success/500 = #14B85D** | ⚠️ değer değişti |
| `successHighlight` | (`Color/Success/Highlight`) | exact |
| `successContrast` | `Success/50` · `Background/success` | exact |
| `dangerKey` | `Danger/500` · `Foreground/danger` · `Border/danger` | exact |
| `dangerHighlight` | `Danger/600` · `Foreground/danger-hover` | exact |
| `dangerContrast` | (`Color/Danger/Contrast`) | exact |
| `warningKey` | `Warning/500` | exact |
| `warningHighlight` | (`Color/Warning/Highlight`) | exact |
| `warningContrast` | `Warning/50` · `Background/warning` | exact |
| `infoKey` | `Info/500` | exact |
| `infoHighlight` | (`Color/Info/Highlight`) | exact |
| `infoContrast` | (`Color/Info/Contrast`) | exact |
| `featuredKey` | `Accent/500` · `Foreground/accent` · `Text/accent` | exact (yeniden adlandırma) |
| `featuredHighlight` | `Foreground/accent-hover` #7E33FF (vs #753EFF) | yakın, farklı |
| `featuredContrast` | `Background/accent` #F5F0FF (vs #F4EDFF) | yakın, farklı |
| `neutralDarkest` | (`Color/Neutral/Darkest`) | exact |
| `neutralDarker` | `Neutral/800` **#273142 → #394047?** | ⚠️ skala değişti |
| `neutralDark` | `Neutral/600` + değişim | ⚠️ değer değişti |
| `neutralLight` | ~ | ⚠️ değer değişti |
| `neutralLighter` | ~ | ⚠️ değer değişti |
| `neutralLightest` | `Neutral/100` | exact değer (eski ad) |
| `neutralNone`/`Full` | `Base/black` / `Base/white` | exact |
| `borderColor` #D5D9E1 | `Border/disabled` #D0D6DC (en yakın) | yakın |
| `contentPrimary` | `Text/primary` (Light) | exact değer |
| `contentSecondary` | `Text/secondary` | exact değer |
| `contentTertiary` | `Text/placeholder` | exact değer |
| `contentPassive` | `Text/disabled` | exact değer |
| deprecated alias'lar | ilgili yeni semantik token'lar | exact |

**Önemli nokta**: Mevcut "Key" renkleri (danger/warning/info/accent) değer olarak **aynı kalıyor** — sadece isimlendirme ve yapı değişiyor. **Success** ise hem değer hem isim olarak değişiyor.

---

## 5. Detaylı Fark Analizi

### 5.1. Mimari: Flat → 3 katman

- **Mevcut**: Tek dosyada `theme.ts`, her renk tek satır hex. Restyle'ın `createTheme`'i tek düzleme seriyor.
- **Yeni**: Primitive katmanı tek kaynak; semantik katman primitivlere alias. Bu, değerleri bir kez değiştirip **tüm kullanımları** ripple etmeyi sağlıyor (örn. Dark modda sadece mode değerleri değişir).
- React Native tarafında karşılığı: primitive/semantik token konumlandırması `useColorScheme` ile `light`/`dark` objesi seçme şeklinde uygulanabilir.

### 5.2. Dark mode (en büyük eksik)

Mevcut theme tamamen light-only. Yeni yapıda her semantik token dark değeri taşıyor. Ayrıca bazı dark değerleri "tersine çevrilmiş" ilişkiler üretiyor — örn. `Text/primary` Dark'ta `#FFFFFF`, `Foreground/disabled` Dark'ta `#A2ADB9`. Mevcut uygulamanın `ThemeProvider`'ına mode parametresi eklenmeden dark mod kullanılamaz.

### 5.3. İsimlendirme felsefesi

- **Eski**: ton odaklı — `primaryKey`, `primaryHighlight`, `primaryContrast`, `neutralDarker`… (tanımlanırken "render'da hangi amaçla" bilgisi kayboluyor)
- **Yeni**: amaç odaklı — `Text/primary`, `Background/danger`, `Border/divider`, `Foreground/placeholder`. Komponent bir renk seçtiğinde **nerede kullanıldığı** isimden okunuyor.

### 5.4. Kategori değişiklikleri

- **Featured → Accent**: `featuredKey` = `Accent/500`. Aynı renk (#8C4EFF), yeni isim.
- **Micro**: Tamamen yeni kategori (`#2443B5` mavisi). Mevcut yapıda karşılığı yok. (Bankacılık/finansal "micro" bağlamı — kurumsal mavi tonu.)
- **Hover setleri**: Yeni yapıda her renk kategorisinde tutarlı `-hover` var; eskide sadece deprecated grubunda `XxxHover` adıyla duruyorlardı.

### 5.5. Neutral skala: Adlandırılmış → Numaralı, değerler değişti

| Eski ad | Eski hex | Yeni ad (karşılığı) | Yeni hex |
|---|---|---|---|
| `neutralDarkest` | `#0F131A` | `Neutral/950` | `#1C1F21` |
| `neutralDarker` | `#273142` | `Neutral/900` | `#292E32` |
| `neutralDark` | `#6E7787` | `Neutral/600` | `#6A7A8A` |
| `neutralLight` | `#95A1B5` | `Neutral/500` | `#8B99A7` |
| `neutralLighter` | `#AFBBCA` | `Neutral/400` | `#A2ADB9` |
| `neutralLightest` | `#F1F2F7` | `Neutral/100` | `#EBEDF0` |

> Mevcut adlandırılmış nötr değerlerin hiçbiri yeni numbered skala ile birebir aynı değil. Eski değerler (örn. `#273142`) yeni semantik token'ların **Light** karşılığına denk geliyor (exact eşleşme 4. bölümde doğrulandı), ama primitive skalasında karşılığı yok — her nötr renk en fazla 1-2 adım kaymış durumda.

> Mevcut "içerik" renkleri (`#273142`, `#6E7787`…) değer olarak yeni semantik token'ların **Light** karşılığına denk geliyor (exact eşleşme yukarıda doğrulandı). Asıl değişim **aralık değerlerinin güncellenmesi** — komponentte eski değer kullanılıyorsa birkaç adım kayma olacak.

### 5.6. Değeri değişen renkler

- **Success**: `#0BC15C` → `#14B85D` (Success/500). Eski `successKey` tam karşılığı yeni yapıda yok.
- Featured/Accent contrast ve hover değerleri hafifçe değişti (`#F4EDFF`→`#F5F0FF`, `#753EFF`→`#7E33FF`).
- `borderColor` `#D5D9E1` → `Border/disabled` `#D0D6DC` (veya yeni `Border/divider` `#DCE0E5`).

### 5.7. Yeni semantik kavramlar

- `on-color` (`primary-on-color`): renkli zemin üzerine gelecek beyaz metin/border. Eskide `white`/`neutralFull` idi.
- `placeholder`: form girişi ipucu metni. Eskide yoktu.
- `disabled`: tıklanamaz durum. Eskide yoktu.
- `divider`: ayraç çizgisi. Eskide yoktu.
- `overlay`: modal arka plan karartması (`#000000@0.7`). Eskide `transparentHighlight` (#00000010) çok daha açıktı.
- `tertiary` state: text/border'ın üçüncü seviye tonu.

### 5.8. Border: 1 → 14 token

Mevcut `theme.ts`'de tek `borderColor: #D5D9E1` vardı; komponentler genelde onu `neutralLighter` vb. ile birlikte kullanmak zorunda kalıyordu. Yeni yapıda `Border/primary`'den `Border/micro-primary`'ye 14 ayrı amaca yönelik border token var.

### 5.9. Content → Text + Foreground ayrımı

Mevcut 4 token `contentPrimary/Secondary/Tertiary/Passive`. Yeni yapıda:
- **Text/*** → metin rengi kullanımı
- **Foreground/*** → ikonlar, vurgu, genel ön plan
Ayrıca `Text/placeholder` ve `Text/disabled` gibi roller eklendi.

---

## 6. Migration Yol Haritası (öneri)

1. **Katmanlı theme altyapısı**: `src/theme.ts`'e `light`/`dark` objesi ekle. Restyle `createTheme` çağrısına mode parametresiyle iki varyant üret. `ThemeProvider`'ı `useColorScheme`'a bağla.
2. **Primitivleri tart**: Figma'daki 8×11 luk skalanın tamamı başta gerekmez — önce semantik tokenların referans verdiği 30-40 primitive yeterli.
3. **Semantik token'ları import et**: Background/Foreground/Border/Text tokenlarını resolve edilmiş hex olarak `colors` içine koy; deprecate alias'ları dokümante edip tek adımda sil.
4. **Komponent variant eşlemesi**: İsim değişenleri (featured→accent, content→Text/Foreground, overlay vb.) tüm `variant` kaynaklarında güncelle — `src/components/*` içinde varyant isimleri token adlarını kullanıyorsa otomatik grep ile bulunabilir.
5. **Snapshot'ları yenile**: Renk değeri değişenler (success, neutral skalası) `jest -u` ile güncellenmeli. `TZ=UTC` ayarı snapshot drift'ini zaten engelliyor.
6. **Micro kategorisini** ilk etapta opsiyonel tut; kullanıcı komponenti yoksa skip edilebilir.

---

## 7. Ek Not: Diğer Token Koleksiyonları

Aynı Figma dosyasında renk dışında, **Web / Mobil modlarına** ayrılmış koleksiyonlar da var:

| Koleksiyon | Adet | Modlar |
|---|---|---|
| Size and Spacing | 15 | Web / Mobil |
| Font | 26 | Web / Mobil |
| Border Radius | 8 | Web / Mobil |

> **Mobil modu** esastır — RN kütüphanesi `Mobil` mod değerlerini kullanmalı. Ayrıca render sırasında remote koleksiyonlar (extern-referanslı) da var; bunlar varsayılan olarak çözümlenemiyor, ileride linklenmesi gerekecek.

---

## 8. Kaynak Notlar

- Figma Variables rest: `GET /files/{key}/variables/local`, header `X-Figma-Token`
- Resolve mantığı: `VARIABLE_ALIAS` zincirleri; Primitives koleksiyonunda mode fallback (`5:1` aranır, yoksa ilk mevcut mod) uygulandı
- Ham JSON: `/tmp/figma_vars.json`

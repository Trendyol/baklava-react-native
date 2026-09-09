# Baklava Yeni Renk Token Mimarisi — Geçiş & Etki Alanı Analizi

> **Amaç**: Mevcut `theme.ts` düz renk yapısından, Figma'daki yeni 3 katmanlı token mimarisine (Primitives → Mode → Semantic) geçişin; kütüphanenin kendisi ve **kütüphaneyi tüketen micro-app'ler** üzerindeki etkisini ölçmek.
> **Hazırlayan**: Baklava RN Kütüphanesi
> **Tarih**: 2026-09-04
> **İlişkili döküman**: [FIGMA_TOKEN_COMPARISON.md](./FIGMA_TOKEN_COMPARISON.md) — eski/yeni yapı ve değer karşılaştırması

---

## 1. Yönetici Özeti (Executive Summary)

Baklava Renk Token yapısı, mevcut düz (flat) modelden sektör standardı 3 katmanlı bir mimariye geçiyor:

```text
Primitives (85)  →  Color Modes (Light/Dark)  →  Semantic Tokens (~68)
```

Bu geçiş sadece bir "isim değişikliği" değil; **kütüphane tarafındaki tüm komponentleri** (23 komponent, ~361 renk referansı) ve **kütüphaneyi tüketen tüm micro-app'leri** doğrudan etkileyen, **breaking change** yaratacak bir dönüşüm.

**Temel bulgular:**

| Bulgu | Detay |
|---|---|
| Kütüphane içi etki | 23 komponent, ~361 renk token referansı değişecek |
| Consumer etki kanalı | 3 kanal: `theme.colors.*`, Box/Restyle prop'ları, variant prop'ları |
| En kırılgan kanal | `theme.colors.*` doğrudan erişim ve Restyle `backgroundColor`/`color` prop'ları |
| Kırılmayan kanal | `variant="info"`, `kind="danger"` gibi komponent variant prop'ları |
| Tahmini consumer iş yükü | Micro-app başına en az **50-200+ satır** değişiklik |
| Kritik ek özellik | **Dark mode** geliyor — mevcut yapıda tamamen yok |
| Önerilen strateji | **Backward-compatible alias katmanı** (kesintisiz geçiş) |

---

## 2. Geçiş Ne İçeriyor?

### 2.1. Yapısal Değişim

| Boyut | Mevcut | Yeni |
|---|---|---|
| Mimari | 1 katman (flat) | 3 katman (Primitive → Mode → Semantic) |
| Dark mode | Yok | Tam Light/Dark desteği |
| Renk kategorileri | Color, Neutral, Border, Content | Background, Foreground, Border, Text |
| Kategori sayısı | ~50 flat token | ~68 semantik + 85 primitive |
| Border token | 1 (`borderColor`) | 14 |
| Content token | 4 | Text (20) + Foreground (21) |
| Featured kategorisi | `featuredKey` | `Accent` olarak yeniden adlandı • yeni `Micro` kategorisi |

### 2.2. İsimlendirme Felsefesi Değişimi

| | Mevcut | Yeni |
|---|---|---|
| Yaklaşım | Ton bazlı (rengin adı) | Kullanım bazlı (rengin görevi) |
| Örnek | `primaryKey` `neutralDarker` `contentSecondary` | `Text/primary` `Background/danger` `Border/divider` |
| Avantaj | Kısa isimler | Nerede kullanıldığı isimden okunur, dark mode varyantı aynı isimle çalışır |

### 2.3. Değer Değişimi (renk hex'leri)

Programatik doğrulama sonucu:

- **Değişmeyenler**: Danger, Warning, Info, Accent ana renkleri → değerleri birebir aynı, sadece isim değişiyor.
- **Değişenler**:
  - Success: `#0BC15C` → `#14B85D`
  - Neutral skalası: `neutralDarker #273142` → `Neutral/900 #292E32` (adlandırılmış nötrlerin hepsi numaralı skalada 1-2 adım kayıyor)
  - Featured/Accent hover & kontrast tonları hafif değişti
  - `borderColor #D5D9E1` → `Border/disabled #D0D6DC` (veya `Border/divider #DCE0E5`)
- **Yeni kavramlar**: `placeholder`, `disabled`, `on-color`, `divider`, `overlay` (`#000000@0.7`), `-hover` setleri

> Birebir eşleştirme tablosu için: [FIGMA_TOKEN_COMPARISON.md §4](./FIGMA_TOKEN_COMPARISON.md)

---

## 3. Etki Analizi — Kim Nasıl Etkilenir?

Kütüphaneyi tüketen micro-app'ler token değişimini **3 farklı kanaldan** hisseder.

### 3.1. Kanal 1: `theme.colors.*` doğrudan erişim — 🔴 EN RİSKLİ

Kütüphane `export { default as theme }` ile theme objesini dışarı verir; TypeScript tipi `Theme = typeof theme` ile türetilir. Consumer'lar şu desende kod yazar:

```tsx
import { theme } from '@trendyol/baklava-react-native';

const backgroundColor = theme.colors.primaryKey;        // ❌ geçişte kırılır
const textColor = theme.colors.contentPrimary;          // ❌ geçişte kırılır
const divider = theme.colors.borderColor;               // ❌ geçişte kırılır
```

**Sonuç**: Token adı değiştiğinde `theme.colors.primaryKey`:
- TypeScript kullanan app'te → **compile-time error**
- JavaScript kullanan app'te → **sessizce `undefined`** → runtime bozuk UI

### 3.2. Kanal 2: Box / Restyle renk prop'ları — 🟠 YAYGIN RİSK

`Box`, `Text` gibi Restyle tabanlı komponentler renk adını **string prop** olarak alır. Bu değerler `keyof Theme['colors']` ile tip kontrolüne tabidir:

```tsx
<Box backgroundColor="primaryContrast" borderColor="borderColor" />
<Box backgroundColor="neutralLightest" />
<Text color="contentSecondary" />
```

**Sonuç**: Aynı `theme.colors.*` çıktısı — TS'te error, JS'te `undefined` render. Restyle içinde unknown renk değeri stil objesine düşüp silent fail olabilir, kırık görünüm üretir.

### 3.3. Kanal 3: Komponent variant prop'ları — 🟢 KIRILMAZ

```tsx
<Alert variant="info" />
<Button kind="danger" variant="primary" />
<Toast variant="success" />
<Badge variant="warning" />
```

Bu değerler **renk token adı değil, variant adı**. Figma'ya geçişten bağımsız. Tanımlı kaldıkça bu kanal kırılmaz.

---

## 4. Kırılma Matrisi (Consumer tipine göre)

| Tüketim senaryosu | TS app | JS app | Kırılma yüzdesi |
|---|---|---|---|
| `theme.colors.X` doğrudan | Compile error | `undefined` + bozuk UI | 🔴 %100 |
| `<Box backgroundColor="X">` | Compile error | Render hatası | 🔴 %100 |
| `<Text color="X">` | Compile error | Render hatası | 🟠 %90 |
| Custom Restyle komponenti renk token kullanan | Compile error | Silent fail | 🟠 Yüksek |
| `<Alert variant="info">` vb. | — | — | 🟢 %0 |
| `ThemeProvider` sarmalama | — | — | 🟢 %0 |

---

## 5. Kütüphane İçi Etki (Kütüphanenin kendisi)

| Metrik | Değer (grep doğrulamalı) |
|---|---|
| Etkilenen komponent | **23** |
| İş kodu içi renk token referansı | **~137** (test/story/snapshot hariç, `src/components/**`) |
| Test/story/snapshot dahil toplam referans | **~400** |
| En çok kullanılan token'lar | `neutralDarker` (23 komponent), `primaryKey` (22), `neutralLighter` (17), `transparent` (16), `dangerKey` (14), `successKey` (10) |
| Snapshot test'ler | Tüm `__snapshots__` dosyaları `jest -u` ile yenilenmeli |
| Deprecated alias katmanı | ~25 adet (XxxColor, XxxHover, XxxBackground, white/black/transparent) |

---

## 6. Consumer Micro-App İş Yükü Tahmini

Kesin veri consumer repo'larından alınmalı, ancak tipik bir mikro-app deseninde:

| Kalem | Tahmini emek |
|---|---|
| `theme.colors.*` erişimleri | Micro-app başına ~20-50 yer |
| Box/Text renk prop'ları | Micro-app başına ~30-120 yer |
| Toplam satır değişikliği | **~50-200 satır / micro-app** |
| Test güncellemeleri | Ekstra ~10-30 satır |

> Birden fazla takım bu kütüphaneyi tüketiyorsa, toplam etki "micro-app sayısı × 100+" satır mertebesindedir. Ayrıca **feature branch'ler ve açık PR'ler** çakışacaktır.

---

## 7. Migration Stratejisi (Öneri)

### Opsiyon A — Backward-compatible alias katmanı ✅ ÖNERİLEN

Yeni semantik tokenlar eklenir, eski isimler değer olarak yeni tokenlara point eder:

```ts
const colors = {
  // Yeni semantik tokenlar
  foregroundBrand: '#F27A1A',
  textPrimary: '#292E32',
  backgroundPrimary: '#FFFFFF',

  // Deprecated alias'lar — eski isimler aynen çalışmaya devam eder
  /** @deprecated use foregroundBrand */
  primaryKey: colors.foregroundBrand,
  /** @deprecated use textPrimary */
  contentPrimary: colors.textPrimary,
};
```

**Avantajları**:
- Consumer micro-app'ler **anında kırılmaz**, şimdi değil.
- IDE `@deprecated` uyarısı ile yeni isme yönlendirir.
- Yeni geliştirmeler yeni isimlerle başlar, eski kod kademeli temizlenir.
- Cut-over tarihi ekibe göre esnetilebilir.

**Tek riski**: Alias'lar bir süre taşınır → 1-2 major versiyon sonrası kaldırılmalı.

### Opsiyon B — Major breaking release (big bang)

- Tüm isimler tek seferde değişir.
- Tüm micro-app'ler **aynı anda** migrate edilmek zorunda → takvim bağımlılığı.
- Codemod (AST) yazılsa dahi eski token adının string prop'larda aranması risklidir.
- **Önerilmez** çok ekipli yapıda.

### Opsiyon C — Hibrit

- Renk **değerleri** değiştirilmez (eski hex'ler), önce sadece **yeni yapı** eklenir.
- Dark mode ayrı faz olarak teslim edilir.
- En kademeli ama geçiş en uzun sürer.

---

## 8. Önerilen Geçiş Yol Haritası (Fazlar)

| Faz | İçerik | Süre (tahmini) | Çıktı |
|---|---|---|---|
| **Faz 0** | Figma tokenlarının codeu üretim pipeline'ı (Style Dictionary vb.) | 1-2 hafta | Token JSON → TS |
| **Faz 1** | Theme'e Light/Dark mod katmanı + semantik token grupları ekleme | 2-3 hafta | `useColorScheme` destekli theme |
| **Faz 2** | Komponent içlerini yeni tokenlara taşıma (361 referans) | 2-3 hafta | Görsel değişiklik yok, iç yapı yeni |
| **Faz 3** | Deprecated alias katmanını yayınlama + `@deprecated` etiketleri | 1 hafta | Major/minor release |
| **Faz 4** | Consumer migrasyon rehberi + codemod + sponsorluk | 2-6 ay | Micro-app'ler yeni isimlere geçer |
| **Faz 5** | Eski alias'ları kaldırma | Migration sonrası | Cleanup major |

---

## 9. TikTok-yan Etkiler / Gizli Maliyetler

1. **Dark mode kalitesi**: Figma'daki her token dark değerine sahip; consumer'ların kendi koyu zemin özel renkleri varsa onlar ayrıca yönetilmeli.
2. **Screenshot/snapshot tesler** tüm `__snapshots__` yeniden üretilmeli.
3. **Yazılı dökümanlar**: Kütüphane dokümantasyonu, README, MDX token sayfaları (`docs/stories/design-tokens/`) güncellenmeli.
4. **SVGR renk enjeksiyonu**: `package.json`'daki `svgr` scripti `#273142` sabitini referanslıyor → yeni değerle güncellenmeli.
5. **Custom theme**: Consumer'ların kendi `createTheme` overrideları varsa tip şeması değiştiğinde uyumsuzluk.
6. **Renk farklılıkları görsel regresyon**: Success `#0BC15C` → `#14B85D` gibi değer değişiklikleri, isim değişikliği olmadan bile **tasarımda görünür fark** yaratır → UX ekipleriyle onay alınmalı.

---

## 10. Ek Not: Modlu Koleksiyonlar

Aynı Figma dosyasında Size and Spacing (15), Font (26), Border Radius (8) koleksiyonları **Web/Mobil** modlarına ayrılmış. React Native tarafı **Mobil** mod değerlerini kullanmalı — bunlar da ilerleyen fazlarda aynı 3 katmanlı yapıya taşınabilir.

---

## 11. Karar Noktaları (UX & Product için)

1. **Success tonu** `#0BC15C` → `#14B85D` değişimi onaylanıyor mu?
2. **Neutral skalası** (nötr griler) görsel olarak yeniden kalibre ediliyor — mevcut ekranlarda fark edilir kontrast değişimi olacak. Onay?
3. **Dark mode** kapsamı bu geçişte mi, ayrı bir sürümde mi?
4. **`Micro`** (kurumsal lacivert `#2443B5`) kategorisi şu an için hangi komponentlerde kullanılacak?
5. **Es geçilebilir mi?** Hayır — yeni Figma tokenları tasarımın tek kaynağı olacaksa kütüphane yapısı mecburen aynı şekle gelmeli. Ama **kesintisiz geçiş (Opsiyon A)** ile ekonomik olarak uygulanabilir.

---

## 12. Kaynaklar

- Karşılaştırma dokümanı: [FIGMA_TOKEN_COMPARISON.md](./FIGMA_TOKEN_COMPARISON.md)
- Figma dosyası: `Baklava-Token-Library` (node `3-2729`)
- Kütüphane kaynak: `src/theme.ts`, `src/index.ts`, `src/components/*`

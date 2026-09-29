import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

@main
class AppDelegate: RCTAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil
  ) -> Bool {
    self.moduleName = "Baklava"
    self.dependencyProvider = RCTAppDependencyProvider()
    self.initialProps = [:]

    if let i18nUtil = RCTI18nUtil.sharedInstance() {
      i18nUtil.allowRTL(true)
      if isDevicePreferredLanguageRTL() {
        i18nUtil.forceRTL(true)
      }
    }

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  private func isDevicePreferredLanguageRTL() -> Bool {
    guard let preferredLanguage = Locale.preferredLanguages.first else {
      return false
    }

    let direction = NSLocale.characterDirection(forLanguage: preferredLanguage)
    return direction == .rightToLeft
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}

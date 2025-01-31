#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTI18nUtil.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"Baklava";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

    // Allow RTL layouts, if the device prefers RTL then force the app into RTL layout.
  [[RCTI18nUtil sharedInstance] allowRTL:YES];
  if ([self isDevicePreferredLanguageRTL]) {
    [[RCTI18nUtil sharedInstance] forceRTL:YES];
  }

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (BOOL)isDevicePreferredLanguageRTL
{
  NSLocaleLanguageDirection direction =
      [NSLocale characterDirectionForLanguage:[[NSLocale preferredLanguages] objectAtIndex:0]];
  return direction == NSLocaleLanguageDirectionRightToLeft;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end

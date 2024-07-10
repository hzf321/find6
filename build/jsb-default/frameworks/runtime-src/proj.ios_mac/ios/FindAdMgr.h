#import <UnityAds/UnityAds.h>
 
@interface FindAdMgr : NSObject<UnityAdsInitializationDelegate, UnityAdsLoadDelegate, UnityAdsShowDelegate>
 
@property (assign, nonatomic) BOOL testMode;

+ (FindAdMgr*) shareInstance;
@property(nonatomic, strong) UIViewController* viewController;

- (void)initsdk:(UIViewController*) view;
+ (void)showReward;
- (void)showInterstitial;

+ (void)loadReward;
+ (void)loadInterstitial;

@end


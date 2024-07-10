

#import "FindAdMgr.h"
#include "cocos2d.h"
//#include "platform/CCApplication.h"
#include "cocos/base/CCScheduler.h"
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"
#import "AppDelegate.h"

@implementation FindAdMgr
       
static FindAdMgr* _instance = nil;

BOOL myBoolVariable = NO;

+ (FindAdMgr*) shareInstance {
   static dispatch_once_t onceToken ;
   dispatch_once(&onceToken, ^{
       _instance = [[self alloc] init] ;
   }) ;
   
   return _instance ;
}

- (void)initsdk:(UIViewController*) view {
   NSLog(@"FindAdMgr====== 初始化sdk" );
   self.viewController = view;
   [UnityAds initialize:@"5654748" testMode:NO initializationDelegate:self];
}

+ (void)testlog{
   NSLog(@" - testtest  test------------------------ " );
   
}

// Implement initialization callbacks to handle success or failure:
#pragma mark : UnityAdsInitializationDelegate
- (void)initializationComplete {
    NSLog(@"FindAdMgr====== UnityAdsInitializationDelegate initializationComplete" );
    // Pre-load an ad when initialization succeeds, so it is ready to show:
    //[self loadReward];

    [UnityAds load:@"Rewarded_iOS" loadDelegate:[FindAdMgr shareInstance]];
}

- (void)initializationFailed:(UnityAdsInitializationError)error withMessage:(NSString *)message {
   NSLog(@"FindAdMgr====== UnityAdsInitializationDelegate initializationFailed with message: %@", message );
}

// Implement load callbacks to handle success or failure after initialization:
#pragma mark: UnityAdsLoadDelegate
- (void)unityAdsAdLoaded:(NSString *)placementId {
   NSLog(@"FindAdMgr====== UnityAdsLoadDelegate unityAdsAdLoaded %@", placementId);
    myBoolVariable = YES;
    //[self showReward];
}

- (void)unityAdsAdFailedToLoad:(NSString *)placementId
                     withError:(UnityAdsLoadError)error
                   withMessage:(NSString *)message {
    NSLog(@"FindAdMgr====== UnityAdsLoadDelegate unityAdsAdFailedToLoad %@", placementId);
}

+ (void)loadReward{
   NSLog(@"FindAdMgr====== loadReward" );
        
    if (myBoolVariable) {
        cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            se::ScriptEngine::getInstance()->evalString("window['gamestop']()");
        });
        [FindAdMgr showReward];
    }else {
        cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            se::ScriptEngine::getInstance()->evalString("window['onCloseVdieofailCb']()");
        });
        
        [UnityAds load:@"Rewarded_iOS" loadDelegate:[FindAdMgr shareInstance]];
    }
 
}

+ (void)loadInterstitial{
   NSLog(@"FindAdMgr====== loadInterstitial" );
   [UnityAds load:@"Interstitial_iOS" loadDelegate:[FindAdMgr shareInstance]];
}

+ (void)showReward{
   NSLog(@"FindAdMgr====== 观看激励视频 " );
   [UnityAds show:[FindAdMgr shareInstance].viewController placementId:@"Rewarded_iOS" showDelegate:[FindAdMgr shareInstance]];
}

- (void)showInterstitial{
   NSLog(@"FindAdMgr====== 观看插屏 " );
   [UnityAds show:self.viewController placementId:@"Interstitial_iOS" showDelegate:self];
}

#pragma mark: UnityAdsShowDelegate
- (void)unityAdsShowComplete:(NSString *)placementId withFinishState:(UnityAdsShowCompletionState)state {
   NSLog(@"FindAdMgr====== UnityAdsShowDelegate unityAdsShowComplete %@ %ld", placementId, state);
   if ([placementId isEqualToString:@"Rewarded_iOS"] && state == kUnityShowCompletionStateCompleted) {
       // Reward the user.
       NSLog(@"FindAdMgr====== 视频看完回调" );
       cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
           se::ScriptEngine::getInstance()->evalString("window['gamerecovery']()");
       });
       cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
           se::ScriptEngine::getInstance()->evalString("window['onCloseVdieoFinishCb']()");
       });
       myBoolVariable = NO;
       [UnityAds load:@"Rewarded_iOS" loadDelegate:[FindAdMgr shareInstance]];
   }
}

- (void)unityAdsShowFailed: (NSString *)placementId withError: (UnityAdsShowError)error withMessage: (NSString *)message{
    NSLog(@"FindAdMgr====== unityAdsShowFailed %@", message );
    //    cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
    //        se::ScriptEngine::getInstance()->evalString("window['onCloseVdieofailCb']()");
    //    });
    myBoolVariable = NO;
}

- (void)unityAdsShowStart: (NSString *)placementId{
   NSLog(@"FindAdMgr====== unityAdsShowStart" );
}

- (void)unityAdsShowClick: (NSString *)placementId{
   NSLog(@"FindAdMgr====== unityAdsShowClick" );
}

@end


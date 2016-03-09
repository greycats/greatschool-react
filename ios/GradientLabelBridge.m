//
//  GradientLabelBridge.m
//  GreatSchool
//
//  Created by Rex Sheng on 3/3/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "RCTBridgeModule.h"
#import "RCTViewManager.h"

@interface RCT_EXTERN_MODULE(NativeGradientLabel, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(text, NSString);
RCT_EXPORT_VIEW_PROPERTY(fontSize, CGFloat);
RCT_EXPORT_VIEW_PROPERTY(kern, CGFloat);
RCT_EXPORT_VIEW_PROPERTY(colors, NSArray);
RCT_EXPORT_VIEW_PROPERTY(loc1, CGPoint);
RCT_EXPORT_VIEW_PROPERTY(loc2, CGPoint);
RCT_EXPORT_VIEW_PROPERTY(borderColor, id);
RCT_EXPORT_VIEW_PROPERTY(shadowColor, id);
RCT_EXPORT_VIEW_PROPERTY(shadowOffset, CGSize);
RCT_EXPORT_VIEW_PROPERTY(shadowRadius, CGFloat);
RCT_EXPORT_VIEW_PROPERTY(shadowOpacity, CGFloat);
@end

@interface RCT_EXTERN_MODULE(NativeGradientView, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(colors, NSArray);
RCT_EXPORT_VIEW_PROPERTY(loc1, CGPoint);
RCT_EXPORT_VIEW_PROPERTY(loc2, CGPoint);

@end

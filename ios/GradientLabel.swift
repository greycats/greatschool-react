//
//  GradientLabel.swift
//  GreatSchool
//
//  Created by Rex Sheng on 3/3/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Greycats

@objc(NativeGradientLabel)
class NativeGradientLabel : RCTViewManager {
	override func view() -> UIView! {
		return GradientLabel();
	}
}

@objc(NativeGradientView)
class NativeGradientView : RCTViewManager {
	override func view() -> UIView! {
		return GradientView()
	}
}

extension GradientView {
	func setColors(colors: NSArray) {
		let _colors = colors.map({return RCTConvert.UIColor($0)})
		color1 = _colors[0]
		color2 = _colors[1]
	}
}

@IBDesignable
class GradientLabel: GradientView {
	private var attributedText: [NSAttributedString]!
	//	@IBInspectable var fontName: String = "SFUIText-Semibold" { didSet { updateText() } }
	@IBInspectable var text: String! { didSet { updateText() } }
	@IBInspectable var fontSize: CGFloat = 16 { didSet { updateText() } }
	@IBInspectable var strokeColor: UIColor? = nil { didSet { updateText() } }

	var kern: CGFloat = 0 { didSet { updateText() } }
	func updateText() {
		guard let text = text else { return }
		attributedText = text.componentsSeparatedByString("\n").map {
			NSAttributedString(string: $0, attributes: [
				NSFontAttributeName: UIFont.systemFontOfSize(fontSize),
				NSKernAttributeName: kern
				])
		}
		backgroundColor = UIColor.clearColor()
		opaque = false
		setNeedsDisplay()
	}

	func setBorderColor(color: AnyObject) {
		strokeColor = RCTConvert.UIColor(color)
	}

	func drawText(context: CGContextRef, rect: CGRect, mode: CGTextDrawingMode, @noescape closure: (() -> ()) = {}) {
		guard let attributedText = attributedText else { return }
		let lineHeight = rect.size.height / CGFloat(attributedText.count)
		attributedText.enumerate().forEach { i, text in
			CGContextSaveGState(context)
			CGContextTranslateCTM(context, 0.0, rect.size.height)
			CGContextScaleCTM(context, 1.0, -1.0)
			let line = CTLineCreateWithAttributedString(text)
			let trect = CTLineGetBoundsWithOptions(line, .UseGlyphPathBounds)
			CGContextSetTextPosition(context, (rect.size.width - trect.size.width) / 2, (lineHeight - trect.size.height) / 2 * CGFloat(i + 1))
			CGContextSetTextDrawingMode(context, mode)
			CTLineDraw(line, context)
			closure()
			CGContextRestoreGState(context)
		}
	}

	override func drawRect(rect: CGRect) {
		guard let context = UIGraphicsGetCurrentContext() else { return }
		CGContextSaveGState(context)
		CGContextSetShadowWithColor(context, CGSize(width: 0, height: 5), 6, UIColor(hexRGB: 0x004188, alpha: 0.22).CGColor)
		CGContextSetAlpha(context, 1)
		CGContextSetAllowsAntialiasing(context, true)

		drawText(context, rect: rect, mode: .FillClip) {
			drawGradient(context, rect: rect)
		}

		if let strokeColor = strokeColor {
			CGContextSetStrokeColorWithColor(context, strokeColor.CGColor)
			drawText(context, rect: rect, mode: .Stroke) {
			}
		}

		CGContextRestoreGState(context)
		
	}
}
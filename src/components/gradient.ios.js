import React, { PropTypes, requireNativeComponent, processColor } from 'react-native';
let NativeGradientView = requireNativeComponent('NativeGradientView', null);
let NativeGradientLabel = requireNativeComponent('NativeGradientLabel', null);

export class GradientView extends React.Component {
  static propTypes = {
    loc1: PropTypes.arrayOf(PropTypes.number),
    loc2: PropTypes.arrayOf(PropTypes.number),
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    ...React.View.propTypes
  };
  render() {
    let { colors, ...otherProps } = this.props;
    return (
      <NativeGradientView {...otherProps} colors={colors.map(processColor)} />
    );
  }
}

export class GradientText extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    fontSize: PropTypes.number,
    kern: PropTypes.number,
    shadowColor: PropTypes.string,
    shadowRadius: PropTypes.number,
    shadowSize: PropTypes.arrayOf(PropTypes.number),
    borderColor: PropTypes.string,
    ...GradientView.propTypes
  };
  render() {
    let { borderColor, shadowColor, colors, ...otherProps } = this.props;
    return <NativeGradientLabel {...otherProps}
    colors={colors.map(processColor)}
    borderColor={processColor(borderColor)}
    shadowColor={processColor(shadowColor)}
    />;
  }
}

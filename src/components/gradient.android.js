import React, { PropTypes, requireNativeComponent, processColor } from 'react-native';

// let NativeGradientLabel = requireNativeComponent('NativeGradientLabel', null);

export class GradientText extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    fontSize: PropTypes.number,
    kern: PropTypes.number,
    loc1: PropTypes.arrayOf(PropTypes.number),
    loc2: PropTypes.arrayOf(PropTypes.number),
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    borderColor: PropTypes.string,
    ...React.View.propTypes
  };
  render() {
    let { borderColor, colors, ...otherProps } = this.props;
    return <Text {...otherProps} colors={colors.map(processColor)} borderColor={processColor(borderColor)}/>;
  }
}

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Pie, PolarChart } from 'victory-native';
import { colors, width } from '../styles';



const Chart = ({data}) => {
  return (
    <View style={{ width: width * 0.5, height: 200, alignSelf: 'center' }}>
      <PolarChart
        data={data}
        labelKey="label"
        valueKey="value"
        colorKey="color"
      >
        <Pie.Chart innerRadius={50} startAngle={265}>
          {({ slice }) => {
            return (
              <>
                <Pie.Slice />
                <Pie.SliceAngularInset
                  angularInset={{
                    angularStrokeWidth: 5,
                    angularStrokeColor: colors.pcian,
                  }}
                />
              </>
            );
          }}
        </Pie.Chart>
      </PolarChart>
    </View>
  );
};

export default Chart;
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable max-lines */

import React from 'react';
import Svg, {
    G,
    Defs,
    LinearGradient,
    Stop,
} from 'react-native-svg';

import {useIsTablet} from '@hooks/device';
import {changeOpacity, makeStyleSheetFromTheme} from '@utils/theme';

type Props = {
    theme: Theme;
}

const getStyleSheet = makeStyleSheetFromTheme((theme: Theme) => ({
    backgroundGraphic: {
        backgroundColor: changeOpacity(theme.centerChannelColor, 0),
        position: 'absolute',
        flex: 1,
    },
}));

const Background = ({
    theme,
}: Props) => {
    const styles = getStyleSheet(theme);

    const isTablet = useIsTablet();

    return (
        <Svg
            viewBox='0 0 414 896'
            style={styles.backgroundGraphic}
        >
            <G/>
            {isTablet &&
            <G/>
            }
            <Defs>
                <LinearGradient
                    id='paint0_linear_2472:110589'
                    x1={159.724}
                    y1={53.9386}
                    x2={625.156}
                    y2={514.648}
                    gradientUnits='userSpaceOnUse'
                >
                    <Stop stopColor={theme.centerChannelBg}/>
                    <Stop
                        offset={1}
                        stopColor={theme.centerChannelBg}
                        stopOpacity={0}
                    />
                </LinearGradient>
                <LinearGradient
                    id='paint1_linear_2472:110589'
                    x1={285.092}
                    y1={774.348}
                    x2={-180.339}
                    y2={313.638}
                    gradientUnits='userSpaceOnUse'
                >
                    <Stop stopColor={theme.centerChannelBg}/>
                    <Stop
                        offset={1}
                        stopColor={theme.centerChannelBg}
                        stopOpacity={0}
                    />
                </LinearGradient>
            </Defs>
        </Svg>
    );
};

export default Background;

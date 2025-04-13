import { IconProps } from "@/types/Common"
import { View } from "react-native"
import { G, Path, Svg } from "react-native-svg"



export const NavbarHomeIcon = ({ color, className }: IconProps) => {

    return <View>
        <Svg
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
        >
            <Path
                fill={color ?? "#1C274C"}
                fillRule="evenodd"
                d="m12 3.188 9.45 7.087-.45 1.35h-.75v8.625H3.75v-8.625H3l-.45-1.35zm-6.75 6.937v8.625h13.5v-8.625L12 5.063z"
                clipRule="evenodd"
            ></Path>
        </Svg>

    </View>
};
export const NavbarSearchIcon = ({ color }: IconProps) => {

    return <View>
        <Svg
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
        >
            <Path
                stroke={color ?? "#1C274C"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m20 20-4.197-4.197M18 10.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0"
            ></Path>
        </Svg>
    </View>
};


export const NavbarAddIcon = ({ color }: IconProps) => {
    return (
        <View>
            <Svg
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
            >
                <Path
                    stroke={color ?? "#1C274C"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12h16m-8-8v16"
                ></Path>
            </Svg>
        </View>
    )
};


export const NavbarProfileIcon = ({ color }: IconProps) => {
    return (
        <View>
            <Svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
            >
                <G id="style=linear">
                    <G id="profile" stroke={color ?? "#1C274C"} strokeWidth="1.5">
                        <Path
                            id="vector"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
                        ></Path>
                        <Path
                            id="rec"
                            d="M5 18.571A4.57 4.57 0 0 1 9.571 14h4.858A4.57 4.57 0 0 1 19 18.571 3.43 3.43 0 0 1 15.571 22H8.43A3.43 3.43 0 0 1 5 18.571Z"
                        ></Path>
                    </G>
                </G>
            </Svg>
        </View>
    )
};
export const BackIcon = ({ color }: IconProps) => {
    return (
        <View>
            <Svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                <Path
                    fill={color ?? "#0F0F0F"}
                    d="M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414"
                ></Path>
            </Svg>
        </View>
    )
};



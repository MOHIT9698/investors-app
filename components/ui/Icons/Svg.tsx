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
export const LogoutIcon = ({ color }: IconProps) => {
    return (
        <View>
            <Svg
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 24 24"
            >
                <Path
                    stroke={color ?? "#0F0F0F"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 16.5V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3.063M11 12h10m0 0-2.5-2.5M21 12l-2.5 2.5"
                ></Path>
            </Svg>
        </View>
    )
};
export const EditIcon = ({ color }: IconProps) => {
    return (
        <View>
            <Svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
            >
                <Path
                    fill="#000"
                    fillRule="evenodd"
                    d="M21.121 2.707a3 3 0 0 0-4.242 0l-1.68 1.68-7.906 7.906a1 1 0 0 0-.263.464l-1 4a1 1 0 0 0 1.213 1.213l4-1a1 1 0 0 0 .464-.263l7.849-7.848 1.737-1.738a3 3 0 0 0 0-4.242zm-2.828 1.414a1 1 0 0 1 1.414 0l.172.172a1 1 0 0 1 0 1.414l-1.017 1.017-1.555-1.617zm-2.4 2.4 1.555 1.617-6.96 6.959-2.114.529.529-2.115zM4 8a1 1 0 0 1 1-1h5a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-5a1 1 0 0 0-2 0v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"
                    clipRule="evenodd"
                ></Path>
            </Svg>
        </View>
    )
};
export const CrossIcon = ({ color }: IconProps) => {
    return (
        <View>
            <Svg
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 512 512"
            >
                <G id="Page-1" fill={color ?? "none"} fillRule="evenodd" stroke={color ?? "none"} strokeWidth="1">
                    <G id="work-case" fill={color ?? "#000"} transform="translate(91.52 91.52)">
                        <Path

                            id="Close"
                            d="M328.96 30.293 298.667 0 164.48 134.4 30.293 0 0 30.293l134.4 134.188L0 298.667l30.293 30.293 134.187-134.4 134.187 134.4 30.293-30.293-134.4-134.187z"
                        ></Path>
                    </G>
                </G>
            </Svg>
        </View>
    )
};



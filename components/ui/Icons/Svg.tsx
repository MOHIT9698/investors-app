import { IconProps } from "@/types/Common"
import { View } from "react-native"
import { Defs, G, Path, Svg } from "react-native-svg"



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
export const BackIcon = ({ color ,style}: IconProps) => {
    return (
        <View>
            <Svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                style={style}
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
                    stroke={color ?? "#1C274C"}
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
export const NotificationIcon = ({ color }: IconProps) => {
    return (
        <View>
            <Svg
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 24 24"
            >
                <Path
                    stroke={color ?? "#1C274C"}
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z"
                ></Path>
                <Path
                    stroke={color ?? "#1C274C"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26s1.56.52 1.85 1.26"
                ></Path>
                <Path
                    stroke={color ?? "#1C274C"}
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3 3 0 0 1-.88-2.12"
                ></Path>
            </Svg>
        </View>
    )
};
export const FolderIcon = ({ color }: IconProps) => {
    return (
        <View>
            <Svg
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 24 24"
            >
                <Path
                    fill={color ?? "#1C274C"}
                    d="M4.65 6.471a.75.75 0 0 0-1.5 0zM3.9 17.353h.75zm.468 1.164.538-.523zM5.502 19l-.001.75zm12.396 0v.75h.001zm1.134-.483-.538-.523zm.468-1.164h-.75zm0-9.235h-.75zm-.468-1.164-.538.523zm-1.134-.483.001-.75zm-5.675-.75a.75.75 0 0 0 0 1.5zm-9.073.75a.75.75 0 1 0 1.5 0zm.75-.824h.75zm.468-1.164.538.523zM5.502 4v-.75H5.5zm5.119 0v-.75zm1.133.483-.537.523zm.469 1.164h-.75zm-.75.824a.75.75 0 0 0 1.5 0zM3.9 5.721a.75.75 0 1 0 0 1.5zm8.323 1.5a.75.75 0 0 0 0-1.5zm-9.073-.75v10.882h1.5V6.471zm0 10.881c0 .63.242 1.237.68 1.688l1.076-1.046a.92.92 0 0 1-.256-.64zm.68 1.688c.44.451 1.04.71 1.671.71l.002-1.5a.83.83 0 0 1-.597-.256zm1.672.71h12.396v-1.5H5.502zm12.397 0c.63 0 1.23-.259 1.67-.71l-1.075-1.046a.83.83 0 0 1-.597.256zm1.67-.71a2.42 2.42 0 0 0 .681-1.688l-1.5.002a.92.92 0 0 1-.256.64zm.681-1.687V8.118h-1.5v9.235zm0-9.234c0-.63-.242-1.237-.68-1.688l-1.076 1.046a.92.92 0 0 1 .256.64zm-.68-1.688a2.33 2.33 0 0 0-1.671-.71l-.002 1.5c.22 0 .436.09.597.256zm-1.672-.71h-5.675v1.5h5.675zm-13.248.75v-.824h-1.5v.824zm0-.825c0-.243.094-.473.256-.64L3.831 3.96a2.42 2.42 0 0 0-.681 1.688zm.256-.64a.83.83 0 0 1 .597-.256L5.5 3.25c-.63 0-1.23.259-1.67.71zm.596-.256h5.119v-1.5H5.5zm5.118 0c.22 0 .435.09.597.256l1.075-1.046a2.33 2.33 0 0 0-1.67-.71zm.597.256a.92.92 0 0 1 .256.64l1.5.002c0-.63-.242-1.237-.681-1.688zm.256.641v.824h1.5v-.824zM3.9 7.221h8.323v-1.5H3.9z"
                ></Path>
            </Svg>
        </View>
    )
};
export const MenuDotIcon = ({ color }: IconProps) => {
    return (
        <View>
            <Svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
            >
                <Path
                    stroke={color ?? "#1C274C"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                ></Path>
            </Svg>
        </View>
    )
};


export const ChatIcon = ({ color }: IconProps) => {
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
                    strokeWidth="1.5"
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"
                ></Path>
                <Path
                    stroke={color ?? "#1C274C"}
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M8 10.5h8M8 14h5.5"
                ></Path>
            </Svg>
        </View>
    )
};
export const PortfolioIcon = ({ color }: IconProps) => {
    return (
        <View style={{ marginLeft: -5 }}>
            <Svg
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
            >
                <Path
                    fill="#080341"
                    fillRule="evenodd"
                    d="m9 4.5-.75.75V7.5H4.5l-.75.75v10.5l.75.75h15l.75-.75V8.25l-.75-.75h-3.75V5.25L15 4.5zm5.25 3V6h-4.5v1.5zM9.75 9h4.5v9h-4.5zm-1.5 0h-3v9h3zm7.5 9V9h3v9z"
                    clipRule="evenodd"
                ></Path>
            </Svg>
        </View>
    )
};
export const TradeIcon = ({ color }: IconProps) => {
    return (
        <View>
            <Svg
                width="20"
                height="20"
                viewBox="0 -0.5 17 17"
            >
                <G fill="#434343" fillRule="evenodd">
                    <Path
                        d="M17 14.051H2.885V.084H1.041L1 15.875h.041v.041L17 15.875z"
                    ></Path>
                    <Path
                        d="M16.816 2h-3.727a.13.13 0 0 0-.129.129l1.527 1.533-3.476 4.463L8 6l-3.973 5.188.062 1.75L8.061 8l2.949 2 4.36-5.449L16.813 6a.13.13 0 0 0 .129-.129V2.129A.125.125 0 0 0 16.816 2"
                    ></Path>
                </G>
            </Svg>
        </View>
    )
};
export const DocIcon = ({ color }: IconProps) => {
    return (
        <View>
            <Svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
            >
                <Path
                    fill="#000"
                    fillRule="evenodd"
                    d="M6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3V10a1 1 0 0 0-.293-.707l-8-8A1 1 0 0 0 13 1zm6 2H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9h-7a1 1 0 0 1-1-1zm6.586 6L14 4.414V9z"
                    clipRule="evenodd"
                ></Path>
            </Svg>
        </View>
    )
};
export const TradeArrowDown = ({ color, style }: IconProps) => {
    return (
        <View>
            <Svg
                width="25"
                height="25"
                fill={color ?? "#0F0F0F"}
                viewBox="0 0 16 16"
                style={style}

            >
                <Path
                    // fill="#000"
                    d="m10 13-1-1 2.293-2.293L8.5 6.914l-3 3L.293 4.707l1.414-1.414L5.5 7.086l3-3 4.207 4.207L15 6l1 1v6z"
                ></Path>
            </Svg>
        </View>
    )
};

export const TradeArrowUp = ({ color, style }: IconProps) => {
    return (
        <View>
            <Svg
                style={style}
                width="25"
                height="25"
                fill={color ?? "#0F0F0F"}
                viewBox="0 0 16 16"
            >
                <Path
                    // fill="#000"
                    d="M10 3 9 4l2.293 2.293L8.5 9.086l-3-3-5.207 5.207 1.414 1.414L5.5 8.914l3 3 4.207-4.207L15 10l1-1V3z"
                ></Path>
            </Svg>
        </View>
    )
};




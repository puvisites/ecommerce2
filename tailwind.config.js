module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        yellow_400: "#fae952",
        gray_500: "#9f9f9f",
        gray_800: "#393d46",
        bluegray_100: "#cdcfd1",
        black_900_19: "#00000019",
        black_900_0c: "#0000000c",
        white_A700: "#ffffff",
        black_900_68: "#00000068",
        gray_50: "#f6f7fb",
        black_900_26: "#00000026",
        white_A700_82: "#ffffff82",
      },
      fontFamily: { poppins: "Poppins", playfairdisplay: "Playfair Display" },
      fontSize: {
        fs8: "8px",
        fs9: "9px",
        fs10: "10px",
        fs12: "12px",
        fs13: "13px",
        fs14: "14px",
        fs16: "16px",
        fs18: "18px",
        fs21: "21px",
        fs24: "24px",
        fs27: "27px",
        fs28: "28px",
        fs32: "32px",
        fs36: "36px",
        fs37: "37px",
        fs42: "42px",
        fs43: "43px",
        fs48: "48px",
        fs50: "50px",
        fs54: "54px",
        fs56: "56px",
        fs57: "57px",
        fs64: "64px",
        fs72: "72px",
        fs74: "74px",
        fs85: "85px",
        fs86: "86px",
        fs96: "96px",
        fs115: "115px",
        fs128: "128px",
      },
      lineHeight: {
        lh: "normal",
        lh18: "18px",
        lh21: "21px",
        lh24: "24px",
        lh28: "28px",
        lh3200: "32.00px",
      },
      borderRadius: { radius50: "50%" },
      letterSpacing: { ls1: "1px" },
      opacity: { op5: 0.5 },
      boxShadow: {
        bs2: "0px 16px  25px 0px #0000000c",
        bs3: "0px 16px  50px 0px #0000000c",
        bs1: "0px 16px  50px 0px #00000019",
        bs: "0px 16px  50px 0px #00000026",
      },
      borderWidth: { bw3: "3px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

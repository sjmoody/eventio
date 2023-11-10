import { ButtonProps, MantineThemeOverride } from "@mantine/core";

const ButtonDefaultProps: Partial<ButtonProps> = {
  // structuring it this way sets the types so you make fewer mistakes
  size: "md",
  variant: "light",
};

export const theme: MantineThemeOverride = {
  // colorScheme: "dark", remove to make this variable
  cursorType: "pointer",
  loader: "bars",
  primaryColor: "violet", // default colors: https://v6.mantine.dev/theming/colors/#default-colors
  // colors: { can add colors to theme, but must follow this format where they have 10 variations
  //   "ocean-blue": [
  //     "#7AD1DD",
  //     "#5FCCDB",
  //     "#44CADC",
  //     "#2AC9DE",
  //     "#1AC2D9",
  //     "#11B7CD",
  //     "#09ADC3",
  //     "#0E99AC",
  //     "#128797",
  //     "#147885",
  //   ],
  //   "bright-pink": [
  //     "#F0BBDD",
  //     "#ED9BCF",
  //     "#EC7CC3",
  //     "#ED5DB8",
  //     "#F13EAF",
  //     "#F71FA7",
  //     "#FF00A1",
  //     "#E00890",
  //     "#C50E82",
  //     "#AD1374",
  //   ],
  // },
  components: {
    Button: {
      defaultProps: ButtonDefaultProps,
      // sizes: {
      //   xxxs: () => ({
      //     root: {
      //       height: "1.25rem",
      //       padding: "0.3125rem",
      //       fontSize: "0.5rem",
      //     },
      //   }),

      //   xxl: (theme) => ({
      //     root: {
      //       fontSize: "1.75rem",
      //       height: "5rem",
      //       padding: theme.spacing.xl,
      //     },
      //   }),
      // },
      // variants: {
      //   danger: (theme) => ({
      //     root: {
      //       backgroundColor: theme.colors.red[9],
      //       color: theme.colors.red[0],
      //       ...theme.fn.hover({ backgroundColor: theme.colors.red[8] }),
      //     },
      //   }),

      //   success: (theme) => ({
      //     root: {
      //       backgroundImage: theme.fn.linearGradient(
      //         45,
      //         theme.colors.cyan[theme.fn.primaryShade()],
      //         theme.colors.teal[theme.fn.primaryShade()],
      //         theme.colors.green[theme.fn.primaryShade()]
      //       ),
      //       color: theme.white,
      //     },
      //   }),
      // },
    },
  },
};

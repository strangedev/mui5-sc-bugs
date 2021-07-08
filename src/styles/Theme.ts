interface CustomTheme {
  pink: string;
}

const customTheme: CustomTheme = {
  pink: 'deeppink'
};

declare module '@material-ui/core/styles' {
  export interface Theme {
    custom: CustomTheme;
  }
}


export type {
  CustomTheme
}
export {
  customTheme
}
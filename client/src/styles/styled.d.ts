import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;

            background: string;
            text: string;

            OneBackground: string,
            TwoBackground: string,
            ThreeBackground: string,
            FourBackground: string,
            FiveBackground: string,  
        };
    }
}

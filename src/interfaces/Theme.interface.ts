export interface Theme{
  theme: string;
  setTheme: undefined | ((theme: string) => void)
}
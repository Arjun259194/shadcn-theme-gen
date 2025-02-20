import styled from "styled-components";
import { Theme } from "./hooks/useThemePicker";

export interface StyledWrapper {
   dark: Theme
   light: Theme
}

export const PreviewStyled = styled.div<StyledWrapper>`
   --background: ${({ light }) => light.background};
   --foreground: ${({ light }) => light.foreground};
   --card: ${({ light }) => light.card};
   -cardforeground: ${({ light }) => light.cardForeground};
   --popover: ${({ light }) => light.popover};
   --popoverForeground: ${({ light }) => light.popoverForeground};
   --primary: ${({ light }) => light.primary};
   --primaryForeground: ${({ light }) => light.primaryForeground};
   --secondary: ${({ light }) => light.secondary};
   --secondaryForeground: ${({ light }) => light.secondaryForeground};
   --muted: ${({ light }) => light.muted};
   --mutedForeground: ${({ light }) => light.mutedForeground};
   --accent: ${({ light }) => light.accent};
   --accentForeground: ${({ light }) => light.accentForeground};
   --destructive: ${({ light }) => light.destructive};
   --destructiveForeground: ${({ light }) => light.destructiveForeground};
   --border: ${({ light }) => light.border};
   --input: ${({ light }) => light.input};
   --ring: ${({ light }) => light.ring};
   --chart1: ${({ light }) => light.chart1};
   --chart2: ${({ light }) => light.chart2};
   --chart3: ${({ light }) => light.chart3};
   --chart4: ${({ light }) => light.chart4};
   --chart5: ${({ light }) => light.chart5};
   .dark & {
      --background: ${({ dark }) => dark.background};
      --foreground: ${({ dark }) => dark.foreground};
      --card: ${({ dark }) => dark.card};
      -cardforeground: ${({ dark }) => dark.cardForeground};
      --popover: ${({ dark }) => dark.popover};
      --popoverForeground: ${({ dark }) => dark.popoverForeground};
      --primary: ${({ dark }) => dark.primary};
      --primaryForeground: ${({ dark }) => dark.primaryForeground};
      --secondary: ${({ dark }) => dark.secondary};
      --secondaryForeground: ${({ dark }) => dark.secondaryForeground};
      --muted: ${({ dark }) => dark.muted};
      --mutedForeground: ${({ dark }) => dark.mutedForeground};
      --accent: ${({ dark }) => dark.accent};
      --accentForeground: ${({ dark }) => dark.accentForeground};
      --destructive: ${({ dark }) => dark.destructive};
      --destructiveForeground: ${({ dark }) => dark.destructiveForeground};
      --border: ${({ dark }) => dark.border};
      --input: ${({ dark }) => dark.input};
      --ring: ${({ dark }) => dark.ring};
      --chart1: ${({ dark }) => dark.chart1};
      --chart2: ${({ dark }) => dark.chart2};
      --chart3: ${({ dark }) => dark.chart3};
      --chart4: ${({ dark }) => dark.chart4};
      --chart5: ${({ dark }) => dark.chart5};
   }
`

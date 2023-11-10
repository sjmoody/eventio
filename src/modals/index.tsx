import { BecomeProModalComponent } from "./components/BecomeProModal";
import { ReportBugModalComponent } from "./components/ReportBugModal";
import { StackedModalComponent } from "./components/StackedModals";

export enum GlobalModal {
  becomePro = "becomePro",
  reportBug = "ReportBug",
  stackedModal = "StackedModal",
}

export const globalModals = {
  [GlobalModal.becomePro]: BecomeProModalComponent,
  [GlobalModal.reportBug]: ReportBugModalComponent,
  [GlobalModal.stackedModal]: StackedModalComponent,
};

declare module "@mantine/modals" {
  export interface MantineModalsOverride {
    modals: typeof globalModals;
  }
}

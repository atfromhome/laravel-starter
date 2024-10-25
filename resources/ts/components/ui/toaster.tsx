"use client";

import {
  Toaster as ChakraToaster,
  Icon,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster
} from "@chakra-ui/react";
import { XIcon } from "lucide-react";

export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true
});

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "1rem" }} width={{ md: "356px" }}>
        {(toast) => (
          <Toast.Root>
            {toast.type === "loading" ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator />
            )}
            <Stack gap="1" flex="1" maxWidth="100%">
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
            </Stack>
            {toast.action && <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>}
            {toast.meta?.closable && (
              <Toast.CloseTrigger>
                <Icon asChild boxSize={4}>
                  <XIcon />
                </Icon>
              </Toast.CloseTrigger>
            )}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};

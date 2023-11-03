import { Button, ButtonProps } from "@mantine/core"
import { TwitterIcon } from "@mantine/ds"
import { GoogleIcon } from "./icons/GoogleIcon"

export function TwitterButton(props: ButtonProps & React.ComponentPropsWithoutRef<"button">) {
  return (
    <Button
      leftIcon={<TwitterIcon style={{ width: "1rem", height: "1rem" }} color="#00ACEE" />}
      variant="default"
      {...props}
    />
  )
}

export function GoogleButton(props: ButtonProps & React.ComponentPropsWithoutRef<"button">) {
  return <Button leftIcon={<GoogleIcon />} variant="default" {...props} />
}

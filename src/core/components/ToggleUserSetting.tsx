import setUserSetting from "@/features/users/mutations/setUserSetting";
import { useMutation } from "@blitzjs/rpc";
import { Checkbox } from "@mantine/core";

export const ToggleUserSetting = ({ settings, label, setting }) => {
  const [$setUserSetting, { isLoading }] = useMutation(setUserSetting);
  return (
    <Checkbox
      disabled={isLoading}
      onClick={() => {
        $setUserSetting({
          key: setting,
          value: !settings?.[setting],
        });
      }}
      checked={settings?.[setting]}
      label={label}
    />
  );
};

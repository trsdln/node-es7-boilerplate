const { HOST, PORT, USER_SETTINGS } = process.env;

function parseUserSettings(settingsJson) {
  try {
    return JSON.parse(settingsJson);
  } catch (err) {
    console.error("Failed to parse user settings: ", err);
  }
}

const UserSettings = parseUserSettings(USER_SETTINGS);

export { HOST, PORT, UserSettings };

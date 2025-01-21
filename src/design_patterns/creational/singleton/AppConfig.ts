export default class AppConfig {
  private static instance: AppConfig;
  private settings: Record<string, string | number | boolean> = {};

  private constructor() {}

  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      console.log("Creating a new AppConfig instance");
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  set(key: string, value: string | number | boolean): void {
    this.settings[key] = value;
  }
  get(key: string): string | number | boolean {
    return this.settings[key];
  }
}

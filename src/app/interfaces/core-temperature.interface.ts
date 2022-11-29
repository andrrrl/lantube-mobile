export interface CoreTemperature {
  sensor: 'core' | 'other';
  type: 'temperature';
  temperature: {
      unit: '°C' | '|F';
      value: number;
      coolTempLimit: number;
      dangerTempLimit: number;
  };
}

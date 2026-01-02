export interface RsvpFormState {
  name: string;
  email: string;
  attending: 'yes' | 'no' | 'maybe';
  guests: number;
  message: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export type TogglState = {
  apiToken: ?string,
  clients: Array<Client>,
  isLogged: boolean,
  response: any,
  isLoading: boolean,
  wasLoaded: boolean,
  error: boolean,
  projects: Array<Project>,
  timeEntries: GrouppedTimeEntries
};

export type Client = {
  id: number,
  wid: number,
  name: string,
  at: string
};

export type GrouppedTimeEntries = {
  [date: string]: GrouppedTimeEntry
};

export type GrouppedTimeEntry = {
  totalTime: number,
  entries: Array<TimeEntry>
};

export type TimeEntry = {
  id: number,
  guid?: string,
  wid: number,
  pid?: number,
  billable: boolean,
  start: string,
  stop?: string,
  duration: number,
  description?: string,
  duronly: boolean,
  at: string,
  uid: number
};

export type Project = {
  id: number,
  wid: number,
  name: ?string,
  billable: boolean,
  is_private: boolean,
  active: boolean,
  template: boolean,
  at: string,
  created_at: string,
  color: string,
  auto_estimates: boolean,
  hex_color: string
};

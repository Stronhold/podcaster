interface Status {
  content_length: number;
  content_type: string;
  http_code: number;
  response_time: number;
  url: string;
}

export interface BaseDTO {
  contents: string;
  status: Status;
  date?: number;
}

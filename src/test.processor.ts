import { JOB_REF, Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { Inject, Scope } from "@nestjs/common";

@Processor('audio')
export class TestProcessor {
  constructor() {
    console.log('Job ref:');
  }
  @Process()
  async transcode(job: Job<unknown>) {
    console.log('Start transcoding...', job.data);
    return {};
  }
}

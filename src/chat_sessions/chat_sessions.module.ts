import { Module } from '@nestjs/common';
import { ChatSessionsService } from './chat_sessions.service';

@Module({
  providers: [ChatSessionsService]
})
export class ChatSessionsModule {}
